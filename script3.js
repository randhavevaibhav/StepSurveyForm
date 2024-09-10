const slidePage = document.querySelector(".slidepage");

const firstNextBtn = document.querySelector(".nextBtn");

const nextCommBtn = document.getElementsByClassName("next");
const prevCommBtn = document.getElementsByClassName("prev");

const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");

const progressCheck = document.querySelectorAll(".step .check");

const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

// let prevSlidePageMarginLeft = 25;
console.log("val of current ==> ", current);
[...nextCommBtn].map((val) => {
  //   console.log("value of next btn ==> ", val);
  val.addEventListener("click", (e) => {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    let nextSlidePageMarginLeft = -25 * current; //-25,-50,-75
    current += 1;

    // console.log("nextSlidePageMarginLeft ==> ", nextSlidePageMarginLeft);
    let SlidePageMarginLeftString = nextSlidePageMarginLeft + "%";
    slidePage.style.marginLeft = SlidePageMarginLeftString;
    // console.log("val of current ==> ", current);
    e.stopPropagation();
  });
});

[...prevCommBtn].map((val) => {
  //   console.log("value of next btn ==> ", val);
  val.addEventListener("click", (e) => {
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");

    let prevSlidePageMarginLeft = 50 - 25 * current; //0,-25,-50
    current -= 1;
    // console.log("current in prev btn ==> ", current);
    // console.log("prevSlidePageMarginLeft ==> ", prevSlidePageMarginLeft);
    let prevSlidePageMarginLeftString = prevSlidePageMarginLeft + "%";
    slidePage.style.marginLeft = prevSlidePageMarginLeftString;
    e.stopPropagation();
  });
});

submitBtn.addEventListener("click", () => {
  bullet[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;

  setTimeout(() => {
    location.reload();
  }, 800);
});
