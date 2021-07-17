// Create variables targetting the relevant DOM elements here 👇
var coverImageElement = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var mainCover = document.querySelector(".main-cover");
var randomCoverImage = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var makeBookButton = document.querySelector(".create-new-book-button");
var tgLine1 = document.querySelector(".tagLine");
var tgLine2 = document.querySelector(".tagLine-1");
var tgLine3 = document.querySelector(".tagLine-2");
var usrDesc = document.querySelector(".user-desc1");
var usrDesc2 = document.querySelector(".user-desc2");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var form = document.querySelector("form");
var savedCoversSection = document.querySelector(".saved-covers-section");

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", createCover);
randomCoverImage.addEventListener("click", createCover);
homeButton.addEventListener("click", flipHomeView);
makeNewButton.addEventListener("click", flipFormView);
saveCoverButton.addEventListener("click", pushSavedCover);
makeBookButton.addEventListener("click", createUsrCover);
viewSavedButton.addEventListener("click", toggleSaveView);
savedCoversSection.addEventListener("dblclick", deleteMiniCover);


// Create your event handlers and other functions here 👇

//optional extension: remove unnecessary functionality of formView button while on form page
// optional extension: stop input value from causing duplicates in arrays
// optional extension: make saved covers smaller

function flipHomeView() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  randomCoverImage.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  savedView.classList.add("hidden");
}

function flipFormView() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  homeButton.classList.remove("hidden");
  randomCoverImage.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  savedView.classList.add("hidden");
}

function toggleSaveView() {
  savedView.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  randomCoverImage.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  showSavedCoverArray();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//
function createCover() {
  var tgLine2 = descriptors[getRandomIndex(descriptors)];
  var tgLine3 = descriptors[getRandomIndex(descriptors)];
  var title = titles[getRandomIndex(titles)];
  var coverImgSrc = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImgSrc, title, tgLine2, tgLine3);
  displayCover(currentCover);
}

function createUsrCover(event) {
  event.preventDefault();
  var tgLine2 = usrDesc.value;
  var tgLine3 = usrDesc2.value;
  var title = userTitle.value;
  var coverImgSrc = userCover.value;
  currentCover = new Cover(coverImgSrc, title, tgLine2, tgLine3);
  pushUserCover();
  form.reset();
  flipHomeView();
  displayCover(currentCover);
}

function pushUserCover(coverImgSrc, title, tgLine2, tgLine3) {
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(usrDesc.value);
  descriptors.push(usrDesc2.value);
}

function displayCover(cover) {
  coverImageElement.setAttribute("src", cover.cover);
  title.innerText = cover.title;
  tgLine2.innerText = cover.tgLine2;
  tgLine3.innerText = cover.tgLine3;
};

function pushSavedCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function showSavedCoverArray() {
  savedCoversSection.innerText = "";
  for (var i = 0; i < savedCovers.length; i++) {
    var newMiniCover = `
      <section class="main-cover" data-id=${savedCovers[i].id}>
        <img class="cover-image" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagLine1">A tale of <span class="tagLine1-1">${savedCovers[i].tgLine2}</span> and <span class="tagLine1-2">${savedCovers[i].tgLine3}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
    `;
    savedCoversSection.insertAdjacentHTML("afterbegin", newMiniCover);
  }
}

function deleteMiniCover(event) {
  if (event.target.closest(".main-cover")) {
    var selectedCoverHTML = event.target.closest(".main-cover");
    for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id === Number(selectedCoverHTML.dataset.id)) {
        savedCovers.splice(i, 1);
      }
    }
    showSavedCoverArray();
  }
}
