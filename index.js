/** @format */

const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);

console.log(headerHeight);

const singleProjects = document.querySelectorAll(".projects__single-project");
const tagsList = document.querySelector(
  ".projects__single-project__tags__list"
);
const tags = document.querySelectorAll(
  ".projects__single-project__tags__list__item"
);
let count = 0;
let lastCount = 50;

for (let i = 0; i < singleProjects.length; i++) {
  for (let j = 0; j < tags.length; j++) {
    let containHtml = tags[j].classList.contains("html");
    let containHtmlLength = containHtml.length;
    if (containHtml) {
      singleProjects[i].style.setProperty("order", `${count}`);
      count++;
    /* 
 console.log([i] + " containHtml: " + containHtml);
      console.log([i] + " containHtmlLength: " + containHtmlLength);
 */
    } else {
      singleProjects[i].style.setProperty("order", `${lastCount}`);
      lastCount++;
    }
  }
/*
 console.log([i] + " singleProjects: " + singleProjects);
  console.log([i] + " singleProjects.length: " + singleProjects.length);

  console.log([i] + " tags: " + tags);
  console.log([i] + " tags.length: " + tags.length);
*/
}
