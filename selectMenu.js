// creates episode option menu content
export default function episodeSelect(allEpisodes) {
  const select = document.getElementById("episodeSelect");
  var fragment = document.createDocumentFragment();
  select.innerHTML = "";
  allEpisodes.forEach((episode) => {
    const option = document.createElement("option");
    option.text = `S${("" + episode.season).padStart(2, 0)}E${(
      "" + episode.number
    ).padStart(2, 0)} - ${episode.name}`;
    option.value = episode.name;
    fragment.appendChild(option);
  });

  select.appendChild(fragment);

}


