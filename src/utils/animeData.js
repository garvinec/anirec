const axios = require("axios");
const { response } = require("express");

const topAnimeData = (page, successCallback, failureCallback) => {
  const requestURL = `https://api.jikan.moe/v4/top/anime?page=${page}`;
  console.log("GET -", requestURL);

  axios
    .get(requestURL)
    .then((res) => {
      const data = res.data;
      successCallback(data);
      return;
    })
    .catch((err) => failureCallback(err.data));
};

module.exports = topAnimeData;
