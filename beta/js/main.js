// Display Baby Raymond
function displayImg(hovTag, imgTag, imgOg) {
  $(hovTag).hover(
    function () {
      $(imgTag).removeClass("img-switch-fade");
      $(imgOg).addClass("img-switch-fade");
    },
    function () {
      $(imgOg).removeClass("img-switch-fade");
      $(imgTag).addClass("img-switch-fade");
    }
  );
}

$(document).ready(function () {
  // Display Image
  displayImg(
    "#about-design",
    "#about-intro-img-design",
    "#about-intro-img-default"
  );
  displayImg(
    "#about-code",
    "#about-intro-img-code",
    "#about-intro-img-default"
  );
  displayImg(
    "#about-play",
    "#about-intro-img-play",
    "#about-intro-img-default"
  );
});
