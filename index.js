import fs from 'node:fs'; // import package to make new directory
import https from 'node:https'; // import package for downloading
import fetch from 'node-fetch'; // import fetch package

// accessing the url
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const urlString = await response.text();

// Find parts with <img>+src inside string
let i = '';
const images = []; // creates an array to store the images
const str = urlString; // puts the data into a string
const rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g; // picks out the images
while ((i = rex.exec(str))) {
  images.push(i[1]);
}

// slice array from 0 to 10 to get first 10 images and put it into a const
const imagesUrl = images.slice(0, 10);
// console.log(imagesUrl);

// creating the meme folder
const path = './memes';
fs.access(path, (error) => {
  // To check if the given directory
  // already exists or not
  if (error) {
    fs.mkdir(path, (errorOne) => {
      if (errorOne) {
        console.log(errorOne);
      } else {
        console.log('Folder successfully created');
      }
    });
  } else {
    console.log('Folder already exists');
  }
});

// download the images from the url inside imagesUrl array:

// loop for download
for (let n = 0; n < imagesUrl.length; n++) {
  if (i < 9) {
    // as long as image number is below 9, add 0 before the number
    https
      .get(imagesUrl[n], (res) => {
        // download file to memes-directory, name it as .jpg with increasing number and add 0 to it
        const imagePath = `/memes/0${n + 1}.jpg`;
        const stream = fs.createWriteStream(imagePath);

        res.pipe(stream);

        stream.on('finish', () => {
          stream.close();
          console.log('Image Downloaded');
        });
      })
      .on('error', (error) => {
        // handle error
        console.log(error);
      });
  } else {
    // once the number is higher than 10
    https
      .get(imagesUrl[n], (res) => {
        // download file to memes-directory, name it as .jpg with increasing number without the 0
        const imagePath = `/memes/${n + 1}.jpg`;
        const stream = fs.createWriteStream(imagePath);

        res.pipe(stream);

        stream.on('finish', () => {
          stream.close();
          console.log('File Downloaded');
        });
      })
      .on('error', (error) => {
        // handle error
        console.log(error);
      });
  }
}
