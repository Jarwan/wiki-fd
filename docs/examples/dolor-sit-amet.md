# Dolor Sit Amet

## Summary

*Dolor Sit Amet* continues the filler-text narrative and exists mainly to host a worked example of embedding a
[Plotly](https://plotly.com/javascript/) chart directly inside a wiki page.

## Body

Dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore.

Curabitur sunt in culpa qui officia deserunt mollit anim id est laborum, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.

### Measurements

Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio
cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor
repellendus.

## Integration example: Plotly charts

Plotly.js itself is loaded once, globally, via `extra_javascript` in `zensical.toml`. The two charts below show
the two ways to drive it from a page.

### Inline script

A `<script>` written directly in the Markdown page runs immediately, while the browser is still parsing the
HTML — before the deferred `extra_javascript` bundles (Plotly, the theme's own JS) have actually executed. So it
can't touch `Plotly` yet, and it must wait for the `load` event, which only fires once every deferred script has
run:

<div id="lorem-chart-inline" style="height: 360px;"></div>

<script>
  (function () {
    function render() {
      var el = document.getElementById("lorem-chart-inline");
      if (!el || el.dataset.rendered) return;
      el.dataset.rendered = "true";
      Plotly.newPlot(el, [{
        x: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
        y: [12, 19, 7, 23, 15],
        type: "bar"
      }], {
        margin: { t: 16, r: 16, b: 32, l: 32 },
        font: { family: "inherit" }
      }, { responsive: true, displayModeBar: false });
    }
    if (document.readyState === "complete") {
      render();
    } else {
      window.addEventListener("load", render);
    }
  })();
</script>

### External script file

The idiomatic way is to keep the chart's logic out of the page entirely, in
[docs/javascripts/charts.js](../javascripts/charts.js), registered via `extra_javascript`. Because that file is
itself loaded as a deferred script, by the time it runs, both `Plotly` and the theme's `document$` observable
are guaranteed to already exist, so it can use `document$.subscribe` directly — the same pattern as
`mathjax.js`:

<div id="lorem-chart-external" style="height: 360px;"></div>

## See also

- [Lorem Ipsum](lorem-ipsum.md) — the LaTeX example
- [Consectetur Adipiscing](consectetur-adipiscing.md) — the code block example
- [Home](../index.md)

## Sources

- [Plotly JavaScript documentation](https://plotly.com/javascript/)
- [Wikipedia: Lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum)
