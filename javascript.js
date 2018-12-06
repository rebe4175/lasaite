document.addEventListener("DOMContentLoaded", getJSON);

let produkter;
let postTemplate = document.querySelector("[data-template]");
let postContainer = document.querySelector(".container");
let dest = document.querySelector(".data-container");


async function getJSON() {

    console.log("json");

    let myJson = await fetch("https://www.rebeccamortensen.dk/kea/lasaite/wp-json/wp/v2/products");
    produkter = await myJson.json();

    visProducts();
}

function visProducts() {

    console.log(produkter);

    // postContainer.innerHTML = "";

    produkter.forEach(produkt => {


        let klon = postTemplate.cloneNode(true).content;

        klon.querySelector("[data-price]").textContent = produkt.acf.price;
        klon.querySelector("[data-title]").textContent = produkt.acf.name;
        klon.querySelector("[data-type]").textContent = produkt.acf.type;
        klon.querySelector("[data-size]").textContent = produkt.acf.size;
        klon.querySelector("[data-colour]").textContent = produkt.acf.colour;
        klon.querySelector("[data-img]").setAttribute("src", produkt.acf.image);
        klon.querySelector("[data-description]").textContent = produkt.acf.description;

        postContainer.appendChild(klon);

    });

}


function myDropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
