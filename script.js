"use strict";

const button = document.getElementById('add-img');
const divImages = document.querySelector(".images");

async function fetchDogApi() {
    const fetchapi = await fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            divImages.innerHTML += `<img width=200 height=200 src=${data.message} alt="random-dog"/>`
        });
    console.clear()
}

button.addEventListener("click", ()=> {
    fetchDogApi();
})
