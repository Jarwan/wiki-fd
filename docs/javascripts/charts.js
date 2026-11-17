document$.subscribe(function () {
  var el = document.getElementById("lorem-chart-external");
  if (!el || el.dataset.rendered) return;
  el.dataset.rendered = "true";

  Plotly.newPlot(el, [{
    x: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
    y: [8, 14, 11, 17, 9, 20],
    type: "scatter",
    mode: "lines+markers"
  }], {
    margin: { t: 16, r: 16, b: 32, l: 32 },
    font: { family: "inherit" }
  }, { responsive: true, displayModeBar: false });
});
