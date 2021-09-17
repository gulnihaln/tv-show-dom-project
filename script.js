//You can edit ALL of the code here
import episodeSelect from './selectMenu.js';
import searchEpisode from './search.js';

let allEpisodes = [];
function setup() {
  // allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  episodeSelect(allEpisodes);

}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  const section = document.createElement('ul');
  section.className = "sectionEpisodes";
  episodeList.forEach((movie) => {
    const h2 = document.createElement("h2");
    const article = document.createElement("li");
    const image = document.createElement("img");
    const duration = document.createElement('h3');
    const p = document.createElement('div');

    h2.innerText = `${movie.name} - S${("" + movie.season).padStart(2, "0")}E${(
      "" + movie.number
    ).padStart(2, "0")}`;
    image.src = movie.image.medium;
    image.alt = movie.name;
    duration.innerText = durationFormat(movie.runtime);
    function durationFormat (minutes) {
      const min = ((minutes % 60)+'').padStart(2,0);
      const hour = Math.floor(minutes / 60);
      return `${hour}h${min}min`;
      }
    p.innerHTML = movie.summary;
    article.addEventListener('mouseover', () =>{
      p.classList.add('open');

    })
    article.addEventListener("mouseout", () => {
      p.classList.remove('open');
    });
    
    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(duration);
    article.appendChild(p);
    section.appendChild(article);
  });
  rootElem.appendChild(section);
}

window.onload = fetchData; // fetch olacak

const search = document.getElementById("search");
const displayNumberOfMovies = document.getElementById("displayNumberOfMovies");

//search function called
search.addEventListener("input", (event) => {
   let searchEpisodes = searchEpisode(event.target.value, allEpisodes); // return u buraya store ediyor
    displayNumberOfMovies.innerText = `Displaying ${searchEpisodes.length}/ ${allEpisodes.length} episodes`;
  makePageForEpisodes(searchEpisodes);
});

//select function called
 document.getElementById("episodeSelect").addEventListener("change", (event) => {
   let selectedEpisode = searchEpisode(event.target.value, allEpisodes);
   makePageForEpisodes(selectedEpisode);
 });

//  let url = "https://api.tvmaze.com/shows/82/episodes";
// fetch (url).then(response => response.json()).then(data => console.log(data));

// let url = "https://api.tvmaze.com/shows/82/episodes";
// fetch(url)
//   .then((x) => x.json())
//   .then((data) => console.log(data[0].name));


// fetch icin function
// fetch icinde sonunda setup i cagir

function fetchData (){
  let url = "https://api.tvmaze.com/shows/527/episodes";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      allEpisodes = data;
      setup();
    })
    .catch(error => {
      console.log("Error", error);
    });
    
}