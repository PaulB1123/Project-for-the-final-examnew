const urlParams = new URLSearchParams(window.location.search);
const _id = urlParams.get("id");
console.log(_id);

const url = `https://tasjap-117c.restdb.io/rest/ceramics?q={"_id" : {"$in" : ["${_id}"]}}`;
console.log(url);

const options = {
  headers: {
    "x-apikey": "61b25dc172a03f5dae822248",
  },
};

//fetch the data
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    showInfo(data);
  })
  .catch((e) => {
    // console.error("An error occured:", e.message);
  });

// populate page
function showInfo(items) {
  console.log(items);

  items.forEach((item) => {
    console.log(item);
    // const template = document.querySelector(".the_entire_prodcut_page").content;
    document.querySelector(".productNameAndInfo .productNameAndPrice h1").textContent = item.name;
    document.querySelector(".productNameAndInfo .productNameAndPrice h2").textContent = item.price;
    document.querySelector(".img_product_page").setAttribute("src", item.imgurl);
    // document.querySelector("figcaption").innerHTML =
    //   art.title + ", " + art.year;
  });
}