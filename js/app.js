window.onload = function () {
  const videoPlay = document.querySelectorAll(".play");
  const videoClose = document.querySelectorAll(".close");

  for (const play of videoPlay) {
    play.addEventListener("click", (e) => {
      e.target.parentNode.classList.add("on");
    });
  }

  for (const close of videoClose) {
    close.addEventListener("click", (e) => {
      e.target.parentNode.classList.remove("on");
    });
  }

  const gnb = document.querySelector(".gnb");
  const gnbWrap = document.querySelector(".gnb_wrap");

  const gnbLength = document.getElementsByClassName("sub_gnb").length;
  const liH = document.querySelector(".sub_gnb li").offsetHeight;

  let listNum = [];
  let gnbList = document.querySelectorAll(".sub_gnb");
  for (i = 0; i < gnbLength; i++) {
    let listCount = gnbList[i].childElementCount;
    listNum.push(listCount);
  }

  const listMax = Math.max(...listNum);

  const mouseOver = gnbWrap.addEventListener("mouseover", () => {
    gnb.classList.add("on");
    document.querySelector(".sub_gnb").style.height = listMax * liH + 30 + "px";
  });
  const mouseOut = gnb.addEventListener("mouseout", () => {
    gnb.classList.remove("on");
    document.querySelector(".sub_gnb").style.height = "0px";
  });

  const eventTop = document.querySelector(".event").offsetTop - 600;
  window.addEventListener("scroll", () => {
    let winY = window.scrollY;
    if (winY > eventTop) {
      document.querySelector(".left_back").style.width = "0%";
      document.querySelector(".right_back").style.width = "0%";
    } else if (winY < eventTop - 600) {
      document.querySelector(".left_back").style.width = "50%";
      document.querySelector(".right_back").style.width = "50%";
    }
  });

  var mainCon = new Swiper(".mainCon ", {
    loop: true,
  });
  var subCon = new Swiper(".subCon", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  mainCon.controller.control = subCon;
  subCon.controller.control = mainCon;
};
