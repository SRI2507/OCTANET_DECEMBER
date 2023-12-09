var toggle_btn;
var wrap;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  wrap = document.querySelector(".wrap");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = wrap.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    wrap.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}
function togglenavbar(){
  wrap.classList.toggle("active");
  document.querySelector(".link").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", togglenavbar);
}

events();