// declare variables for each insect ...

let insectOne = document.querySelector("#insect-1");
let insectOneInfo = document.querySelector("#insect-1-info");

let insectTwo = document.querySelector("#insect-2");
let insectTwoInfo = document.querySelector("#insect-2-info");

// write generic toggle function ...

let selectInsect = (insect, insectInfo) => {
  insect.classList.toggle("active");
  insectInfo.classList.toggle("active");
};

// add event listeners for each insect ...

insectOne.addEventListener("click", () => {
  selectInsect(insectOne, insectOneInfo);
});

insectTwo.addEventListener("click", () => {
    selectInsect(insectTwo, insectTwoInfo);
  });

let exitButton = document.querySelectorAll("button.exit");

let exitFunction = () => {
  let active = document.querySelectorAll(".active");
  active.forEach((e) => {
    e.classList.remove("active");
  });
};

exitButton.forEach((e) => {
  e.addEventListener("click", () => {
    exitFunction();
  });
});
