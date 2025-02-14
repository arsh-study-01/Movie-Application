function hide_Show(cls) {
  let elm = document.querySelector(`.${cls}`);
  elm.classList.toggle("hide");
  if (Array(elm.classList).indexOf("hide") != -1) {
    console.log("arshnoor");
  }
}
// document.querySelector(".hiden-header").addEventListener("click", (elm) => {
//   addEventListener("click", (e) => {
//     if (e.target.offsetParent == elm.currentTarget) {
//       if (elm.target.offsetParent) {
//         elm.target.offsetParent.classList.toggle("hide");
//        }
//     }
//   });
// });
// ==============================================================================

let Header_options = document.querySelectorAll(".option-box > ul >li");
Header_options.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    Header_options.forEach((element) => {
      element.classList.remove("activeOP");
    });
    elm.classList.toggle("activeOP");
    document.querySelector(".option-box").classList.add("hide");
  });
});
// ================================================================================
let mobile_Header_btn = document.querySelector("header .search-input button");
mobile_Header_btn.onclick = () => {
  let searchBox = document.querySelector(".search-input");
  searchBox.classList.toggle("mobile-header-search-box");
};

// ================================================================================
let mobile_menu_options = document.querySelector(".links");
mobile_menu_options.addEventListener("click", (e) => {
  if (e.target.nodeName == "H1") {
    e.target.parentElement.classList.toggle("mobile-hiden-header-options");
  }
});
// ================================================================================
let val = 0;
let Image = (x) => {
  document.querySelector(".outer-container").style.left = `-${val}%`;
  if (val == x * 100) {
    val = 0;
  } else {
    val += 100;
  }
  console.log(val);
  setTimeout(Image, 1000);
};
function hearo_image_gallry() {
  let x = document.querySelectorAll(".main-tariler-img").length;
  let Image = () => {
    document.querySelector(".outer-container").style.left = `-${val}vw`;
    if (val == (x - 1) * 54.5) {
      val = 0;
    } else {
      val += 54.5;
    }
    console.log(val);
    setTimeout(Image, (x / 2) * 1000);
  };
  Image();
}
// hearo_image_gallry();
