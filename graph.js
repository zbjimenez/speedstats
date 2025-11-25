const FIG = document.getElementsByTagName('figure')[0];

Plotly.newPlot( figure, [
  {
    x: [1, 2, 3, 4],
    y: [2, 4, 8, 16]
  },
  {
    margin: {t: 0}
  },
]);

console.log(Plotly.BUILD)