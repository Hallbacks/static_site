fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products){
    // Looper og kalder showProduct
    products.forEach(showProduct);
}
 
function showProduct(product){
    console.log(product);
    //Fange template i html
    const template = document.querySelector("#smallProductTemplate").content;
    //Lave en kopi
    const copy = template.cloneNode(true);
    //Ændre indhold
    copy.querySelector("h3").textContent=product.productdisplayname;
    //Appende til DOM
    document.querySelector("#shoppingGrid").appendChild(copy);
}

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
*/