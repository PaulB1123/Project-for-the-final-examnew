///////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", start);
let productType ="";

function start() {
    buildNav();
    // this should load the cups
    productType = "Cups";
    loadProductType("Cups");
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
        .catch((e) => {
            console.error("An error occured:", e.message);
        });

};

// clone the template that we have for the 6 bands

function handleData(cups) {
    const mainSecEl = document.querySelector("main section");
    mainSecEl.innerHTML = "";
    //here I grab each on of the elements from the array
    cups.forEach((cup) => {
        //here I console log it to make sure everything is okay
        console.log(cup);
        //here I take the template that I already have
        const template = document.querySelector("template").content;
        //here I clone it
        const clone = template.cloneNode(true);
        //here I add all the data from database to the existing tags from the template
        clone.querySelector("h4").textContent = cup.name;
        clone.querySelector("h5").textContent = cup.price;
        clone.querySelector("img").setAttribute("src", cup.imgurl);
        //   clone.querySelector("img").setAttribute("src", cup.imgurl).setAttribute("alt", cup.name);
        //   //here I add the id of the band to have it on the http so it can be selected as a single element

        clone.querySelector("a").href = `product_page.html?id=` + cup._id;
        // clone.querySelector(".button_for_discover a").href = `category_page.html?type=${cup.type}`;
        // clone.querySelector("a").href = `category_page.html?type=${cup.type}`;
    
        //   clone.querySelector("a").href = `category_page.html?list=${cup.type}`;
        //   here I place all my clones in the main
        //   here I show the clones on main
        mainSecEl.appendChild(clone);

        // bl bl
    });
    document.querySelector(".button_for_discover").href = `category_page.html?type=${productType}`;
    document.querySelector(".button_for_discover").textContent =  "See More " + productType;
}


function buildNav() {
    document.querySelectorAll(".discover a").forEach(aEl => {
        aEl.addEventListener("click", getNameOfProductType)
    });

};

function getNameOfProductType(event) {
    event.preventDefault();
     productType = event.target.parentElement.hash.replace("#", "")
    // console.log(event.target.parentElement.hash);
    console.log(productType);
    loadProductType(productType);
    // alert("hello")
};