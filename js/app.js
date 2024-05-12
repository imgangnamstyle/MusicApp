/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Lena Park
 *      Student ID: 127390235
 *      Date:       <2024-04-16>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;
// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

function generateArtistButtons(artists) {
  console.log("generating artists");

  const menu = document.querySelector("#menu");
  for (let i = 0; i < artists.length; i++) {
    let artistButton = document.createElement("button");
    artistButton.innerHTML = artists[i].name;

    artistButton.addEventListener("click", function () {
      loadArtist(i);
      createSongCard(artists[i].artistId);
    });
    menu.appendChild(artistButton);    
  }
}

function loadArtist(index = 0) {
  let selectedArtist = document.getElementById("selected-artist");
  selectedArtist.innerHTML = artists[index].name;
  // let links = " (";
  // for (let i = 0; i < artists[index].urls.length; i++) {
  //   links +=
  //     '<a href="' +
  //     artists[index].urls[i].url +
  //     '" target="_blank">' +
  //     artists[index].urls[i].name +
  //     "</a>";

  //   if (i < artists[index].urls.length - 1) {
  //     links += ", ";
  //   }
  // }
  // links += ")";
  // selectedArtist.innerHTML += links;
  createSongCard(artists[index].artistId);
  createSongCard(songs[index].url);
}

function createSongCard(artistID) {
  let getSongByArtist = songs.filter(
    (song) => song.artistId === artistID && song.explicit === true
  );
  let cards = document.getElementById("cards");

  //remove existing cards
  cards.innerHTML='';

  //Loop each song by artists
  getSongByArtist.forEach((song) => {

    let cards = document.getElementById("cards");
    
    let card = document.createElement('div');
    card.classList.add('card');
    cards.appendChild(card);
    let img = document.createElement('img');

    img.src = song.imageUrl;
    img.classList.add('img');
    card.appendChild(img);
    
    const h2 = document.createElement('h2');
    h2.textContent = song.title;
    card.appendChild(h2);

    let h4 = document.createElement('h4');
    h4.textContent = song.year;
    card.appendChild(h4);

    card.addEventListener("click", function(){
      window.open(song.url);
    });
  });
}

function main() {
  console.log("page loaded");
  // main function here
  generateArtistButtons(artists);
}

window.addEventListener("load", main);
