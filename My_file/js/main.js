//
let headerImg = document.querySelector(".header img");
let plusImg = document.querySelectorAll(".box .box-title img");
let boxContent = document.querySelectorAll(".box .content");

window.onresize = function () {
  if (window.innerWidth <= 767) {
    headerImg.src = "assets/images/background-pattern-mobile.svg";
  } else {
    headerImg.src = "assets/images/background-pattern-desktop.svg";
  }
};

window.onload = function () {
  if (window.innerWidth <= 767) {
    headerImg.src = "assets/images/background-pattern-mobile.svg";
  } else {
    headerImg.src = "assets/images/background-pattern-desktop.svg";
  }
};

plusImg.forEach((img, index) => {
  img.onclick = function () {
    if (boxContent[index].classList.contains("show")) {
      boxContent[index].classList.remove("show");
      img.src = "assets/images/icon-plus.svg";
    } else {
      boxContent.forEach((content, i) => {
        content.classList.remove("show");
        plusImg[i].src = "assets/images/icon-plus.svg";
      });
      boxContent[index].classList.add("show");
      this.src = "assets/images/icon-minus.svg";
    }
  };
});
