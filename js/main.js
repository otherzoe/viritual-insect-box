// declare variables for each insect ...

let insectOne = document.querySelector("#insect-1");
let insectOneInfo = document.querySelector("#insect-1-info");

// write generic toggle function ...

let selectInsect = (insect, insectInfo) => {
	insect.classList.add("active");
    insectInfo.classList.add("active");
}

// add event listeners for each insect ...

insectOne.addEventListener("click", () => {
    selectInsect(insectOne, insectOneInfo);
});