fetch("https://kea-alt-del.dk/t7/api/products/1525")
    .then((response) => response.json())
    .then((data) => showProduct(data));

    // INFO
    function showProduct(product) {
    console.log(product);
    document.querySelector(".purchaseBox p.brand").textContent = product.brandname;
    document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
    document.querySelector(".purchaseBox p.id").textContent = product.id;
    document.querySelector(".purchaseBox p.color").textContent = product.basecolour;
    document.querySelector(".purchaseBox p.category").textContent = product.category;
    document.querySelector(".purchaseBox p.season").textContent = product.season;
    document.querySelector(".purchaseBox p.usage").textContent = product.usagetype;
    document.querySelector(".purchaseBox p.price").textContent = product.price;
    document.querySelector(".purchaseBox p.discount").textContent = product.discount;
    
    // IMG
    document.querySelector("img").src = `http://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

//   "id": 1579,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Jackets",
//   "basecolour": "Grey",
//   "season": "Fall",
//   "productionyear": 2010,
//   "usagetype": "Sports",
//   "productdisplayname": "Grey Second Skin Jacket",
//   "parsed": 1,
//   "soldout": 0,
//   "relid": 1579,
//   "price": 1599,
//   "discount": 69,
//   "variantname": "Grey Second Skin",
//   "brandname": "Domyos",
//   "brandbio": null,
//   "brandimage": null,
//   "agegroup": "Adults-Men",
//   "colour1": "",
//   "colour2": "",
//   "fashiontype": "Fashion",
//   "materialcaredesc": null,
//   "sizefitdesc": null,
//   "description": "<p style=\"text-align: justify;\">1. Anatomical inserts adjust to the movements<br />2. Flat and rolled seams ensure a comfortable Fit<br />3. Elasticity - With spandex<br />4. Material - 95% cotton &amp;  5% spandex<br /><br />This is the ultimate piece of jacket for any feel-good sport activity. The feel of a second skin takes off that extra weight of a jacket. This is an ideal buy and suited for any kind of activity.</p>",
//   "styledesc": null
