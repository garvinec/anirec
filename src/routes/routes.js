const express = require("express");
const router = express.Router();
const topAnimeData = require("../utils/animeData");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage Title",
    content: "Some random content",
  });
});

router.get("/anime", (req, res) => {
  const pageNumber = req.query.page ?? "1";
  topAnimeData(pageNumber, (response, error) => {
    if (error) {
      return res.send(error);
    }
    const pagination = response.pagination;
    const data = response.data;

    res.send(response);
  });
});

module.exports = router;
