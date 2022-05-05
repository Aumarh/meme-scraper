// importing required library
import axios from 'axios';
// import cheerio from 'cheerio';
// import { data } from 'cheerio/lib/api/attributes';
import fetch from 'fetch';
import fs from 'fs';
import https from 'https';

// creating the folder for the meme img
// fs.mkdirSync('./path/to');

// defining variables
// const pageUrl = ;
// const memeUrl =
//   'https://memecomplete.com/edit/https:/api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg';
// const meme = memeUrl + '.images';
// const wait = (time) => new promises((resolve) => setTimeout(resolve, time));

// const downloadMemeInPage = async function(page)

// importing HTML
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')

  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const url =
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg?width=300';

https.get(url, (res) => {
  const path = '01.jpg';
  const writeStream = fs.createWriteStream(path);

  res.pipe(writeStream);

  writeStream.on('finish', () => {
    writeStream.close();
    console.log('Download Complete');
  });
});

// let getData = (html) => {
//   data = [];
//   const $ = cheerio.load(html);
//   $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
//     data.push({
//       title: $(elem).text(),
//       link: $(elem).find('a.imagelink').attr('href'),
//     });
//   });
//   console.log(data);
// };
// getData(response.data);

// setting up puppeteer
// async function run() {
//   const browser = await puppeteer.launch({
//     headless: false,
//   });
//   await pageUrl.goto(pageUrl);

//   await downloadMemeInPage(page);

//   browser.close();
// }

// function fetch(imgUrl) {
//   console.log(imgUrl);
// }

// fetch(
//   'https://memecomplete.com/edit/https:/api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg',
// ).then((res) => res.body.pipe(fs.createWriteStream('./path/to/memes.jpg')));

// https
//   .get('https://memegen-link-examples-upleveled.netlify.app/', (response) => {
//     let data = '';
//     response.on('data', (chunk) => {
//       data += chunk;
//     });

//     response.on('end', () => {
//       console.log(data);
//     });
//   })
//   .on('error', (error) => {
//     console.log(error);
//   });
