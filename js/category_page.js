// window.addEventListener("load", start);

const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");
console.log(type);

const url = `https://tasjap-117c.restdb.io/rest/ceramics?q={"type" : {"$in" : ["${type}"]}}`;
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

// clone the template that we have for every period
function handleData(items) {
    const mainEl = document.querySelector("main");
    
    mainEl.innerHTML="";
    //here I grab each on of the elements from the array
    items.forEach((item) => {
      //here I console log it to make sure everything is okay
      console.log(item);
      //here I take the template that I already have
      const template = document.querySelector("template").content;
      //here I clone it
      const copy = template.cloneNode(true);
      //here I add all the data from database to the existing tags from the template
  
      copy.querySelector("h4").textContent = item.name;
      copy.querySelector("h5").textContent = item.price;
      copy.querySelector("img").setAttribute("src", item.imgurl);
      document.querySelector(".main_hero_cups_poster img").setAttribute("src", item.imgurl);
      document.querySelector(".main_hero_cups_poster h1").textContent = item.type;
      document.querySelector(".main_hero_cups_poster p").textContent = item.description;
      //here I add the id of the band to have it on the http so it can be selected as a single element
      
    //   clone.querySelector("a").href = `category_page.html?type=${cup.type}`
    copy.querySelector("a").setAttribute("href", "product_page.html?id=" + item._id);
      //here I place all my clones in the main
      //here I show the clones on main
      mainEl.appendChild(copy);
    });
  }

// function start() {
//     console.log("start");
//     document.querySelector(".filter").addEventListener("click", openFilters);
//   }
