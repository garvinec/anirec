const express = require("express");
const ejs = require("ejs");
const router = express.Router();
const { topAnimeData } = require("../utils/animeData");

router.get("/", (req, res) => {
  topAnimeData(
    "",
    (response) => {
      return res.render("pages/home", {
        title: "Most Popular Animes",
        content: response,
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/popular/:page", (req, res) => {
  var pageMax = 10;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Popular Animes",
        header: "Most Popular Animes",
        genre: "",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/action/:page", (req, res) => {
  var pageMax = 5;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "Action",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Action Animes",
        header: "Most Popular Action Animes",
        genre: "action",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/adventure/:page", (req, res) => {
  var pageMax = 5;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "Adventure",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Adventure Animes",
        header: "Most Popular Adventure Animes",
        genre: "adventure",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/comedy/:page", (req, res) => {
  var pageMax = 5;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "Comedy",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Comedy Animes",
        header: "Most Popular Comedy Animes",
        genre: "comedy",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/romance/:page", (req, res) => {
  var pageMax = 5;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "Romance",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Romance Animes",
        header: "Most Popular Romance Animes",
        genre: "romance",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("/sci-fi/:page", (req, res) => {
  var pageMax = 5;
  var currentPage = req.params.page || 1;

  topAnimeData(
    "Sci-Fi",
    (response) => {
      return res.render("pages/page", {
        bannerTitle: "Sci-Fi Animes",
        header: "Most Popular Sci-Fi Animes",
        genre: "sci-fi",
        content: response,
        currentPage: currentPage,
        pageMax: pageMax,
        pages: Math.ceil(response.length / pageMax),
      });
    },
    (error) => {
      res.send(error);
    }
  );
});

router.get("*", function (req, res) {
  res.status(404).send("Hey lost traveler, what are you doing here???");
});

module.exports = router;
