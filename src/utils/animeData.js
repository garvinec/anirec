const axios = require("axios");

const topAnimeData = async (genre, successCallback, failureCallback) => {
  const animeList = [];
  var page = 1;
  while (animeList.length <= 50) {
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
        for (let i = 0; (len = data.length), i < len; i++) {
          if (genre) {
            var genres = data[i].genres;
            var animeGenres = [];
            for (let j = 0; (len = genres.length), j < len; j++) {
              animeGenres.push(genres[j].name);
            }
            if (animeGenres.includes(genre)) {
              animeList.push(data[i].title);
            }
          } else {
            animeList.push(data[i].title);
          }
        }
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
      if (error.response.status !== 429) {
        // If it's not too many requests error, failureCallback
        failureCallback(
          `Error ${error.response.status}: ` + error.response.statusText
        );
        return;
      }
      break;
    }

    // Check if there's more data. Otherwise, out of data to fetch, leave loop
    if (pagination.has_next_page) {
      page++;
    } else {
      break;
    }
  }

  successCallback(animeList);
};

module.exports = topAnimeData;
