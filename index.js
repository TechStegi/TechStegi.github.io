const headerEl = document.querySelector("header");

const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);

const singleProjectDiv = document.querySelectorAll(".projects__single-project");
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
  for (let i = 0; i < singleProjectDiv.length; i++) {
    for (
      let j = 0;
      j <
      singleProjectDiv[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        singleProjectDiv[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.toLowerCase()
      ) {
        case "html":
          singleProjectDiv[i].style.setProperty("order", count--);
          console.log("html ok");

          break;
      }
    }
  }
}

function sortCSS() {
  for (let i = 0; i < singleProjectDiv.length; i++) {
    for (
      let j = 0;
      j <
      singleProjectDiv[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        singleProjectDiv[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.toLowerCase()
      ) {
        case "css":
          singleProjectDiv[i].style.setProperty("order", count--);
          console.log("css ok");

          break;
      }
    }
  }
}
function sortJS() {
  for (let i = 0; i < singleProjectDiv.length; i++) {
    for (
      let j = 0;
      j <
      singleProjectDiv[i].querySelectorAll(
        ".projects__single-project__tags__list__item"
      ).length;
      j++
    ) {
      switch (
        singleProjectDiv[i]
          .querySelectorAll(".projects__single-project__tags__list__item")
          [j].textContent.trim()
          .toLowerCase()
      ) {
        case "javascript":
          singleProjectDiv[i].style.setProperty("order", count--);
          console.log("js ok");
          break;
      }
    }
  }
}

const overlayBtn = document.querySelector("[data-id='open-overlay']");
overlayBtn.addEventListener("click", () => {
  buildOverlayWrapper.classList.remove("hidden");
});
const buildOverlayWrapper = document.querySelector(
  "[data-id='build-overlay-container']"
);
const body = document.body;
buildOverlayWrapper.style.height = body.offsetHeight + "px";

const newProjectBtn = document.querySelector(
  ".projects__add-new-project__button"
);

newProjectBtn.addEventListener("click", buildOverlay);

function buildOverlay() {}

const imageUploadContainer = document.querySelector(
  "[data-id='image-upload-input-container']"
);
const imageUpload = document.querySelector("[data-id='image-upload-input']");

imageUploadContainer.addEventListener("click", clickToChange);

function clickToChange() {
  imageUpload.click();
}

function insertImage(input) {
  const file = input.files[0];

  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.objectFit = "cover";
    img.style.width = "100%";
    img.style.height = "100%";
    imageUploadContainer.style.width = imageUploadContainer.offsetWidth + "px";
    imageUploadContainer.style.height =
      imageUploadContainer.offsetHeight + "px";
    while (imageUploadContainer.firstChild) {
      imageUploadContainer.removeChild(imageUploadContainer.firstChild);
    }
    imageUploadContainer.appendChild(img);
  }
}

const cardTags = document.querySelectorAll(".custom-tags-list-item");
const tagInputs = document.querySelectorAll("[data-id='tag-input']");
console.log(tagInputs.length);

const descriptionInput = document.querySelector("[name='desc-input']");
const cardDesc = document.querySelector("[data-id='card-description']");

descriptionInput.addEventListener("click", () => {
  const descValue = descriptionInput.value;
  cardDesc.textContent = descValue;
});

for (let i = 0; i < tagInputs.length; i++) {
  tagInputs[i].addEventListener("focus", function changeCardTags() {
    const value1 = tagInputs[0].value;
    const value2 = tagInputs[1].value;
    const value3 = tagInputs[2].value;

    cardTags[0].textContent = value1;
    cardTags[1].textContent = value2;
    cardTags[2].textContent = value3;
  });
}

const customCard = document.querySelector("[data-id='custom-project-card']");
const addProjectBtn = document.querySelector("[data-id='add-project-btn']");
addProjectBtn.addEventListener("click", () => {
  singleProjectDiv[1].parentNode.appendChild(customCard);
  buildOverlayWrapper.classList.add("hidden");
});
