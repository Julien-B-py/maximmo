// ---------- REVIEWS ----------
const reviewSlider = document.querySelector(".review__image");
let reviewsNavBtns;
let reviewPrev;
let reviewNext;
let reviewImages;
let currentReviewIndex = 0;

let reviews = [];

const reviewsUrl = "https://secret-beach-10370.herokuapp.com/reviews.php";

fetch(reviewsUrl)
  .then((response) => response.json())
  .then((data) => {

    // Shuffle the array and store inside reviews
    reviews = data.sort(() => Math.random() - 0.5);

    loadingAnim.style.display = "none";

    createSlider();
    updateReview();

  })
  .catch(err => console.error('error:' + err));

const reviewTitle = document.querySelector(".review__title");
const reviewText = document.querySelector(".review__text p");
const reviewAuthor = document.querySelector(".review__bottom span");
const reviewRating = document.querySelector(".review__rating");
const reviewSummary = document.querySelector(".review__summary");

const createSliderNav = () => {
  let reviewsNav = document.createElement("div");
  reviewsNav.classList.add("reviews__nav");
  let arrowLeft = document.createElement("i");
  arrowLeft.classList.add("fa-solid", "fa-arrow-left-long");
  let arrowRight = document.createElement("i");
  arrowRight.classList.add("fa-solid", "fa-arrow-right-long", "enabled");
  reviewsNav.appendChild(arrowLeft);
  reviewsNav.appendChild(arrowRight);
  document.querySelector("#reviews").appendChild(reviewsNav);

  reviewsNavBtns = document.querySelectorAll(".reviews__nav i");

  [reviewPrev, reviewNext] = reviewsNavBtns;
  reviewNext.onclick = () => slideNext();
  reviewPrev.onclick = () => slidePrev();

}

const createSlider = () => {

  createSliderNav();

  reviews.forEach((review, index) => {
    let reviewImg = document.createElement("img");
    reviewImg.src = `./assets/img/${review.img}`;
    if (index > 0) {
      reviewImg.classList.add("review__image--inactive");
    }
    reviewSlider.appendChild(reviewImg);
  });

}

const updateReview = () => {
  reviewTitle.textContent = reviews[currentReviewIndex].title;
  reviewText.textContent = reviews[currentReviewIndex].text;
  reviewAuthor.textContent = reviews[currentReviewIndex].name;

  // Clear div
  while (reviewRating.firstChild) {
    reviewRating.removeChild(reviewRating.firstChild);
  }

  let integerRatingPart = Math.trunc(reviews[currentReviewIndex].rating);
  let decimalRatingPart = Math.round((reviews[currentReviewIndex].rating - integerRatingPart) * 100) / 100;

  // Create full stars
  for (let i = 0; i < integerRatingPart; i++) {
    let star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star");
    reviewRating.appendChild(star);
  }

  // Create the decimal star if needed
  if (decimalRatingPart % 1 !== 0) {
    let decimalStar = document.createElement("div");
    decimalStar.classList.add("star");
    let greyStar = document.createElement("i");
    greyStar.classList.add("fa-regular", "fa-star");
    decimalStar.appendChild(greyStar);
    let solidStar = document.createElement("i");
    solidStar.classList.add("fa-solid", "fa-star");
    solidStar.style.clipPath = `polygon(0 0, ${decimalRatingPart * 100}% 0, ${decimalRatingPart * 100}% 100%, 0% 100%)`;
    decimalStar.appendChild(solidStar);
    reviewRating.appendChild(decimalStar);
  }

  let starsCount = reviewRating.childElementCount;

  // Complete the rating with empty stars to fit the 5 stars format
  for (let i = 0; i < 5 - starsCount; i++) {
    let star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    reviewRating.appendChild(star);
  }

  reviewSummary.textContent = reviews[currentReviewIndex].detail;
};



const highlightNextReview = () => {
  reviewImages = document.querySelectorAll(".review__image img");
  if (currentReviewIndex < reviewImages.length - 1) {
    currentReviewIndex++;
  }

  reviewImages[currentReviewIndex].classList.remove("review__image--inactive");
  reviewImages[currentReviewIndex - 1].classList.add("review__image--inactive");

  updateReview();
};

const highlightPrevReview = () => {
  reviewImages = document.querySelectorAll(".review__image img");
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
  }

  reviewImages[currentReviewIndex + 1].classList.add("review__image--inactive");
  reviewImages[currentReviewIndex].classList.remove("review__image--inactive");

  updateReview();
};

const slideNext = () => {
  highlightNextReview();

  reviewSlider.style.transform = `translateX(${100 * currentReviewIndex}%)`;

  if (currentReviewIndex !== 0) {
    reviewPrev.classList.add("enabled");
  }
  if (currentReviewIndex === reviewImages.length - 1) {
    reviewNext.classList.remove("enabled");
  }
}

const slidePrev = () => {
  highlightPrevReview();

  reviewSlider.style.transform = `translateX(${100 * currentReviewIndex}%)`;

  if (currentReviewIndex === 0) {
    reviewPrev.classList.remove("enabled");
  }
  if (currentReviewIndex !== reviewImages.length - 1) {
    reviewNext.classList.add("enabled");
  }
}