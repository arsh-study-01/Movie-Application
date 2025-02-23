/*
--------------Trending Data Url-----------------------
const url ="https://imdb8.p.rapidapi.com/title/v2/get-top-trending-video-trailers?first=20";
--------------Top Actor Data Url-----------------------
const url ="https://imdb8.p.rapidapi.com/title/v2/get-top-trending-video-trailers?first=20";
--------------Top Meter Title Data Url-----------------------
const url ='https://imdb8.p.rapidapi.com/title/v2/get-top-meter?topMeterTitlesType=ALL&first=20&country=US&language=en-US';
--------------Popular Movies Data Url-----------------------
const url ='https://imdb236.p.rapidapi.com/imdb/most-popular-movies';

*/
// const url = "./src/JSON/IMDB/toptrendingtrailer.json";
const API_KEY = `6630956242msh033c4ece231b4f9p11e67djsn46f7d3cbea8e`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${API_KEY}`,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};
async function API({ URL }) {
  var A = await fetch(URL, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));
  return A;
}
// ===================URL Variable============================
let trendingUrl = "./src/JSON/IMDB/toptrendingtrailer.json";
let topUrl = "./src/JSON/IMDB/topmeterActor.json";
let popularMovieUrl = "./src/JSON/IMDB/mostPopularMovie.json";
// ===================Fetch Call ==============================
let trendingData = await API({ URL: trendingUrl });
let topActors = await API({ URL: topUrl });
let popularMovie = await API({ URL: popularMovieUrl });
// ===================Filtering Fetch Data=====================
trendingData = trendingData.data.topTrendingTitles.edges;
trendingData = trendingData.filter((e) => e.node.item.latestTrailer);
topActors = topActors.data.topMeterNames.edges;
let popular20Movies = popularMovie.slice(0, 20);
// Top Ration Data Filtering in trending Data
let TopRating = trendingData
  .filter(
    (e) =>
      e.node.item.latestTrailer &&
      e.node.item.latestTrailer.primaryTitle.ratingsSummary.aggregateRating
  )
  .map((e) => [
    e.node.item.latestTrailer.primaryTitle.ratingsSummary.aggregateRating,
    e.node.item.latestTrailer.primaryTitle,
  ]);
TopRating = TopRating.sort()
  .reverse()
  .map((e) => e[1]);
// ===================Export=====================
export {
  API,
  API_KEY,
  trendingData,
  topActors,
  TopRating,
  popularMovie,
  popular20Movies,
};
