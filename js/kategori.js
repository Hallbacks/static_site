const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")

    .then((response)=>response.json())
    .then((data)=>showCategories(data));
    
    function showCategories(cats){
        cats.forEach(showCategory)
    }

    function showCategory(cat){

    const template = document.querySelector("template").content
    const clone = template.cloneNode(true);

clone.querySelector("a").textContent = cat.category;
clone.querySelector("a").href = `produktliste.html?category=${cat.category}`
document.querySelector(".categorylist ol").appendChild(clone);
}