//You can edit ALL of the code here
{/* <section id="card">
      <article>
        <h2>Movie name</h2>
        <img src="" alt="">
        <p id="season-episode">Season & Episodes</p>
        <p id="summary">Summary</p>
      </article>
    </section> */}




function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const section = document.createElement('section');
  episodeList.forEach(movie => {
    const article = document.createElement('article');
    const image = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    image.src = movie.image.medium;
    image.alt = movie.name;
    h2.innerText = `${movie.name} - S${(''+movie.season).padStart(2, '0')} ${(''+movie.number).padStart(2,'0')}`
    p.innerText =movie.summary;

    article.appendChild(image);
    article.appendChild(h2);
    article.appendChild(p);
    section.appendChild(article);

  })
  const rootElem = document.getElementById("root");
  rootElem.appendChild(section);
}

window.onload = setup;
