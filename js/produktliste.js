fetch("https://kea-alt-del.dk/t7/api/products?limit=12")
    .then((res) => res.json())
    .then(showProducts);

function showProducts(products){
    // Looper og kalder showProduct
    products.forEach(showProduct);
}
 
function showProduct(product){
    console.log(product);
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);

    //Ændre indhold
    copy.querySelector("h2").textContent=product.brandname;  
    copy.querySelector("h3").textContent = product.productdisplayname;    
    copy.querySelector("p.price").textContent = `${product.price},00 kr.`;
    copy.querySelector("p.soldOut").textContent = product.soldout === 0 ? "På lager" : "Udsolgt";

    copy.querySelector("img").src = `http://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

    if (product.discount !== null) {
        copy.querySelector("p.discount").textContent = `– ${product.discount}%`;
    } else {
        copy.querySelector(".discount").style.display = "none";
    }

    copy.querySelector("p.readMore").setAttribute("href", `produkt.html?id=${product.id}`);

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