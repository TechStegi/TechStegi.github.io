/** @format */

const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  headerHeight + 15 + "px"
);

console.log(headerHeight);
