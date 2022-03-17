// Display Baby Raymond
function displayImg(hovTag, imgTag, imgOg) {
  $(hovTag).hover(
    function () {
      $(imgTag).removeClass("img__fade--zero");
      $(imgOg).addClass("img__fade--zero");
    },
    function () {
      $(imgOg).removeClass("img__fade--zero");
      $(imgTag).addClass("img__fade--zero");
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
