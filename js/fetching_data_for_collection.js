window.addEventListener("DOMContentLoaded", start);
// let productType ="";

function start() {
    
    // this should load the cups
    productType = "Collab ";
    loadProductType("Collab ");
};

function loadProductType(prodType) {
    //here starts the functions for fetching the data
    // const url = "https://tasjap-117c.restdb.io/rest/ceramics?max=56";
    const url = `https://tasjap-117c.restdb.io/rest/ceramics?q={"type" : {"$in" : ["${prodType}"]}}&max=3`;
    console.log(url);
    const options = {
        headers: {
            "x-apikey": "61b25dc172a03f5dae822248",
        },
    };

    //fetch de data
    fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            handleData(data);
        })
        // .catch((e) => {
        //     console.error("An error occured:", e.message);
        // });

};

// clone the template that we have for the 6 bands

function handleData(cups) {
    // const mainEl = document.querySelector("main section");
    // mainSecEl.innerHTML = "";
    //here I grab each on of the elements from the array
    cups.forEach((cup) => {
        //here I console log it to make sure everything is okay
        console.log(cup);
        const mainEl = document.querySelector("main");
        const template = document.querySelector("template").content;
        const clone = template.cloneNode(true);
        document.querySelector(".img_for_container").setAttribute("src", cup.imgurl);
        document.querySelector(".card_description").textContent = cup.description;
        // document.querySelector("#img_for_collection_2").setAttribute("src", cup.imgurl2);
        // document.querySelector("#img_for_collection_3").setAttribute("src", cup.imgurl3);
        mainEl.appendChild(clone);
        // document.querySelector(".productNameAndInfo .productNameAndPrice h2").textContent = item.price;
        // document.querySelector(".img_product_page").setAttribute("src", item.imgurl);
    });
   
}

