# RECIPE.CO

A recipe browser styled like a kitchen order ticket system. Built with plain HTML, CSS, and JavaScript, pulling live data from the [DummyJSON Recipes API](https://dummyjson.com/docs/recipes).

## Live look

- Left rail lists recipes as numbered "order stubs" (thumbnail, name, cuisine + difficulty).
- Click a stub to print the full "ticket" on the right — prep/cook time, servings, calories, rating, tags, ingredients, and instructions.
- Search bar filters recipes live by dish, ingredient, or cuisine.
- No recipe selected yet? You get an empty-ticket state instead of a blank pane.

## Stack

- HTML — `index.html`
- CSS — `style.css` (Space Mono, ticket/stamp aesthetic)
- JavaScript (vanilla, no framework) — `api.js`
- Data — [dummyjson.com/recipes](https://dummyjson.com/recipes)

## Project structure

```
Recipes-Web/
└── Food recipes web/
    ├── index.html
    ├── style.css
    └── api.js
```

## Running it locally

No build step, no dependencies.

1. Clone the repo:
   ```
   git clone https://github.com/ashhadkhan05400-web/Recipes-Web.git
   ```
2. Open `Food recipes web/index.html` in a browser, or serve the folder with any static server (e.g. VS Code Live Server).

## How it works

- On load, `api.js` fetches all recipes from `https://dummyjson.com/recipes` and renders each as a clickable stub in the left rail.
- Clicking a stub finds the matching recipe by ID and renders its full detail ticket on the right.
- Typing in the search bar hits `https://dummyjson.com/recipes/search?q=` and re-renders the stub list with matching results.

## Notes

This is a learning project — API fetching, DOM rendering, and event handling in vanilla JS, no frameworks.
