const recipeContainer = document.getElementById("recipeContainer");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const API_ENDPOINT = `https://v1.appbackend.io/v1/rows/Kz0WREflv1BH/${id}`

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
    const recipeIngHeader = document.createElement("div");
    const recipeStepsHeader = document.createElement("div");
    const editBtn = document.createElement("a");

    recipeTitle.textContent = recipe.title;
    recipeTitle.classList.add("text-3xl");

    recipeIngHeader.textContent = "Bahan-bahan:";
    recipeIngHeader.classList.add("text-md","my-4");
    recipeIng.textContent = recipe.ingredients;
    recipeIng.classList.add("whitespace-pre-line")

    recipeStepsHeader.textContent="Cara membuat:";
    recipeStepsHeader.classList.add("text-md","my-4");
    recipeSteps.textContent = recipe.steps;
    recipeSteps.classList.add("whitespace-pre-line", "my-4");

    recipeCategory.classList.add("rounded-lg","border-2", "border-green-700","text-xs", "text-green-700","w-25","p-2","font-semibold");
    recipeCategory.textContent = recipe.category;

    recipeContainer.classList.add("w-[600px]","grid","rounded-lg","bg-yellow-100","p-4","space-y-4");
    editBtn.textContent="Edit Resep";
    editBtn.href = `/edit.html?id=${id}`;
    editBtn.classList.add("bg-green-600", "text-white","p-2", "rounded-full")

    recipeContainer.append(recipeTitle, recipeCategory, recipeIngHeader, recipeIng, recipeStepsHeader, recipeSteps, editBtn);
}

buildApp();

