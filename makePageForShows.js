export default function makePageForShows(showsList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  const section = document.createElement("ul");
  section.className = "sectionShows";
  episodeList.forEach((show) => {
    const h2 = document.createElement("h2");
    const article = document.createElement("li");
    const image = document.createElement("img");
    const duration = document.createElement("h3");
    const p = document.createElement("div");

    h2.innerText = `${show.name} - S${("" + show.season).padStart(2, "0")}E${(
      "" + show.number
    ).padStart(2, "0")}`;
    image.src = show.image.medium;
    image.alt = show.name;
    duration.innerText = durationFormat(show.runtime);
    function durationFormat(minutes) {
      const min = ((minutes % 60) + "").padStart(2, 0);
      const hour = Math.floor(minutes / 60);
      return `${hour}h${min}min`;
    }
    p.innerHTML = show.summary;
    article.addEventListener("mouseover", () => {
      p.classList.add("open");
    });
    article.addEventListener("mouseout", () => {
      p.classList.remove("open");
    });

    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(duration);
    article.appendChild(p);
    section.appendChild(article);
  });
  rootElem.appendChild(section);
}