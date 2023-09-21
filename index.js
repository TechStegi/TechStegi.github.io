/** @format */

const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);

console.log(headerHeight);
