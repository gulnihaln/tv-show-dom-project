export default function searchShows(input, allShows) {
  return allShows.filter((show) => {
    return (
      show.name.toLowerCase().includes(input.toLowerCase()) ||
      show.summary.toLowerCase().includes(input.toLowerCase())
    );
  });
}
