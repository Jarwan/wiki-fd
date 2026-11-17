# Wiki FD

Built on [Zensical](https://zensical.org)

- **LaTeX formulas** via `pymdownx.arithmatex` + MathJax
- **Plotly charts** via Plotly.js
- **Syntax-highlighted code blocks** via `pymdownx.highlight` + `pymdownx.superfences`

## Prerequisites

- Python 3.10+
- `pip` (or `uv`)

## Install

Using `pip`:

```bash
python3 -m venv .venv
source .venv/bin/activate   # .venv\Scripts\activate on Windows
pip install zensical
```

Using `uv`:

```bash
uv init
uv add --dev zensical
```

## Build & preview

Serve locally with live reload (default: http://localhost:8000):

```bash
zensical serve
```

Build the static site to `site/`:

```bash
zensical build
```

## External resources

- [Zensical documentation](https://zensical.org/docs/)
- [Zensical: Math](https://zensical.org/docs/authoring/math/)
- [Zensical: Code blocks](https://zensical.org/docs/authoring/code-blocks/)
- [Plotly JavaScript documentation](https://plotly.com/javascript/)
