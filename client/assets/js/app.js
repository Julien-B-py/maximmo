// ---------- NAVBAR ----------
const openMenuBtn = document.querySelector("svg");

const openMenuBtnPathes = document.querySelectorAll("path");

const navLinks = document.querySelector(".nav__left ul");

var openedMenu = false;
var burgerClicked = false;

const animationDuration = 300;

// Create a timeline with default parameters
var tl = anime.timeline({
  duration: animationDuration,
  autoplay: false,
});

// Add children
tl.add({
  targets: openMenuBtnPathes[0],
  d: [
    {
      value:
        "M355.576,433.295l230.466,0.002c27.345,0,49.494,22.149,49.494,49.494c0.055,13.618-5.523,25.979-14.492,34.947c-8.97,8.969-21.335,14.498-34.997,14.487l-230.47,0.061l-99.073-0.138l-230.519,0.055c-27.345,0-49.495-22.149-49.495-49.494c0-27.346,22.149-49.495,49.495-49.495l230.601,0.081H355.576z",
    },
    {
      value:
        "M235.998,482.674L73.035,319.708c-19.336-19.335-19.336-50.66,0-69.995c9.591-9.668,22.275-14.464,34.959-14.464c12.684,0,25.337,4.834,34.991,14.502l163.009,162.924l69.958,70.152l163.04,162.962c19.336,19.336,19.336,50.66,0,69.996c-19.337,19.336-50.66,19.336-69.996,0L305.994,552.67L235.998,482.674z",
    },
  ],
})
  .add(
    {
      targets: openMenuBtnPathes[1],
      d: [
        {
          value:
            "M256.424,532.19l-230.466-0.001c-27.345,0-49.495-22.149-49.495-49.495c-0.055-13.618,5.524-25.978,14.493-34.946c8.97-8.97,21.335-14.499,34.997-14.488l230.469-0.06l99.073,0.137l230.52-0.055c27.345,0,49.494,22.15,49.494,49.495s-22.149,49.495-49.494,49.495l-230.602-0.082H256.424z",
        },
        {
          value:
            "M376.001,482.826l162.963,162.965c19.336,19.336,19.336,50.659,0,69.996c-9.591,9.668-22.275,14.463-34.959,14.463c-12.685,0-25.338-4.834-34.991-14.502L306.006,552.823l-69.958-70.151L73.007,319.708c-19.336-19.335-19.335-50.66,0-69.996c19.336-19.336,50.66-19.336,69.996-0.001L306.005,412.83L376.001,482.826z",
        },
      ],
    },
    `-=${animationDuration}`
  )
  .add(
    {
      targets: openMenuBtnPathes[2],
      d: [
        {
          value:
            "M256.452,532.189l-230.466-0.002c-27.345,0-49.495-22.149-49.495-49.494c-0.054-13.618,5.524-25.979,14.493-34.947c8.969-8.969,21.334-14.498,34.997-14.488l230.469-0.06l99.073,0.138l230.519-0.056c27.345,0,49.495,22.15,49.495,49.495c0,27.346-22.15,49.495-49.495,49.495l-230.601-0.082L256.452,532.189z",
        },
        {
          value:
            "M305.939,552.764L142.973,715.727c-19.336,19.336-50.66,19.337-69.996,0.001c-9.668-9.592-14.463-22.276-14.463-34.96c0-12.684,4.834-25.337,14.502-34.991L235.94,482.769l70.153-69.958L469.055,249.77c19.335-19.335,50.66-19.335,69.996,0c19.337,19.336,19.336,50.661,0,69.997L375.934,482.768L305.939,552.764z",
        },
      ],
    },
    `-=${animationDuration}`
  );

openMenuBtn.onclick = () => {
  burgerClicked && tl.reverse();
  if (!burgerClicked) burgerClicked = !burgerClicked;
  tl.play();

  openedMenu = !openedMenu;

  if (openedMenu) return navLinks.classList.remove("hidden");
  navLinks.classList.add("hidden");
};

// ---------- SEARCH SECTION ----------
const searchInputs = document.querySelectorAll("#search .input");
searchInputs.forEach(
  (input) => (input.onclick = () => input.lastElementChild.focus())
);
