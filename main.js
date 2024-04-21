API_ENDPOINT= "https://v1.appbackend.io/v1/rows/Kz0WREflv1BH"
const recipeContainer = document.getElementById("recipeContainer")
const searchinput = document.getElementById("searchRecipe");
const addRecipe = document.getElementById("addRecipe");

addRecipe.addEventListener("click", ()=>{
    document.location.href = "addRecipe.html";
})


let dataRecipes = [];

searchinput.addEventListener("keyup",()=>{
    const searchvalue = searchinput.value;
    recipeContainer.innerHTML ="";

    const filteredrecipes = dataRecipes.data.filter((recipe)=> recipe.title.toLowerCase().includes(searchvalue.toLowerCase()));

    filteredrecipes.forEach((recipe)=> {
        const newRecipeTitle = document.createElement("div");
        const newRecipeCategory = document.createElement("h");
        const newRecipeIng = document.createElement("h2");
        const newRecipeSteps = document.createElement("h3");
        const newRecipeDesc = document.createElement("h4");
        const newRecipeImg = document.createElement("img");
        const newRecipeContainer = document.createElement("div");
        const newRecipeBtn = document.createElement("a");
        const deleteBtn = document.createElement("button");

        newRecipeImg.src=recipe.cover;
        newRecipeImg.classList.add("w-[320px]","h-[160px]")
       
        newRecipeTitle.textContent=recipe.title;
        newRecipeTitle.classList.add("text-2xl","font-bold","text-green-700")

        newRecipeCategory.textContent=recipe.category;
        newRecipeCategory.classList.add("rounded-lg","border-2", "border-green-700","text-xs", "text-green-700","w-25","p-2","font-semibold")
        newRecipeIng.textContent=recipe.ingredients;

        newRecipeSteps.textContent=recipe.steps;
        newRecipeDesc.textContent=recipe.description;
        newRecipeDesc.classList.add("text-sm");

        newRecipeBtn.textContent="Lihat Resep";
        newRecipeBtn.href = `/singleRecipe.html?id=${recipe._id}`;
        newRecipeBtn.classList.add("my-4","rounded-lg","bg-green-300","text-black","border-4")

        newRecipeContainer.classList.add("grid", "justify-items-center","border-2","border-green-900", "bg-yellow-100","p-4","rounded-lg","space-y-4")
        recipeContainer.classList.add("grid","grid-cols-3","grid-cols-3","justify-between","m-auto");
        
        deleteBtn.textContent = "X"
        deleteBtn.classList.add("p-2","w-8", "bg-red-600", "text-white", "rounded-full")
        deleteBtn.addEventListener("click", async ()=> {
            await deleteRecipe(recipe._id);
        });

        newRecipeContainer.append(newRecipeImg, newRecipeTitle, newRecipeCategory, newRecipeDesc, newRecipeBtn, deleteBtn)
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
        const newRecipeImg = document.createElement("img");
        const newRecipeContainer = document.createElement("div");
        const newRecipeBtn = document.createElement("a");
        const deleteBtn = document.createElement("button");

        newRecipeImg.src=recipe.cover;
        newRecipeImg.classList.add("w-[320px]","h-[160px]")
       
        newRecipeTitle.textContent=recipe.title;
        newRecipeTitle.classList.add("text-2xl","font-bold","text-green-700")

        newRecipeCategory.textContent=recipe.category;
        newRecipeCategory.classList.add("rounded-lg","border-2", "border-green-700","text-xs", "text-green-700","w-25","p-2","font-semibold")
        newRecipeIng.textContent=recipe.ingredients;

        newRecipeSteps.textContent=recipe.steps;
        newRecipeDesc.textContent=recipe.description;
        newRecipeDesc.classList.add("text-sm");

        newRecipeBtn.textContent="Lihat Resep";
        newRecipeBtn.href = `/singleRecipe.html?id=${recipe._id}`;
        newRecipeBtn.classList.add("my-4","rounded-lg","bg-green-300","text-black","border-4")

        newRecipeContainer.classList.add("grid", "justify-items-center","border-2","border-green-900", "bg-yellow-100","p-4","rounded-lg","space-y-4")
        recipeContainer.classList.add("grid","grid-cols-3","grid-cols-3","justify-between","m-auto");
        
        deleteBtn.textContent = "X"
        deleteBtn.classList.add("p-2","w-8", "bg-red-600", "text-white", "rounded-full")
        deleteBtn.addEventListener("click", async ()=> {
            await deleteRecipe(recipe._id);
        });

        newRecipeContainer.append(newRecipeImg, newRecipeTitle, newRecipeCategory, newRecipeDesc, newRecipeBtn, deleteBtn)
        recipeContainer.append(newRecipeContainer);
    })
}

buildApp();
