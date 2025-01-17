// Create variables targetting the relevant DOM elements here 👇
var coverImageElement = document.querySelector(".cover-image");
var title = document.querySelector(".cover-title");
var mainCover = document.querySelector(".main-cover");
var randomCoverImage = document.querySelector(".random-cover-button");
var makeNewButton = document.querySelector(".make-new-button");
var makeBookButton = document.querySelector(".create-new-book-button");
var tgLine1 = document.querySelector(".tagline");
var tgLine2 = document.querySelector(".tagline-1");
var tgLine3 = document.querySelector(".tagline-2");
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
var form = document.querySelector(".form");
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
saveCoverButton.addEventListener("click", pushSavedCover);
makeBookButton.addEventListener("click", createUsrCover);
viewSavedButton.addEventListener("click", toggleSaveView);

// Create your event handlers and other functions here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover() {
  var tgline2 = descriptors[getRandomIndex(descriptors)];
  var tgline3 = descriptors[getRandomIndex(descriptors)];
  var title = titles[getRandomIndex(titles)];
  var coverImgSrc = covers[getRandomIndex(covers)];
  currentCover = new Cover(coverImgSrc, title, tgline2, tgline3);
  displayCover(currentCover);
}

function toggleSaveView() {
  savedView.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  homeButton.classList.remove("hidden");
  randomCoverImage.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  // showSavedCoverArray();
}

function displayCover(cover) {
console.log(cover)
  coverImageElement.setAttribute("src", cover.cover);
  title.innerText = cover.title;
  tgLine2.innerText = cover.tagline1;
  tgLine3.innerText = cover.tagline2;
}

function flipHomeView() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  randomCoverImage.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  savedView.classList.add("hidden");
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

function pushSavedCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}
