// ---------- REVIEWS ----------

const reviewsNavBtns = document.querySelectorAll(".reviews__nav i");
const reviewPrev = reviewsNavBtns[0];
const reviewNext = reviewsNavBtns[1];
const reviewSlider = document.querySelector(".review__image");
const reviewImages = document.querySelectorAll(".review__image img");
let currentReviewIndex = 0;

const reviews = [
  {
    title: "Le compromis parfait",
    detail:
      "Maxime a su répondre à nos attentes, trouver le produit qui nous convenait, et a parfaitement répondu à notre budget, c’est L’AGENT immobilier du moment !",
    name: "Adam Dupont",
    rating: 5,
    buy: "Acquéreur d’une maison de 110m² à Tarbes",
  },
  {
    title: "Presque parfait",
    detail:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magnam a corrupti sit porro dolore. Dolores dicta quod est provident tempora?",
    name: "Corinne Querry",
    rating: 4,
    buy: "Acquéreuse d’une maison de 243m² à Bordeaux",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis asperiores sunt saepe commodi, id, assumenda at voluptatibus odio, ullam laborum itaque! Eveniet?",
    name: "Clarice Paquet",
    rating: 4,
    buy: "Acquéreuse d’une maison de 137m² à Pau",
  },
];

const reviewTitle = document.querySelector(".review__title");
const reviewText = document.querySelector(".review__text p");
const reviewAuthor = document.querySelector(".review__bottom span");
const reviewRating = document.querySelector(".review__rating");
const reviewSummary = document.querySelector(".review__summary");

const updateReview = () => {
  reviewTitle.textContent = reviews[currentReviewIndex].title;
  reviewText.textContent = reviews[currentReviewIndex].detail;
  reviewAuthor.textContent = reviews[currentReviewIndex].name;

  // Clear div
  while (reviewRating.firstChild) {
    reviewRating.removeChild(reviewRating.firstChild);
  }

  // Create stars
  for (let i = 0; i < reviews[currentReviewIndex].rating; i++) {
    let star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star");
    reviewRating.appendChild(star);
  }

  reviewSummary.textContent = reviews[currentReviewIndex].buy;
};

updateReview();

const highlightNextReview = () => {
  if (currentReviewIndex < reviewImages.length - 1) {
    currentReviewIndex++;
  }

  reviewImages[currentReviewIndex].classList.remove("review__image--inactive");
  reviewImages[currentReviewIndex - 1].classList.add("review__image--inactive");

  updateReview();
};

const highlightPrevReview = () => {
  if (currentReviewIndex > 0) {
    currentReviewIndex--;
  }

  reviewImages[currentReviewIndex + 1].classList.add("review__image--inactive");
  reviewImages[currentReviewIndex].classList.remove("review__image--inactive");

  updateReview();
};

reviewNext.onclick = () => {
  highlightNextReview();

  reviewSlider.style.transform = `translateX(${100 * currentReviewIndex}%)`;

  if (currentReviewIndex !== 0) {
    reviewPrev.classList.add("enabled");
  }
  if (currentReviewIndex === reviewImages.length - 1) {
    reviewNext.classList.remove("enabled");
  }
};

reviewPrev.onclick = () => {
  highlightPrevReview();

  reviewSlider.style.transform = `translateX(${100 * currentReviewIndex}%)`;

  if (currentReviewIndex === 0) {
    reviewPrev.classList.remove("enabled");
  }
  if (currentReviewIndex !== reviewImages.length - 1) {
    reviewNext.classList.add("enabled");
  }
};
