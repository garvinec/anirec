# Anirec

This web application displays the ranking of anime based on their MAL (MyAnimeList) score, utilizing the _[Jikan API](https://jikan.moe/)_. On the application, users can find the overall ranking and the genre-specific ranking of popular animes.

## Technologies Used

- JavaScript
- EJS (Embedded JavaScript)
- Tailwind CSS
- Express.js
- Node.js
- Jest

## Getting Started

1. Cloning the repository

```
git clone https://github.com/garvinec/anirec.git
```

2. Change directories

```
cd anirec
```

3. Fetch dependencies

```
npm install
```

4. Run the server locally

```
npm run start
```

## Features

### Jest Testing

Jest testing framework was used to ensure that the data fetched from the API is correctly sorted by genres.

### Client-Side Data Caching

Node-cache, a NodeJS internal caching module, was used for client-side caching of data. This was implemented to prevent exceeding the rate limit of the Jikan API and improve the loading speed of each page.

### Mobile-Optimized Design

Tailwind CSS was used to ensure that the web application is optimized for various devices, including mobile and tablet devices.
