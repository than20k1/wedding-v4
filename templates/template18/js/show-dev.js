// patch-contextmenu.js
// Disable all contextmenu blockers on the page

// Remove inline handlers
window.oncontextmenu = null;
document.oncontextmenu = null;

// Stop all existing listeners from blocking
// (including jQuery, addEventListener, and minified binds)
document.addEventListener(
  "contextmenu",
  function (e) {
    e.stopImmediatePropagation();
  },
  true
);

// Optional: allow context menu by default
document.addEventListener("contextmenu", function (e) {
  return true;
});
