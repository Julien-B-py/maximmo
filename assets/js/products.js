// PRODUCTS
let products = [];

const productsContainer = document.querySelector(".products__list");

const createProductCard = element => {
  const card = document.createElement("div");
  card.classList.add("product__card");

  const favBtn = document.createElement("i");
  favBtn.classList.add("fa-regular", "fa-heart");
  card.appendChild(favBtn);

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("product__image");
  const cardImg = document.createElement("img");
  cardImg.src = element.image;
  cardImgContainer.appendChild(cardImg);
  card.appendChild(cardImgContainer);

  const cardContent = document.createElement("div");
  cardContent.classList.add("product__content");
  const cardInfo = document.createElement("div");

  cardInfo.classList.add("product__info");
  const cardInfoP1 = document.createElement("p");
  const cardInfoText1 = document.createTextNode(element.title);
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
  const cardLocationText = document.createTextNode(`${element.postal_code} - ${element.city}`);
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
      `${element.areas?.bathroom} SdB`
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
      `${element.areas?.room} Chambres`
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
    `${element.areas?.surface} m²`
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



// const allProducts = document.querySelectorAll(".product__card");

const productTypes = document.querySelectorAll("#products li");

productTypes.forEach((productType, index) => {
  productType.addEventListener("click", () => {

    productTypes.forEach((productType) =>
      productType.classList.remove("active")
    );

    productType.classList.add("active");
  });
});








const productsUrl = "http://localhost:8000/products.php";

fetch(productsUrl)
  .then((response) => response.json())
  .then((data) => {

    products = data;

    products.forEach(product => {
      console.log(product)
      createProductCard(product);
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

  })
  .catch(err => console.error('error:' + err));

