export default function selectShow(allShows) {
  const select = document.getElementById("showEpisodeSelect");
  const fragment = document.createDocumentFragment();

  allShows = sortedList(allShows);
  allShows.forEach((show) => {
    const option = document.createElement("option");
    option.text = show.name;
    option.value = show.id;
    fragment.appendChild(option);
  });

  select.appendChild(fragment);

}

function sortedList (shows){
  return shows.sort((a, b) => {
    const nameBefore = a.name.toLowerCase();
    const nameAfter = b.name.toLowerCase();
    
    if(nameBefore < nameAfter){
      return -1;
    }
  });
}