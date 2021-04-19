$(() => {
  // burger menu:
  $(".burger").click(function () {
    $(".menu__dir").toggleClass("show");
  });
  //slider - owl carousel:
  $("#owl-my").owlCarousel({
    //Source: http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/autoHeight.html
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
  // form-submit:
  $(".form-submit").click(function () {
    alert("Submitted! \nPlease check your email! Thank you!");
    var url = "https://github.com/lhp1507";
    window.open(url, "_blank");
  });
  // back to top:
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, linear);
  });
});
