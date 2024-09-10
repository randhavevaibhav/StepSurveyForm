const slidePage = document.querySelector(".slidepage");

const page1Btns = document.getElementById("page1-btns");
const page2Btns = document.getElementById("page2-btns");
const page3Btns = document.getElementById("page3-btns");
const page4Btns = document.getElementById("page4-btns");

const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");

const progressCheck = document.querySelectorAll(".step .check");

const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

const toggleActiveClass = (currentVal, btnVal) => {
  if (btnVal === "next" || btnVal === "submit") {
    bullet[currentVal - 1].classList.add("active");
    progressText[currentVal - 1].classList.add("active");
    progressCheck[currentVal - 1].classList.add("active");
  } else if (btnVal === "prev") {
    bullet[currentVal - 2].classList.remove("active");
    progressText[currentVal - 2].classList.remove("active");
    progressCheck[currentVal - 2].classList.remove("active");
  }
};

page1Btns.addEventListener("click", (e) => {
  console.log("target dataset page1", e.target.dataset.btn);
  const navButton = e.target.dataset.btn;
  if (navButton === "next") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "-25%";

    current += 1;
  }
});

page2Btns.addEventListener("click", (e) => {
  console.log("target dataset page2", e.target.dataset.btn);
  const navButton = e.target.dataset.btn;
  if (navButton === "next") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "-50%";
    current += 1;
  } else if (navButton === "prev") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "0";
    current -= 1;
  }
});

page3Btns.addEventListener("click", (e) => {
  console.log("target dataset page3", e.target.dataset.btn);
  const navButton = e.target.dataset.btn;
  if (navButton === "next") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "-75%";
    current += 1;
  } else if (navButton === "prev") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "-25%";
    current -= 1;
  }
});

page4Btns.addEventListener("click", (e) => {
  console.log("target dataset page3", e.target.dataset.btn);
  const navButton = e.target.dataset.btn;
  if (navButton === "prev") {
    toggleActiveClass(current, navButton);
    slidePage.style.marginLeft = "-50%";
    current -= 1;
  } else if (navButton === "submit") {
    toggleActiveClass(current, navButton);
    current += 1;

    setTimeout(() => {
      location.reload();
    }, 800);
  }
});

console.log("val of current ==> ", current);
