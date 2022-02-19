const skillHtml = document.querySelector(".gauge-html");
const skillCss = document.querySelector(".gauge-css");
const skillJs = document.querySelector(".gauge-js");
const skillsList = document.querySelector(".skills_list");
const fixedNavbar = document.querySelector(".fixed-navbar");
const header = document.getElementsByTagName("header");
const progressBar = document.querySelectorAll(".progress-bar_background");
const editor = document.querySelector(".editor");
const editorContent = "by Sébastien Kuhler";
const chevronLeft = document.querySelector(".chevron_left");
const chevronRight = document.querySelector(".chevron_right");

// ----------------------------------------
// animation machine à écrire
// ---------------------------------------
const writer = (word, i) => {
  if (i < word.length) {
    setTimeout(() => {
      editor.textContent += word[i];
      writer(editorContent, i + 1);
    }, 100);
  }
};
setTimeout(() => {
  writer(editorContent, 0);
}, 3500);
// fin animation machine à écrire

for (let i = 0; i < progressBar.length; i++) {
  const element = progressBar[i];
  element.style.width = progressBar[i].dataset.value;
  element.classList.add(`bar-${i}`);
}
// ----------------------------------------
// configuration intersection observer
// ----------------------------------------
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // contrôle des animations jauges
      if (entry.target.classList[1] === "box--html") {
        skillHtml.classList.add("html-active");
      }
      if (entry.target.classList[1] === "box--css") {
        skillCss.classList.add("css-active");
      }
      if (entry.target.classList[1] === "box--js") {
        skillJs.classList.add("js-active");
      }
      if (entry.target.classList[0] === "line-skill") {
        const bar = document.querySelector(`.${entry.target.children[1].childNodes[1].classList[1]}`);
        bar.classList.add("bar-active");
      }

      // contrôle de la barre de menu fixe
      //   if (entry.target.classList[0] === "quotes") {
      //     stickyNavbar.classList.add("fixed-navbar--active");
      //   }else{
      //     stickyNavbar.classList.remove("fixed-navbar--active");
      //   }
    }
  });
};

const spies = document.querySelectorAll("[data-spy]");

// options de l'observateur d'intersection
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

spies.forEach((spy) => {
  observer.observe(spy);
});
// fin configuration intersection observer

// ----------------------------------------
// declenchement barre de menu fixe
// ----------------------------------------
window.addEventListener("scroll", () => {
  if (window.scrollY > header[0].scrollHeight) {
    fixedNavbar.classList.add("fixed-navbar--active");
  } else {
    fixedNavbar.classList.remove("fixed-navbar--active");
  }
});
// fin declenchement barre de menu fixe

// ----------------------------------------
// carrousel achievements
// ---------------------------------------
const returnCard = document.querySelectorAll(".fa-arrow-rotate-left");

returnCard.forEach((element) => {
  let target = document.querySelector(`.card--${element.classList[2]}`);
  element.addEventListener("click", () => {
    if (!target.classList[2]) {
      target.classList.add("card--active");
    } else {
      target.classList.remove("card--active");
    }
  });
});
// fin carrousel achievements fenêtres
