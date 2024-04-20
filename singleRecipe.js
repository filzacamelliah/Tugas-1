const recipeContainer = document.getElementById("recipeContainer");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/xGAicIN7yv5R/${id}`

console.log(API_ENDPOINT);


async function getRecipe() {
    const res = await fetch (API_ENDPOINT);
    const data = await res.json();
    return data
}

async function buildApp() {
    const recipe = await getRecipe();

    const recipeTitle = document.createElement("div");
    const recipeIng = document.createElement("h");
    const recipeSteps = document.createElement("h2");
    const recipeCategory = document.createElement("h3");
    //const newrecipeContainer = document.createElement("div");
    const recipeIngHeader = document.createElement("div")
    const editBtn = document.createElement("a");

    recipeTitle.textContent = recipe.title;
    recipeTitle.classList.add("text-3xl");

    recipeIngHeader.textContent = "Bahan-bahan:";
    recipeIngHeader.classList.add("text-md","my-4");
    recipeIng.textContent = recipe.ingredients;
    recipeIng.classList.add("whitespace-pre-line")

    recipeSteps.textContent = recipe.steps;
    recipeSteps.classList.add("whitespace-pre-line", "my-4")
    recipeCategory.textContent = recipe.category;

    recipeContainer.classList.add("w-[600px]","grid","rounded-lg","bg-green-200","p-2");
    editBtn.textContent="Edit Resep";
    editBtn.href = `/edit.html?id=${id}`;
    editBtn.classList.add("bg-green-500", "text-white","p-2")

    recipeContainer.append(recipeTitle, recipeIngHeader, recipeIng, recipeSteps, recipeCategory, editBtn);
}

buildApp();

