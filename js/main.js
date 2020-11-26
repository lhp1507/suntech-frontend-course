$(() => {
  // Menu toggle:
  $(".burger").click(function () {
    $(".menu__dir").toggleClass("active");
  });
  //

  // Modal-click
  /* Sự kiện hiện modal khi click vào sản phẩm */
  $(".detail img").click(function () {
    $(".modal").css("visibility", "visible");
    $("body").css("overflow", "hidden");
  });

  /* Thay đổi sản phẩm trong modal */
  $(".thumb img").click(function () {
    let imgPath = $(this).attr("src");
    $("img.main").attr("src", imgPath);
  });
  $(".product-detail").click(function () {
    return false;
  });

  /* Tắt modal khi nhấn vào ra ngoài */
  $(".modal").click(function () {
    $(".modal").css("visibility", "hidden");
    $("body").css("overflow", "visible");
  });
  //

  // Submit-btn:
  $(".submit-btn").click(function () {
    alert("Submitted! \nPlease check your email! Thank you!");

    var url = "https://github.com/lhp1507";
    window.open(url, "_blank"); //open in new tab
    // document.location.href = url; // open in the same tab
  });
  //
});
