API_ENDPOINT= "https://v1.appbackend.io/v1/rows/tmlJ1Vd0uiKn"
const recipeContainer = document.getElementById("recipeContainer")
const searchinput = document.getElementById("searchRecipe");

let dataRecipes = [];

searchinput.addEventListener("keyup",()=>{
    const searchvalue = searchinput.value;
    recipeContainer.innerHTML ="";

    const filteredrecipes = dataRecipes.data.filter((recipe)=> recipe.title.toLowerCase().includes(searchvalue.toLowerCase()));

    filteredrecipes.forEach((recipe)=> {
        const newRecipeTitle = document.createElement("div");
        const newRecipeCategory = document.createElement("h");
        const newRecipeDesc = document.createElement("h4");
        const newRecipeImg = document.createElement("img");
        const newRecipeBtn = document.createElement("a");
        const newRecipeContainer = document.createElement("div");

        newRecipeTitle.textContent=recipe.title;
        newRecipeTitle.classList.add("text-3xl","font-bold","text-green-700");

        newRecipeCategory.textContent=recipe.category;
        newRecipeCategory.classList.add("rounded-full","bg-green-600","text-xs", "text-white","w-25","p-2");

        newRecipeBtn.textContent="Lihat Resep";
        newRecipeBtn.href = `/singleRecipe.html?id=${recipe._id}`;
        newRecipeBtn.classList.add("my-4","rounded-lg","bg-green-300","text-black","border-4");

        newRecipeImg.src = recipe.cover;
        newRecipeImg.classList.add("w-80","h-80")

        newRecipeContainer.classList.add("grid", "grid-rows-3", "bg-green-50","border-green-200","border-4","p-2","rounded-xl")
        recipeContainer.classList.add("grid","grid-cols-3","justify-between","m-auto");

        newRecipeContainer.append(newRecipeTitle, newRecipeDesc, newRecipeCategory, newRecipeImg, newRecipeBtn)
        recipeContainer.append(newRecipeContainer);
    
    
    } )

})

async function deleteRecipe (id) {
     await fetch (API_ENDPOINT,  {
        method: "DELETE",
        headers: {
              'Content-Type' : 'application/json',
        },
        body: JSON.stringify([id]),
    })
    location.reload()
    }
  

async function getRecipes() {
    const res = await fetch (API_ENDPOINT);
    const data = await res.json();
    return data;
}

async function buildApp() {
    const recipes = await getRecipes();
    dataRecipes= recipes

    recipes.data.forEach((recipe)=> {
        const newRecipeTitle = document.createElement("div");
        const newRecipeCategory = document.createElement("h");
        const newRecipeIng = document.createElement("h2");
        const newRecipeSteps = document.createElement("h3");
        const newRecipeDesc = document.createElement("h4");
        const newRecipeImg = document.createElement("image");
        const newRecipeContainer = document.createElement("div");
        const newRecipeBtn = document.createElement("a");
        const deleteBtn = document.createElement("button")
       
        newRecipeTitle.textContent=recipe.title;
        newRecipeTitle.classList.add("text-3xl","font-bold","text-green-700")

        newRecipeCategory.textContent=recipe.category;
        newRecipeCategory.classList.add("rounded-full","bg-green-600","text-xs", "text-white","w-25","p-2")
        newRecipeIng.textContent=recipe.ingredients;

        newRecipeSteps.textContent=recipe.steps;
        //newRecipeImg.src = "https://www.warisankuliner.com/gfx/recipes/temp_thumb-1573447309.jpg";
        newRecipeDesc.textContent=recipe.description;
        newRecipeDesc.classList.add("text-sm");

        newRecipeBtn.textContent="Lihat Resep";
        newRecipeBtn.href = `/singleRecipe.html?id=${recipe._id}`;
        newRecipeBtn.classList.add("my-4","rounded-lg","bg-green-300","text-black","border-4")

        newRecipeContainer.classList.add("grid", "justify-items-center", "grid-rows-3", "bg-green-50","border-green-200","border-4","p-2","rounded-xl")
        recipeContainer.classList.add("grid","grid-cols-3","grid-cols-3","justify-between","m-auto");
        
        deleteBtn.textContent = "X"
        deleteBtn.classList.add("p-2","w-16", "bg-red-600", "text-white", "rounded-full")
        deleteBtn.addEventListener("click", async ()=> {
            await deleteRecipe(recipe._id);
        });

        newRecipeContainer.append(newRecipeTitle, newRecipeDesc, newRecipeCategory, newRecipeImg, newRecipeBtn, deleteBtn)
        recipeContainer.append(newRecipeContainer);
    })
}

buildApp();
