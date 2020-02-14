const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

const shuffle = array => array.sort(() => Math.random() - 0.5);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/pack", (req, res) => {
  res.render("pack");
});

router.get("/planet-textures", (req, res) => {
  console.log("a");
  axios.get("https://www.google.com/search?tbm=isch&q=planet+texture").then(googleSearch => {
    const $ = cheerio.load(googleSearch.data);

    const planetTextures = [];

    $("img").each((idx, planetTexture) => {
      if (
        planetTexture.attribs.src !== undefined &&
        planetTexture.attribs.src.indexOf(".gif") === -1
      ) {
        planetTextures.push(planetTexture.attribs.src);
      }
    });

    res.json(shuffle(planetTextures));
  });
});

module.exports = router;
