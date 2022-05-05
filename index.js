import axios from 'axios';
import cheerio from 'cheerio';
// importing required library
import https from 'https';

// importing HTML

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')

  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
