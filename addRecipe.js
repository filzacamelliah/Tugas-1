// const query = location.search;
// const params = new URLSearchParams(query);
// const id = params.get("id");
API_ENDPOINT = "https://v1.appbackend.io/v1/rows/Kz0WREflv1BH";
// const title = document.getElementById("name");
// const ingredients = document.getElementById("ingredients");
// const steps = document.getElementById("steps");
// const description = document.getElementById("description");
// const category = document.getElementById("category");
// const form = document.getElementById("form");


form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formdata = new FormData(event.target);
    const cover =formdata.get('cover');
    const title = formdata.get('name');
    const description = formdata.get ("desc");
    const category =formdata.get("cat");
    const ingredients =formdata.get("ing");
    const steps = formdata.get("step")

    //console.log(cover, title ,description , category, ingredients, steps);
     await createData(cover, title ,description , category, ingredients, steps);

    location.reload();
    location.replace(`/index.html`)

})

async function createData(cover, title,description,category, ingredients, steps) {
    await fetch (API_ENDPOINT, {
        method: "POST",
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify([{cover, title, description, category, ingredients, steps}])
    })
    
}

async function getData () {
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    return data;
}