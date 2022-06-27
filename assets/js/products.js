// PRODUCTS
const products = [
  {
    name: "La casa blanca",
    type: 1,
    img: "./assets/img/img1_product.png",
    price: 569000,
    location: "08394 Sant Vicenç de Montalt (ESP)",
    features: {
      bathrooms: 8,
      rooms: 12,
      surface: 352,
    },
  },
  {
    name: "La girondine",
    type: 1,
    img: "./assets/img/img2_product.png",
    price: 322000,
    location: "33290 Le Plan-Médoc",
    features: {
      bathrooms: 1,
      rooms: 4,
      surface: 122,
    },
  },
  {
    name: "L’auvergnate",
    type: 1,
    img: "./assets/img/img3_product.png",
    price: 297000,
    location: "63000 Clermont-Ferrand",
    features: {
      bathrooms: 2,
      rooms: 5,
      surface: 167,
    },
  },
  {
    name: "Dune du Pilat",
    type: 1,
    img: "./assets/img/img4_product.png",
    price: 869000,
    location: "33260 Teste-de-Buch",
    features: {
      bathrooms: 4,
      rooms: 6,
      surface: 211,
    },
  },
  {
    name: "Maison avec piscine",
    type: 1,
    img: "./assets/img/img5_product.png",
    price: 422000,
    location: "33120 Arcachon",
    features: {
      bathrooms: 2,
      rooms: 4,
      surface: 142,
    },
  },
  {
    name: "Appartement tout confort",
    type: 1,
    img: "./assets/img/img6_product.png",
    price: 880000,
    location: "75016 Paris",
    features: {
      bathrooms: 1,
      rooms: 3,
      surface: 85,
    },
  },
  {
    name: "Local commercial à Troyes",
    type: 2,
    img: "./assets/img/img7_product.jpg",
    price: 214000,
    location: "10000 Troyes",
    features: {
      surface: 53,
    },
  },
  {
    name: "Local commercial à Paris 11ème",
    type: 2,
    img: "./assets/img/img8_product.jpg",
    price: 7990000,
    location: "75011 Paris 11ème",
    features: {
      surface: 722,
    },
  },
  {
    name: "Terrain à bâtir à Allauch",
    type: 3,
    img: "./assets/img/img9_product.jpg",
    price: 295000,
    location: "13190 Allauch",
    features: {
      surface: 405,
    },
  },
  {
    name: "Terrain à bâtir à Troyes",
    type: 3,
    img: "./assets/img/img10_product.jpg",
    price: 80000,
    location: "10000 Troyes",
    features: {
      surface: 934,
    },
  },
];

const productsContainer = document.querySelector(".products__list");

const createProductCard = (element, index) => {
  const card = document.createElement("div");
  card.classList.add("product__card");

  const favBtn = document.createElement("i");
  favBtn.classList.add("fa-regular", "fa-heart");
  card.appendChild(favBtn);

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("product__image");
  const cardImg = document.createElement("img");
  cardImg.src = element.img;
  cardImgContainer.appendChild(cardImg);
  card.appendChild(cardImgContainer);

  const cardContent = document.createElement("div");
  cardContent.classList.add("product__content");
  const cardInfo = document.createElement("div");

  cardInfo.classList.add("product__info");
  const cardInfoP1 = document.createElement("p");
  const cardInfoText1 = document.createTextNode(element.name);
  cardInfoP1.appendChild(cardInfoText1);
  const cardInfoP2 = document.createElement("p");
  const productPrice = element.price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
  const cardInfoText2 = document.createTextNode(`${productPrice} €`);
  cardInfoP2.appendChild(cardInfoText2);
  cardInfo.appendChild(cardInfoP1);
  cardInfo.appendChild(cardInfoP2);
  cardContent.appendChild(cardInfo);

  const cardLocation = document.createElement("div");
  cardLocation.classList.add("product__location");
  const cardLocationIcon = document.createElement("i");
  cardLocationIcon.classList.add("fa-solid", "fa-location-dot");
  const cardLocationP = document.createElement("p");
  const cardLocationText = document.createTextNode(element.location);
  cardLocationP.appendChild(cardLocationText);
  cardLocation.appendChild(cardLocationIcon);
  cardLocation.appendChild(cardLocationP);
  cardContent.appendChild(cardLocation);

  const cardFeatures = document.createElement("div");
  cardFeatures.classList.add("product__features");

  if (element.type === 1) {
    const cardBathrooms = document.createElement("div");
    cardBathrooms.classList.add("product__feature");
    const cardBathroomsIcon = document.createElement("i");
    cardBathroomsIcon.classList.add("fa-solid", "fa-bath");
    cardBathrooms.appendChild(cardBathroomsIcon);
    const cardBathroomsP = document.createElement("p");
    const cardBathroomsText = document.createTextNode(
      `${element.features.bathrooms} SdB`
    );
    cardBathroomsP.appendChild(cardBathroomsText);
    cardBathrooms.appendChild(cardBathroomsP);
    cardFeatures.appendChild(cardBathrooms);

    const cardRooms = document.createElement("div");
    cardRooms.classList.add("product__feature");
    const cardRoomsIcon = document.createElement("i");
    cardRoomsIcon.classList.add("fa-solid", "fa-bed");
    cardRooms.appendChild(cardRoomsIcon);
    const cardRoomsP = document.createElement("p");
    const cardRoomsText = document.createTextNode(
      `${element.features.rooms} Chambres`
    );
    cardRoomsP.appendChild(cardRoomsText);
    cardRooms.appendChild(cardRoomsP);
    cardFeatures.appendChild(cardRooms);
  }

  if (element.type !== 1) {
    card.classList.add("product__card--hidden");
  }

  const cardSurface = document.createElement("div");
  cardSurface.classList.add("product__feature");
  const cardSurfaceIcon = document.createElement("i");
  cardSurfaceIcon.classList.add("fa-regular", "fa-square");
  cardSurface.appendChild(cardSurfaceIcon);
  const cardSurfaceP = document.createElement("p");
  const cardSurfaceText = document.createTextNode(
    `${element.features.surface} m²`
  );
  cardSurfaceP.appendChild(cardSurfaceText);
  cardSurface.appendChild(cardSurfaceP);
  cardFeatures.appendChild(cardSurface);

  cardContent.appendChild(cardFeatures);

  // card.dataset.type = element.type;
  // card.dataset.order = index + 1;
  card.appendChild(cardContent);
  card.classList.add(`type${element.type}`)

  const cardUrl = document.createElement("a");
  cardUrl.href = "./product.html";
  card.appendChild(cardUrl);

  productsContainer.appendChild(card);
};

products.forEach((product, index) => {
  createProductCard(product, index);
});

// const allProducts = document.querySelectorAll(".product__card");

const productTypes = document.querySelectorAll("#products li");

productTypes.forEach((productType, index) => {
  productType.addEventListener("click", () => {
    // const clickedTypeIndex = index + 1;

    // allProducts.forEach((product) => {
    //   if (Number(product.dataset.type) === clickedTypeIndex) {
    //     product.classList.remove("product__card--hidden");


    //     //test
    //     // product.style.display = "block";

    //     // var tl = anime.timeline({
    //     //   easing: "easeOutExpo",
    //     // });

    //     // tl.add({
    //     //   targets: product,
    //     //   scale: 1,
    //     //   duration: 500,
    //     // }).add({
    //     //   targets: product.querySelector(".product__content"),
    //     //   opacity: 1,
    //     //   bottom: 0,
    //     //   duration: 250,
    //     // });
    //   } else {
    //     // //test
    //     // var tl = anime.timeline({
    //     //   easing: "easeOutExpo",
    //     // });

    //     // tl.add({
    //     //   targets: product.querySelector(".product__content"),
    //     //   opacity: 0,
    //     //   bottom: "-100%",
    //     //   duration: 250,
    //     // })
    //     //   .add({
    //     //     targets: product,
    //     //     scale: 0,
    //     //     duration: 500,
    //     //   })
    //     //   .add({
    //     //     targets: product,
    //     //     width: 0,
    //     //     complete: function () {
    //     //       product.style.display = "none";
    //     //     },
    //     //   });
    //     product.classList.add("product__card--hidden");
    //   }
    // });

    productTypes.forEach((productType) =>
      productType.classList.remove("active")
    );

    productType.classList.add("active");
  });
});



mixitup('.products__list', {
  animation: {
    effects: 'fade stagger(150ms)',
    duration: 700
  },
  classNames: {
    block: 'programs',
    elementFilter: 'toggle-btn',
  },
  selectors: {
    target: '.product__card'
  },
  load: {
    filter: '.type1'
  }
});