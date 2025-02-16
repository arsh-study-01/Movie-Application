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
var style = window.getComputedStyle(document.body);
style = parseInt(style.getPropertyValue("--hero-image-left"));
// style = 54.5;
function hearo_image_gallry() {
  let trailer_val = 0;
  let preview_val = 0;
  let x = document.querySelectorAll(".main-tariler-img").length;
  let previwe_length = document.querySelectorAll(".previwe-container").length;
  let trailer_box = document.querySelector(".outer-container");
  let tariler_previwe = document.querySelector("div.next-previwe div.box ");
  tariler_previwe.style.gridTemplateRows = `repeat(${previwe_length},33%)`;

  document.querySelector(".left").addEventListener("click", () => {
    if (trailer_val != 0) trailer_val -= style * 2;
    if (preview_val != 0) preview_val -= 32 * 2;
  });
  document.querySelector(".right").addEventListener("click", () => {
    if (trailer_val != x * style) trailer_val += style;
    if (preview_val != 0) preview_val += 32;
  });
  let Image = () => {
    trailer_box.style.left = `-${trailer_val}%`;
    tariler_previwe.style.top = `-${preview_val}%`;
    trailer_val += style;
    preview_val += 32;
    if (trailer_val == x * style) trailer_val = 0;
    if (preview_val == (previwe_length - 2) * 32) preview_val = 0;
    let time = setTimeout(Image, (x / 4) * 1000);
  };
  Image();
}
// hearo_image_gallry();
