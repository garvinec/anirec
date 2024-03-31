const axios = require("axios");
// client side caching
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const topAnimeData = async (genre, successCallback, failureCallback) => {
  let animeList = [];
  value = myCache.get("animeData");
  // data has not been cached yet
  if (value == undefined) {
    var page = 1;
    // requests limit from Jikan API (can't fetch more than 3 pages at once)
    while (animeList.length <= 74) {
      let pagination = null;
      let data = null;
      let hasError = false;
      let error = null;
      var requestURL = `https://api.jikan.moe/v4/top/anime?page=${page.toString()}`;

      await axios
        .get(requestURL)
        .then((res) => {
          pagination = res.data.pagination;
          data = res.data.data;
          animeList = animeList.concat(sortDataByGenre(genre, data));
          console.log("GET -", requestURL);
        })
        .catch((err) => {
          hasError = true;
          error = err;
          console.log("GET FAIL -", requestURL);
          console.log(
            `Error ${error.response.status}: ` + error.response.statusText
          );
        });

      if (hasError) {
        failureCallback(
          `Error ${error.response.status}: ` + error.response.statusText
        );
        break;
      }

      // Check if there's more data. Otherwise, out of data to fetch, leave loop
      if (pagination.has_next_page) {
        page++;
      } else {
        break;
      }
    }

    success = myCache.set("animeData", animeList, 10000);
    if (success) {
      console.log("Data has successfully been cached!");
    } else {
      console.log("Data has NOT been cached!");
    }
    successCallback(animeList);
  } else {
    animeList = animeList.concat(sortDataByGenre(genre, value));
    successCallback(animeList);
  }
};

const sortDataByGenre = (genre, data) => {
  const filteredList = [];
  for (let i = 0; (len = data.length), i < len; i++) {
    if (genre) {
      var genres = data[i].genres;
      var animeGenres = [];
      for (let j = 0; (len = genres.length), j < len; j++) {
        animeGenres.push(genres[j].name);
      }
      if (animeGenres.includes(genre)) {
        filteredList.push({
          title: data[i].title,
          score: data[i].score,
          genres: data[i].genres,
        });
      }
    } else {
      filteredList.push({
        title: data[i].title,
        score: data[i].score,
        genres: data[i].genres,
      });
    }
  }
  return filteredList;
};

module.exports = { topAnimeData, sortDataByGenre };
