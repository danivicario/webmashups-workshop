<img src="https://raw.githubusercontent.com/webmad1019-1/w1d3-advanced-selectors-positioning-full-layout/master/img/ironhack.svg?sanitize=true" alt="Ironhack" width="60"/>

# Web mashups microlearning

The Exoplanet Archive API allows programatic access to NASA's Exoplanet Archive database. I am using it to create a creative data visualisation tool of all the exoplanets that have been already found as well as providing random textures based on applying scraping on the google image search website.

<img src="https://raw.githubusercontent.com/webmad1019-1/webmashups-workshop/master/public/images/result2.jpg" alt="Result 2" />

<img src="https://raw.githubusercontent.com/webmad1019-1/webmashups-workshop/master/public/images/result.png" alt="Result" />

Install the project via `npm install` and then run it  via `npm run dev`

## NASA API 

All API services: https://api.nasa.gov/

Confirmed exoplanets service: https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_kepflag=1

## Paths

* In order to see the top biggest exoplanets yet detected on http://localhost:3000/

* In order to see the all the exoplanets in a circle packing arrangement on http://localhost:3000/pack

* Random planet textures served via cheerio scraping on http://localhost:3000/planet-textures