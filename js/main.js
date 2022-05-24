let circleMouse = document.getElementById("mse-circle");

const followMouseMove = (e) => {
  circleMouse.style.left = e.pageX + "px";
  circleMouse.style.top = e.pageY + "px";
};

document.addEventListener("mousemove", followMouseMove);
