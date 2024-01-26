//=include header.js
//=include footer.js

// const userName = "Ivan";
// console.log(`это новый общий консоль ${userName}`);

// $(document).ready(function(){
//   $(".card-slider").slick();
// });

$(document).ready(function () {
  $(".card-slider").slick({
    prevArrow: ".btn--slider-prev",
    nextArrow: ".btn--slider-next",
  });
});

$(".card-slider").on("afterChange", function (event, slick, current_slide_index, next_slide_index) {
  event.target.classList.add("animate__animated");
  event.target.classList.add("animate__bounce");
});
