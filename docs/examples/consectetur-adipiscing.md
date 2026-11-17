# Consectetur Adipiscing

## Summary

*Consectetur Adipiscing* is the last stop in this trio of placeholder articles. It exists to show fenced code
blocks with syntax highlighting, line numbers, and a title — the baseline most technical wikis need.

## Body

Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### A short aside

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Integration example: code blocks

A Python snippet with a title and line numbers:

```python title="lorem.py" linenums="1"
def lorem_ipsum(words: int = 5) -> str:
    """Return a short slice of placeholder text."""
    corpus = "lorem ipsum dolor sit amet consectetur adipiscing elit".split()
    return " ".join(corpus[:words])


if __name__ == "__main__":
    print(lorem_ipsum(3))
```

A shell snippet:

```bash
curl -s https://www.lipsum.com/ -o lipsum.html
```

Inline code also works, like `pip install zensical`.

## See also

- [Lorem Ipsum](lorem-ipsum.md) — the LaTeX example
- [Dolor Sit Amet](dolor-sit-amet.md) — the Plotly chart example
- [Home](../index.md)

## Sources

- [Zensical: code blocks](https://zensical.org/docs/authoring/code-blocks/)
- [Wikipedia: Lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum)
