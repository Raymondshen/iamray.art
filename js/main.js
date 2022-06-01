/* -- Document Ready -- */
$(document).ready(function () {
  /* Variables */
  let circleMouse = document.getElementById("mse-circle");
  let txtCopiedBanner = document.getElementById("nfn-banner");
  let emailBtn = document.getElementsByClassName("emailBtn");
  let idxEmailBtn = document.getElementById("idx-emailBtn-desktop");

  /* Functions */

  // Follow Mouse
  let followMouseMove = (e) => {
    circleMouse.style.left = e.pageX + "px";
    circleMouse.style.top = e.pageY + "px";
  };

  // Show Banner
  let showBanner = function (eName) {
    eName.style.top = "1rem";
    eName.style.opacity = "1";
    setTimeout(() => {
      eName.style.top = "-5rem";
      eName.style.opacity = "0";
    }, 3000);
  };

  // Animate Text Up & Down
  let animateTxtIn = function () {
    let emailName = document.getElementById("idx-contact-email-name");
    let emailCopy = document.getElementById("idx-contact-email-copy");

    emailCopy.style.transform = "translateY(-7.5vw)";
    emailName.style.transform = "translateY(-7.5vw)";
    emailCopy.style.opacity = "1";
    emailName.style.opacity = "0";
  };
  let animateTxtOut = function () {
    let emailName = document.getElementById("idx-contact-email-name");
    let emailCopy = document.getElementById("idx-contact-email-copy");

    emailCopy.style.transform = "translateY(0rem)";
    emailName.style.transform = "translateY(0rem)";
    emailCopy.style.opacity = "0";
    emailName.style.opacity = "1";
  };
  /* Functions */

  /* Loop */
  // If Clicked on this Email Btn
  for (var i = 0; i < emailBtn.length; i++) {
    emailBtn[i].addEventListener("click", () => {
      showBanner(txtCopiedBanner);
    });
  }
  /* Loop */

  /* Call Function */
  document.addEventListener("mousemove", followMouseMove);
  idxEmailBtn.addEventListener("mouseover", () => {
    animateTxtIn();
  });
  idxEmailBtn.addEventListener("mouseout", () => {
    animateTxtOut();
  });
  /* Call Function */
});
/* -- Document Ready -- */

// Clipboard Copy
let copyToClipboard = (element) => {
  var $tempInput = $("<input>");
  $("body").append($tempInput);
  $tempInput.val($(element).text()).select();
  document.execCommand("copy");
  $tempInput.remove();
};
