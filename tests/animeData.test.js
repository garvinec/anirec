const { sortDataByGenre } = require("../src/utils/animeData");

// Mock api response
const mockData = [
  // Action, Sci-fi
  {
    mal_id: 1,
    title: "Cowboy Bebop",
    score: 8.75,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 46,
        type: "anime",
        name: "Award Winning",
        url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Action, Sci-fi
  {
    mal_id: 5,
    title: "Cowboy Bebop: Tengoku no Tobira",
    score: 8.38,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Action, Comedy, Sci-fi
  {
    mal_id: 918,
    title: "Gintama",
    score: 8.94,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Romance, Comedy
  {
    mal_id: 43608,
    title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
    score: 9.02,
    genres: [
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 22,
        type: "anime",
        name: "Romance",
        url: "https://myanimelist.net/anime/genre/22/Romance",
      },
    ],
  },
  {
    mal_id: 41467,
    title: "Bleach: Sennen Kessen-hen",
    score: 9.02,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 2,
        type: "anime",
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        mal_id: 10,
        type: "anime",
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
  },
];

const mockPopularResult = [
  // Action, Sci-fi
  {
    title: "Cowboy Bebop",
    score: 8.75,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 46,
        type: "anime",
        name: "Award Winning",
        url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Action, Sci-fi
  {
    title: "Cowboy Bebop: Tengoku no Tobira",
    score: 8.38,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Action, Comedy, Sci-fi
  {
    title: "Gintama",
    score: 8.94,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  // Romance, Comedy
  {
    title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
    score: 9.02,
    genres: [
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 22,
        type: "anime",
        name: "Romance",
        url: "https://myanimelist.net/anime/genre/22/Romance",
      },
    ],
  },
  // Action, Adventure
  {
    title: "Bleach: Sennen Kessen-hen",
    score: 9.02,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 2,
        type: "anime",
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        mal_id: 10,
        type: "anime",
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
  },
];

const mockActionResult = [
  {
    title: "Cowboy Bebop",
    score: 8.75,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 46,
        type: "anime",
        name: "Award Winning",
        url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Cowboy Bebop: Tengoku no Tobira",
    score: 8.38,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Gintama",
    score: 8.94,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Bleach: Sennen Kessen-hen",
    score: 9.02,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 2,
        type: "anime",
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        mal_id: 10,
        type: "anime",
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
  },
];

const mockAdventureResult = [
  {
    title: "Bleach: Sennen Kessen-hen",
    score: 9.02,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 2,
        type: "anime",
        name: "Adventure",
        url: "https://myanimelist.net/anime/genre/2/Adventure",
      },
      {
        mal_id: 10,
        type: "anime",
        name: "Fantasy",
        url: "https://myanimelist.net/anime/genre/10/Fantasy",
      },
    ],
  },
];

const mockComedyResult = [
  {
    title: "Gintama",
    score: 8.94,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
    score: 9.02,
    genres: [
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 22,
        type: "anime",
        name: "Romance",
        url: "https://myanimelist.net/anime/genre/22/Romance",
      },
    ],
  },
];

const mockRomanceResult = [
  {
    title: "Kaguya-sama wa Kokurasetai: Ultra Romantic",
    score: 9.02,
    genres: [
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 22,
        type: "anime",
        name: "Romance",
        url: "https://myanimelist.net/anime/genre/22/Romance",
      },
    ],
  },
];

const mockSciFiResult = [
  {
    title: "Cowboy Bebop",
    score: 8.75,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 46,
        type: "anime",
        name: "Award Winning",
        url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Cowboy Bebop: Tengoku no Tobira",
    score: 8.38,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
  {
    title: "Gintama",
    score: 8.94,
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 4,
        type: "anime",
        name: "Comedy",
        url: "https://myanimelist.net/anime/genre/4/Comedy",
      },
      {
        mal_id: 24,
        type: "anime",
        name: "Sci-Fi",
        url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
      },
    ],
  },
];

const mockError = {
  response: {
    status: 429,
    statusText: "Too Many Requests",
  },
};

test("Sorting popular anime data logic", () => {
  expect(sortDataByGenre("", mockData)).toStrictEqual(mockPopularResult);
});

test("Sorting action anime data logic", () => {
  expect(sortDataByGenre("Action", mockData)).toStrictEqual(mockActionResult);
});

test("Sorting adventure anime data logic", () => {
  expect(sortDataByGenre("Adventure", mockData)).toStrictEqual(
    mockAdventureResult
  );
});

test("Sorting comedy anime data logic", () => {
  expect(sortDataByGenre("Comedy", mockData)).toStrictEqual(mockComedyResult);
});

test("Sorting romance anime data logic", () => {
  expect(sortDataByGenre("Romance", mockData)).toStrictEqual(mockRomanceResult);
  expect(sortDataByGenre("Sci-Fi", mockData)).toStrictEqual(mockSciFiResult);
});

test("Sorting sci-fi anime data logic", () => {
  expect(sortDataByGenre("Sci-Fi", mockData)).toStrictEqual(mockSciFiResult);
});
