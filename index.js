/** @format */

const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);

console.log(headerHeight);

// /* Disable default link behavior of tag links */
// document.addEventListener("DOMContentLoaded", function () {
//   const tagLinks = document.querySelectorAll(".projects__filter-button-link");

//   for (let i = 0; i < tagLinks.length; i++) {
//     if (tagLinks[i]) {
//       tagLinks[i].addEventListener("click", function (event) {
//         event.preventDefault();
//       });
//     }
//   }
// });

/* Trying to sort with Javascript */

// const singleProjects = document.querySelectorAll(".projects__single-project");
// const tagDiv = document.querySelectorAll(".projects__single-project__tags");
// const tagList = document.querySelectorAll(
//   ".projects__single-project__tags__list"
// );
// let count = -1;

// for (let i = 0; i < singleProjects.length; i++) {
//   console.log("%c Round Number: " + i, "color: white; background: purple;");
//   // console.log('%c SingleProject in Main Loop: ' + i, 'color: red;');
//   const tags = tagList[i].querySelectorAll(
//     ".projects__single-project__tags__list__item"
//   );
//   for (let j = 0; j < tags.length; j++) {
//     console.log("Tags length: " + tags[j].textContent);
//     if (tags[j].textContent === "html") {
//       singleProjects[i].style.setProperty("order", `${count}`);
//       count--;
//       console.log("Count: " + count);
//       // console.log('%c SingleProject in Nested Loop: ' + i, 'color: yellow');
//       // console.log('%c Tags: ' + singleProjects[i].querySelectorAll(
//       //   ".projects__single-project__tags__list__item"
//       // ).length, 'color: green')
//     }
//   }
// }

// let count = 0;
// let lastCount = 50;

// for (let i = 0; i < singleProjects.length; i++) {
//   const tagsList = document.querySelector(
//     ".projects__single-project__tags__list"
//   );
//   for (let j = 0; j < singleProjects[i].tagsList.tags.length; j++) {
//     console.log("%c" + singleProjects[i].tagsList.tags.length, "color: green;");
//     let containHtml =
//       singleProjects[i].tagsList.tags[j].classList.contains("html");
//     let containHtmlLength = containHtml.length;
//     if (containHtml) {
//       singleProjects[i].style.setProperty("order", `${count}`);
//       count++;
//       console.log([i] + " containHtml: " + containHtml);
//       console.log([i] + " containHtmlLength: " + containHtmlLength);
//     } else {
//       singleProjects[i].style.setProperty("order", `${lastCount}`);
//       lastCount++;
//     }
//   }
//   console.log([i] + " singleProjects: " + singleProjects);
//   console.log([i] + " singleProjects.length: " + singleProjects.length);
//   console.log([i] + " tags: " + tags);
//   console.log([i] + " tags.length: " + tags.length);
// }
