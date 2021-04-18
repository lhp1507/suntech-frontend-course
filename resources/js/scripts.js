$(() => {
  // Menu toggle:
  $(".burger").click(function () {
    // $(".menu__dir").toggleClass("active");
    $(".menu__dir").toggleClass("show");
  });
  // form-submit:
  $(".form-submit").click(function () {
    alert("Submitted! \nPlease check your email! Thank you!");
    var url = "https://github.com/lhp1507";
    window.open(url, "_blank"); //open in new tab
    // document.location.href = url; // open in the same tab
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
});
