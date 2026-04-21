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

  function redirectAffiliate() {
    var currentUrl = window.location.href;

    if (currentUrl === "https://www.mohdpurwadi.web.id/hostinger2026") {
      window.location.replace(
        "https://www.hostinger.com?REFERRALCODE=LDGADIARYRAD"
      );
    }
  }

  function init() {
    checkBanner();
    redirectAffiliate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();