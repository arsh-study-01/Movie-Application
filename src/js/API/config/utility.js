// const API_KEY =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2I2NTRjYjZjNGQ4YjA3ZjNhMmRmNjdmZDdhMjliYiIsIm5iZiI6MTcyODczNTI5Mi4wOSwic3ViIjoiNjcwYTY4M2NiMTVkOTdiMWE5M2MwMTU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.CvEBYGlCttCJULoAylPFCyTaI0k2h-qQ6UT--lLX3uo";
// let imageUrl = "https://image.tmdb.org/t/p/w500/";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };
// const url ="https://imdb8.p.rapidapi.com/title/v2/get-top-trending-video-trailers?first=20";
// const url = "./src/JSON/IMDB/toptrendingtrailer.json";
const API_KEY = `6630956242msh033c4ece231b4f9p11e67djsn46f7d3cbea8e`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${API_KEY}`,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
  },
};

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// let Basie_URL = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
async function API({ URL }) {
  var A = await fetch(URL, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err));
  return A;
}
let trendingUrl = "./src/JSON/IMDB/toptrendingtrailer.json";
let topUrl = "./src/JSON/IMDB/topmeterActor.json";
let trendingData = await API({ URL: trendingUrl });
trendingData = trendingData.data.topTrendingTitles.edges;
let topActors = await API({ URL: topUrl });
topActors = topActors.data.topMeterNames.edges;
export { API, API_KEY, trendingData, topActors };
