/**
 * Public Policy Lab — Website v2
 * js/main.js — Site-wide JavaScript
 *
 * This file handles three things:
 *   1. Navbar scroll behavior — transparent on hero, solid after scroll
 *   2. Mobile hamburger menu toggle
 *   3. Scroll reveal animations — fade-in elements as they enter the viewport
 *   4. Impact card expand/collapse toggle (called inline via onclick)
 *
 * No external JS dependencies. Pure vanilla JS for maximum simplicity
 * and page load speed.
 */


/* ============================================================
   1. NAVBAR SCROLL BEHAVIOR
   On the home page (index.html), the navbar starts transparent
   so it overlays the dark hero section without a visible bar.
   Once the user scrolls past a threshold, the .scrolled class
   is added, which makes the navbar solid white (defined in CSS).

   On interior pages the navbar starts with .scrolled already
   applied in the HTML, so this only matters for index.html.
   ============================================================ */

// Grab the navbar element — present on every page
const navbar = document.getElementById('navbar');

// Only run the scroll listener if the navbar exists
if (navbar) {

  /**
   * handleNavbarScroll — checks scroll position and toggles the
   * .scrolled class on the navbar.
   * Called on 'scroll' event and once immediately on load.
   */
  function handleNavbarScroll() {
    // If user has scrolled more than 60px down, make navbar solid
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      // Only remove .scrolled on the home page (index.html);
      // interior pages always stay solid.
      if (!navbar.classList.contains('always-scrolled')) {
        navbar.classList.remove('scrolled');
      }
    }
  }

  // Listen for scroll events with passive: true for performance
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // Run once on page load in case user is already scrolled (e.g. browser back)
  handleNavbarScroll();
}


/* ============================================================
   2. MOBILE HAMBURGER MENU TOGGLE
   On small screens, the nav links are hidden and a hamburger
   button appears. Clicking it toggles the .open class on the
   links container, which shows/hides the mobile menu.
   ============================================================ */

const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks  = document.getElementById('navbar-links');

if (navbarToggle && navbarLinks) {

  /**
   * toggleMobileNav — opens or closes the mobile nav menu.
   */
  navbarToggle.addEventListener('click', function () {
    // Toggle the .open class — CSS handles the show/hide
    const isOpen = navbarLinks.classList.toggle('open');

    // Update aria-expanded for accessibility screen readers
    navbarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile menu if user clicks a nav link (navigates away)
  navbarLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      navbarLinks.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu if user clicks anywhere outside the navbar
  document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target)) {
      navbarLinks.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ============================================================
   3. SCROLL REVEAL ANIMATIONS
   Elements with the class .reveal start invisible (opacity: 0,
   translateY: 24px — defined in CSS). When they enter the
   viewport, we add the .visible class which triggers the CSS
   transition to full opacity and position.

   Uses IntersectionObserver for performance — no scroll polling.
   ============================================================ */

// Select all elements marked for reveal animation
const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length > 0 && 'IntersectionObserver' in window) {

  /**
   * revealObserver — watches each .reveal element and fires
   * when it enters the viewport at a 10% threshold.
   */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Element is in view — trigger the reveal animation
          entry.target.classList.add('visible');

          // For staggered grids (.reveal-stagger), also reveal children
          if (entry.target.classList.contains('reveal-stagger')) {
            entry.target.querySelectorAll(':scope > *').forEach(function (child) {
              child.classList.add('reveal', 'visible');
            });
          }

          // Once revealed, stop observing to save resources
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      // Trigger when at least 10% of the element is visible
      threshold: 0.10,
      // Small negative margin so reveal fires slightly before element hits viewport edge
      rootMargin: '0px 0px -40px 0px'
    }
  );

  // Start observing every .reveal element on the page
  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

} else {
  // Fallback: if IntersectionObserver not supported (very old browsers),
  // just make all elements visible immediately with no animation
  revealElements.forEach(function (el) {
    el.classList.add('visible');
  });
}


/* ============================================================
   4. IMPACT CARD EXPAND / COLLAPSE
   Called from onclick="toggleImpact(this)" on the toggle buttons
   inside each .impact-card on work.html and index.html.

   Toggles the .expanded class on the parent .impact-card,
   which CSS uses to show/hide the .impact-full div.
   Also updates the button text between "Read more" / "Show less".
   ============================================================ */

/**
 * toggleImpact — expands or collapses an impact card.
 * @param {HTMLElement} btn — the toggle button that was clicked
 */
function toggleImpact(btn) {
  // Walk up to find the parent .impact-card
  const card = btn.closest('.impact-card');
  if (!card) return;

  // Toggle expanded state
  const isExpanded = card.classList.toggle('expanded');

  // Update the button label text (keep the arrow icon, just swap the text node)
  const textNode = btn.childNodes[0]; // First child is the text node before the arrow span
  if (textNode && textNode.nodeType === Node.TEXT_NODE) {
    textNode.textContent = isExpanded ? 'Show less ' : 'Read more ';
  }
}

// Expose globally so inline onclick attributes can call it
window.toggleImpact = toggleImpact;


/* ============================================================
   5. ACTIVE NAV LINK HIGHLIGHTING
   Marks the correct nav link as .active based on current page URL.
   This supplements the .active class set statically in HTML,
   as a safety net in case HTML gets out of sync.
   ============================================================ */

(function highlightActiveNavLink() {
  // Get just the filename part of the current URL path
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Find all nav links and check if their href matches the current page
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
})();
