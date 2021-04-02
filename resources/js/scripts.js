$(() => {
  // Menu toggle:
  $(".burger").click(function () {
    $(".menu__dir").toggleClass("active");
  });
  // Submit-btn:
  $(".submit-btn").click(function () {
    alert("Submitted! \nPlease check your email! Thank you!");
    var url = "https://github.com/lhp1507";
    window.open(url, "_blank"); //open in new tab
    // document.location.href = url; // open in the same tab
  });
  //slider - owl carousel:
  $("#owl-my").owlCarousel({
    loop: true,
    navigation: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    // autoHeight: true,
    transitionStyle: "fade",
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
  });
  //Source: http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/autoHeight.html
});
