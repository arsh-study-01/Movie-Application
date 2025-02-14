function hide_Show(cls) {
  let elm = document.querySelector(`.${cls}`);
  elm.classList.toggle("hide");
  console.log(Array(elm.classList));
  console.log(Array(elm.classList).indexOf("hide"));

  if (Array(elm.classList).indexOf("hide") != -1) {
    console.log("arshnoor");
  }
}
document.querySelector(".hiden-header").addEventListener("click", (elm) => {
  addEventListener("click", (e) => {
    if (e.target.offsetParent == elm.currentTarget) {
      if (elm.target.offsetParent) {
        elm.target.offsetParent.classList.toggle("hide");
      }
    }
  });
});
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
