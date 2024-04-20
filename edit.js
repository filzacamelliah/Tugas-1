const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const API_ENDPOINT = "https://v1.appbackend.io/v1/rows/tmlJ1Vd0uiKn";

const titleInput = document.getElementById("name");
const ingInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const form = document.getElementById("form");

form.addEventListener("submit", async (event)=> {
    event.preventDefault();
    console.log(id,titleInput.value,ingInput.value, stepsInput.value)
    //     await fetch("https://v1.appbackend.io/v1/rows/xGAicIN7yv5R" , {
    //         method: "PUT",
    //         headers: {
    //               "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({_id: id,title: titleInput.value ,ingredients: ingInput.value ,steps:stepsInput.value})
    //   })
      //location.replace(`/singleRecipe.html?id=${id}`);
})


async function getRecipes () {
    const res = await fetch (API_ENDPOINT);
    const data = await res.json();
    return data;
}

async function buildApp () {
    const recipe = await getRecipes();
    titleInput.value = recipe.title;
    ingInput.value = recipe.ingredients;
    stepsInput.value = recipe.steps;

}

buildApp();