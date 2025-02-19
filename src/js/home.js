import { API } from "./API/config/utility.js";

// ======================================================================================
let x = window.getComputedStyle(document.body);
x = parseFloat(x.getPropertyValue("--hero-image-left"));
async function Trending() {
  let Url = "./src/JSON/IMDB/toptrendingtrailer.json";
  try {
    let Length_of_Elm = 0;
    let data = await API({ URL: Url });
    let result = data.data.topTrendingTitles.edges;
    result.forEach((element) => {
      let data = element.node.item.latestTrailer;
      if (data) {
        let tarilerTemplet = `<div class="main-tariler-img">
              <img
                src="${data.thumbnail.url}"
                alt="backdropImageof${
                  data.primaryTitle.originalTitleText.text
                    ? data.primaryTitle.originalTitleText.text
                    : element.name
                }"
                class="main-thamnel"
              />
              <div class="info">
                <div class="thamneal">
                  <div class="save-icon">
                    <svg
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path
                        d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"
                      />
                    </svg>
                  </div>
                  <img src="${
                    data.primaryTitle.primaryImage.url
                  }" alt="posterImage${
          data.primaryTitle.originalTitleText.text
            ? data.primaryTitle.originalTitleText.text
            : element.name
        }" />
                </div>
                <div class="right-box">
                  <div class="video-play-icon">
                    <svg
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path
                        d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>
                  </div>
                  <div class="title-container">
                    <h2 class="main-title">
                      ${
                        data.primaryTitle.originalTitleText.text
                          ? data.primaryTitle.originalTitleText.text
                          : element.name
                      }
                    </h2>
                    <h3 class="sub-title">
                      ${data.description.value}
                    </h3>
                    <div class="tariler-duration-box"><span>${
                      data.runtime.value
                    }</span></div>
                    <div class="feedback-box">
                      <div class="like">
                        <svg
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                        >
                          <path
                            d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"
                          />
                        </svg>
                        <span>25</span>
                      </div>
                      <div class="react-emo">😍<span>5</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
        let previewTemplet = `
              <div class="previwe-container">
                <div class="thamnel">
                  <img src="${
                    data.primaryTitle.primaryImage.url
                  }" alt="posterof${
          data.primaryTitle.originalTitleText.text
            ? data.primaryTitle.originalTitleText.text
            : element.name
        }" />
                </div>
                <div class="previwe-info">
                  <div class="top">
                    <svg
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path
                        d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>
                    <span class="previwe-dureation">2:29</span>
                  </div>
                  <div class="middel"><h1>${
                    data.primaryTitle.originalTitleText.text
                      ? data.primaryTitle.originalTitleText.text
                      : element.name
                  }</h1></div>
                  <div class="bottom">
                    <div class="like">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path
                          d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z"
                        />
                      </svg>
                      <span>25</span>
                    </div>
                    <div class="react-emo">😍<span>5</span></div>
                  </div>
                </div>
              </div>`;
        document.querySelector(".outer-container").innerHTML += tarilerTemplet;
        document.querySelector(
          ".upcoming-detail-container > .next-previwe > .box"
        ).innerHTML += previewTemplet;
        Length_of_Elm++;
      }
    });
    console.log(Length_of_Elm);

    trendingAnimation(Length_of_Elm);
  } catch (error) {
    console.log(error);
  }
}
function trendingAnimation(trendingLength = 20) {
  let leftValue = 0;
  let topValue = 0;
  function Repeating() {
    //   selecting Container boxs
    let trending_Trilar = document.querySelector(
      "div.trailer-show > .outer-container"
    );
    let previwe_box = document.querySelector("div.next-previwe > .box");
    // add style value
    trending_Trilar.style.left = `-${leftValue}%`;
    previwe_box.style.top = `-${topValue}%`;
    trending_Trilar.style.gridTemplateColumns = `repeat(${trendingLength},${x}%)`;
    previwe_box.style.gridTemplateRows = `repeat(${trendingLength},33%)`;
    //   changing Positon Value
    leftValue = leftValue + 100;
    topValue = topValue + 33;
    //   Fix leftValue variable Value
    leftValue = parseFloat(leftValue.toFixed(1));
    //   Defult Value Conditions
    if (leftValue == (trendingLength - 1) * 100) leftValue = 0;
    if (topValue == (trendingLength - 2) * 33) topValue = 0;
    //   Repeting Call Funtion
    setTimeout(() => {
      Repeating();
    }, 1500);
  }
  Repeating();
}
// export { trendingAnimation };
Trending();
