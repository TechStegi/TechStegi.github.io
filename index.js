/* START - NOT USED - GET THE HEIGHT OF THE HEADER ALIAS NAVBAR ELEMENT */
const headerEl = document.querySelector("header");
const headerHeight = headerEl.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-margin",
  headerHeight + "px"
);
/* END - NOT USED - GET THE HEIGHT OF THE HEADER ELEMENT */



/* START - CENTER THE WELCOME SECTION */
// the if statement acts like the media query for (width >= 980px)
if (window.innerWidth >= 980) {
  const welcomeSection = document.querySelector("[data-id='welcome']");
  const welcomeHeight = window.innerHeight - headerHeight;

  welcomeSection.style.setProperty("height", welcomeHeight - 50 + "px");
}
/* END - CENTER THE WELCOME SECTION */



/* START - SCROLL TO TOP when clicking on the  "Welcome" link in the nav menu */
const welcomeLink = document.querySelector("[data-id='welcome-link']");
welcomeLink.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
/* END - SCROLL TO TOP */



/* START - SORT PROJECTS BY CODING LANGUAGES VIA BUTTONS */
const singleProjectDiv = document.querySelectorAll(
  "[data-id='single-project-div']"
);
const htmlSortButton = document.querySelector("[data-id='html-button']");
const cssSortButton = document.querySelector("[data-id='css-button']");
const jsSortButton = document.querySelector("[data-id='js-button']");
let count = 0;
htmlSortButton.addEventListener("click", sortHTML);
cssSortButton.addEventListener("click", sortCSS);
jsSortButton.addEventListener("click", sortJS);

function sortHTML() {
  for (let i = 0; i < singleProjectDiv.length; i++) {
    const tags = singleProjectDiv[i].querySelectorAll("[data-id='tags']");

    for (let j = 0; j < tags.length; j++) {
      const tag = tags[j].textContent.toLowerCase().trim();

      if (tag == "html") {
        singleProjectDiv[i].style.order = count;
        count--;
      }
    }
  }
}
function sortCSS() {
  for (let i = 0; i < singleProjectDiv.length; i++) {
    const tags = singleProjectDiv[i].querySelectorAll("[data-id='tags']");

    for (let j = 0; j < tags.length; j++) {
      const tag = tags[j].textContent.toLowerCase().trim();

      switch (tag) {
        case "css":
          singleProjectDiv[i].style.setProperty("order", count--);
          break;
      }
    }
  }
}
function sortJS() {
  for (let i = 0; i < singleProjectDiv.length; i++) {
    const tags = singleProjectDiv[i].querySelectorAll("[data-id='tags']");

    for (let j = 0; j < tags.length; j++) {
      const tag = tags[j].textContent.toLowerCase().trim();

      switch (tag) {
        case "javascript":
          singleProjectDiv[i].style.setProperty("order", count--);
          break;
      }
    }
  }
}
/* END - SORTING BUTTONS */



/* BUILD OVERLAY START */ 
const overlayBtn = document.querySelector("[data-id='open-overlay']");
overlayBtn.addEventListener("click", () => {
  buildOverlayWrapper.classList.remove("hidden");
});
const buildOverlayWrapper = document.querySelector(
  "[data-id='build-overlay-container']"
);

// set the height of the build overlay wrapper to the height of the body / the whole document so far
const body = document.body;
buildOverlayWrapper.style.height = body.offsetHeight + "px";
const newProjectBtn = document.querySelector(
  ".projects__add-new-project__button"
);
// newProjectBtn.addEventListener("click", buildOverlay);
// function buildOverlay() {}


// letting users click to upload an image
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


// rest of the input fields, tags and description
const cardTags = document.querySelectorAll(".custom-tags-list-item");
const tagInputs = document.querySelectorAll("[data-id='tag-input']");

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
/* BUILD OVERLAY END*/