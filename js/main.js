let circleMouse = document.getElementById("mse-circle");
let emailCopiedBanner = document.getElementById("nfn-banner");
let emailBtn = document.getElementsByClassName("emailBtn");

const followMouseMove = (e) => {
  circleMouse.style.left = e.pageX + "px";
  circleMouse.style.top = e.pageY + "px";
};

let copyToClipboard = (element) => {
  var $tempInput = $("<input>");
  $("body").append($tempInput);
  $tempInput.val($(element).text()).select();
  document.execCommand("copy");
  $tempInput.remove();
};

document.addEventListener("mousemove", followMouseMove);
// Loop through the Class
let showBanner = function (eName) {
  eName.style.top = "1rem";
  eName.style.opacity = "1";
  setTimeout(() => {
    eName.style.top = "-5rem";
    eName.style.opacity = "0";
  }, 3000);
};

for (var i = 0; i < emailBtn.length; i++) {
  emailBtn[i].addEventListener("click", () => {
    showBanner(emailCopiedBanner);
  });
}
