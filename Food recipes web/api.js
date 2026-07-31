console.log(`js is funning`);
let recipeList = document.getElementById(`recipeList`)
let detailPane = document.getElementById(`detail-pane`);
let emptystate = document.getElementById(`empty-state`)
let count = document.getElementById(`count`)
let searchinput = document.getElementById(`search-input`)
let recipes = [];


fetch(`https://dummyjson.com/recipes`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    recipes = data.recipes;

    let returnrecipes = data.recipes.map(food =>
      ` <li class="order-stub stub--active" data-id="${food.id}" tabindex="0">
          <img src="${food.image}" alt="" class="stub-thumb" loading="lazy">
          <div class="stub-info">
            <span class="stub-num">#${food.id}</span>
            <h3 class="stub-name">${food.name}</h3>
            <span class="stub-cuisine">${food.tags[0]} · ${food.tags[1]}</span>
          </div>
        </li> `
    )

    recipeList.innerHTML = returnrecipes.join(" ")
    count.textContent = `${returnrecipes.length} Recipes on the list`
    console.log(returnrecipes);
  });

recipeList.addEventListener("click", (e) => {
  let li = e.target.closest(".order-stub");
  if (!li) {
    return
  }


  let recipe = recipes.find(r => r.id == li.dataset.id);

  detailPane.innerHTML = `
  <article class="detail-panel" data-id="1">
        <div class="perforation" aria-hidden="true"></div>

        <div class="detail-head">
          <span class="ticket-num">${recipe.id}</span>
          <span class="ticket-type">${recipe.mealType}</span>
        </div>

        <div class="detail-image">
          <img src="${recipe.image}" alt="Classic Margherita Pizza" loading="lazy">
          <span class="stamp stamp--medium">${recipe.difficulty}</span>
        </div>

        <h1 class="detail-name">${recipe.name}</h1>
        <p class="detail-cuisine">${recipe.cuisine}</p>

        <ul class="ticket-lines ticket-lines--detail">
          <li><span>PREP TIME</span><i></i><b>${recipe.prepTimeMinutes} min</b></li>
          <li><span>COOK TIME</span><i></i><b>${recipe.cookTimeMinutes} min</b></li>
          <li><span>SERVINGS</span><i></i><b>${recipe.servings}</b></li>
          <li><span>CAL / SERVING</span><i></i><b>${recipe.caloriesPerServing} kcal</b></li>
        </ul>

        <div class="detail-footer">
          <div class="rating" aria-label="Rating 4.6 out of 5">
            <span class="dot dot--on"></span><span class="dot dot--on"></span>
            <span class="dot dot--on"></span><span class="dot dot--on"></span>
            <span class="dot dot--half"></span>
            <b>${recipe.rating}</b>
          </div>
          <div class="tag-row">
            <span class="tag">${recipe.tags[0]}</span><span class="tag">${recipe.tags[1]}</span><span class="tag"></span>
          </div>
        </div>

        <div class="detail-columns">
          <div class="ingredients-block">
            <h2 class="block-title">INGREDIENTS</h2>
            <ul class="ingredients-list">
              <li>${recipe.ingredients[0]}</li>
              <li>${recipe.ingredients[1]}</li>
              <li>${recipe.ingredients[2]}</li>
              <li>${recipe.ingredients[3]}</li>
              <li>${recipe.ingredients[4]}</li>
              <li>${recipe.ingredients[5]}</li>
            </ul>
          </div>

          <div class="instructions-block">
            <h2 class="block-title">INSTRUCTIONS</h2>
  
              <li>${recipe.instructions}</li>
          </div>
        </div>
      </article>

  `;

  emptystate.style.display = "none"
});

searchinput.addEventListener(`input`, function () {
  let query = searchinput.value;

  fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      recipes = data.recipes
      searchrecipes(data.recipes)
    })
})

function searchrecipes(recipes) {
  recipeList.innerHTML = "";

  if (recipes.length == "") {
    count.innerHTML = `No recipe found`
    return
  }

  recipes.forEach(re => {
    let recipesLi = document.createElement(`li`)
    recipesLi.className = `order-stub stub--active`
    recipesLi.setAttribute('data-id', re.id)
    recipesLi.innerHTML = `
          <img src="${re.image}" alt="" class="stub-thumb" loading="lazy">
          <div class="stub-info">
            <span class="stub-num">#${re.id}</span>
            <h3 class="stub-name">${re.name}</h3>
            <span class="stub-cuisine">${re.tags[0]} · ${re.tags[1]}</span>
          </div>`;

    recipeList.appendChild(recipesLi)
    count.innerHTML = `${recipes.length} Recipes on the list`


  });

}