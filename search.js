export default function searchEpisode (input, allEpisodes) {
return allEpisodes.filter((movie) => {
    return (
    movie.name.toLowerCase().includes(input.toLowerCase()) ||
    movie.summary.toLowerCase().includes(input.toLowerCase())
  );
});
}
