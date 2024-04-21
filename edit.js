const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/Kz0WREflv1BH/${id}`;

const titleInput = document.getElementById("name");
const imgInput = document.getElementById("image");
const ingInput = document.getElementById("ingredients");
const stepsInput = document.getElementById("steps");
const descInput = document.getElementById("description");
const catInput = document.getElementById("category");
const form = document.getElementById("form");



 form.addEventListener("submit", async (event)=> {
     event.preventDefault();
     
           await fetch("https://v1.appbackend.io/v1/rows/Kz0WREflv1BH" , {
               method: "PUT",
              headers: {
                   "Content-Type": "application/json",
              },
              body: JSON.stringify({_id: id, title: titleInput.value ,ingredients: ingInput.value ,steps: stepsInput.value, description:descInput.value, category:catInput.value, cover:imgInput.value })
    })
      location.replace(`/singleRecipe.html?id=${id}`);
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
    descInput.value = recipe.description;
    catInput.value = recipe.category;
    imgInput.value = recipe.cover;
   


}

buildApp();