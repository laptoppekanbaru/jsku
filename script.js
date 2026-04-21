(function () {

  function checkBanner() {
    var allowedPath = "/2026/04/review-hostinger-cloud-hosting.html";
    var currentPath = window.location.pathname;

    var banner = document.querySelector(".banner-hosting");

    if (!banner) return;

    if (currentPath !== allowedPath) {
      banner.style.display = "none";
    }
  }

  function init() {
    checkBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();