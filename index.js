// importing required library
import * as fs from 'fs';
import https from 'https';
import fetch from 'node-fetch';

// creating the meme folder
const path = './memes';

// To check if the given directory
// already exists or not
fs.access(path, (error) => {
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully!!');
      }
    });
  } else {
    console.log('Directory already exists !!');
  }
});

// accessing the url
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();

let i = '';
const url = [];
const str = data;
const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;

while ((i = rex.exec(str))) {
  url.push(i[1]);
}

// loop for download
for (let i = 0; i < 10; i++) {
  if (i < 9) {
    fs.mkdir('./memes', { recursive: true }, function () {});
    const fileName = `memes/0${i + 1}.jpg`;
    console.log(fileName);
    const file = fs.createWriteStream(fileName);
    https.get(url[i], function (answer) {
      answer.pipe(file);
    });
  } else {
    fs.mkdir('./memes', { recursive: true }, function () {});
    const fileName = `memes/${i + 1}.jpg`;
    console.log(fileName);
    const file = fs.createWriteStream(fileName);
    https.get(url[i], function (answer) {
      answer.pipe(file);
    });
  }
}
