/** @format */

const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);

const projectsContainer = document.querySelectorAll(
  ".projects__single-project"
);
const htmlSortButton = document.querySelector(
  ".projects__filter-button-link-html"
);
const cssSortButton = document.querySelector(
  ".projects__filter-button-link-css"
);
const jsSortButton = document.querySelector(".projects__filter-button-link-js");
let count = 0;
htmlSortButton.addEventListener("click", sortHTML);
cssSortButton.addEventListener("click", sortCSS);
jsSortButton.addEventListener("click", sortJS);

function sortHTML() {
  for (let i = 0; i < projectsContainer.length; i++) {
    for (
      let j = 0;
      j <
      projectsContainer[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        projectsContainer[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.toLowerCase()
      ) {
        case "html":
          projectsContainer[i].style.setProperty("order", count--);
          console.log("html ok");

          break;
      }
    }
  }
}

function sortCSS() {
  for (let i = 0; i < projectsContainer.length; i++) {
    for (
      let j = 0;
      j <
      projectsContainer[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        projectsContainer[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.toLowerCase()
      ) {
        case "css":
          projectsContainer[i].style.setProperty("order", count--);
          console.log("css ok");

          break;
      }
    }
  }
}
function sortJS() {
  for (let i = 0; i < projectsContainer.length; i++) {
    for (
      let j = 0;
      j <
      projectsContainer[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        projectsContainer[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.trim()
          .toLowerCase()
      ) {
        case "javascript":
          projectsContainer[i].style.setProperty("order", count--);
          console.log("js ok");
          break;
      }
    }
  }
}

const newProjectBtn = document.querySelector(
  ".projects__add-new-project__button"
);

newProjectBtn.addEventListener("click", buildOverlay);

function buildOverlay() {
  
}