/* Created by Tivotal */

const buttons = document.querySelectorAll("button");
const progressbar = document.querySelector(".indicator");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

const updateStep = (e) => {
  //update current step based on button click
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;

  //loop circles and add or remove class active based on current step value

  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  //update progress bar based on current step value

  progressbar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;

  //checking if current step is last or first and enable or disable buttons

  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", updateStep);
});
