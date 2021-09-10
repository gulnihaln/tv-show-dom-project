//You can edit ALL of the code here
import episodeSelect from './selectMenu.js';
import searchEpisode from './search.js';

let allEpisodes = [];
function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  episodeSelect(allEpisodes);

}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  const section = document.createElement("section");
  section.className = "sectionEpisodes";
  episodeList.forEach((movie) => {
    const h2 = document.createElement("h2");
    const article = document.createElement("article");
    const image = document.createElement("img");
    const duration = document.createElement('h3');
    const p = document.createElement("p");

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

    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(duration);
    article.appendChild(p);
    section.appendChild(article);
  });
  rootElem.appendChild(section);
}

window.onload = setup;

const search = document.getElementById("search");
const displayNumberOfMovies = document.getElementById("displayNumberOfMovies");

//search function called
search.addEventListener("input", (event) => {
   let searchEpisodes = searchEpisode(event.target.value, allEpisodes); // return u buraya store ediyor
    displayNumberOfMovies.innerText = `Displaying ${searchEpisodes.length}/73 episodes`;
  makePageForEpisodes(searchEpisodes);
});

//select function called
 document.getElementById("episodeSelect").addEventListener("change", (event) => {
   let selectedEpisode = searchEpisode(event.target.value, allEpisodes);
   makePageForEpisodes(selectedEpisode);
 });