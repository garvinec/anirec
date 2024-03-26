const express = require("express");
const router = express.Router();
const topAnimeData = require("../utils/animeData");

router.get("/", (req, res) => {
  return res.render("pages/home", {
    title: "Homepage Title",
    content: "Some random content",
  });
});

router.get("/action", (req, res) => {
  return res.render("pages/action", {
    title: "Action Page Title",
    content: "Some random content",
  });
});

router.get("/adventure", (req, res) => {
  return res.render("pages/adventure", {
    title: "Adventure Page Title",
    content: "Some random content",
  });
});

router.get("/comedy", (req, res) => {
  return res.render("pages/comedy", {
    title: "Comedy Page Title",
    content: "Some random content",
  });
});

router.get("/romance", (req, res) => {
  // res.render("pages/romance", {
  //   title: "Romance Page Title",
  //   content: "Some random content",
  // });
  topAnimeData(
    "Romance",
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/sci-fi", (req, res) => {
  // res.render("pages/scifi", {
  //   title: "Sci-fi Page Title",
  //   content: "Some random content",
  // });
  topAnimeData(
    "Sci-Fi",
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/anime", (req, res) => {
  topAnimeData(
    "",
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});

module.exports = router;
