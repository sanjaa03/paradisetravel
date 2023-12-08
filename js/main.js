
var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // Toggle the "active" class on hamburger and nav_menu
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  // Remove the "active" class when a nav-link is clicked
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}));

//ABOUT

let aboutInfo = [
  "aboutus.jpg",
  "About us",
  `Paradise Travel Greece • Turkey • Spain • Egypt • Albania •
   Vacations • Wintering • Wellness & Spa • Faraway destinations • European cities • Airline tickets.
   Let's enjoy together!
   Paradise Travel, a travel agency that organizes trips to the world's largest metropolises,
  winter holidays, vacations, company trips, excursions. We offer the cheapest tickets in the region!
  Organize your trip with us.`,

];
let aboutToggleInfo = [
  "aboutus1.jpg",
  "More about us...",
  `Paradise Travel, a travel agency that organizes trips to the world's largest metropolises,
  winter holidays, vacations, company trips, excursions. We offer the cheapest tickets in the region!
  Organize your trip with us.`,
];

let aboutBlockOne = document.querySelector("#aboutBlockOne");
aboutBlockOne.innerHTML = `<div id="aboutImagesOne" class="col-xl-5  col-sm-6  py-sm-5 py-0 d-flex justify-content-center align-items-center ">
                     <img src="img/${aboutInfo[0]}" alt="about img" />
                      </div>
                      <div class="col-xl-5 col-sm-6 d-flex justify-content-center align-items-center">
                        <div class="w-75 my-5">
                          <h2 class="text-center h1">${aboutInfo[1]}</h2>
                          <p class="text-center fs-6"> ${aboutInfo[2]}</p>
                          <div class="centar col-xs-2">
                          <button type="button" id="showDetails" class="btn btn-link btn-xs">
                             Read more
                          </button>
                      </div>

                          </div>
                      </div>`;
                      let aboutBlockTwo = document.querySelector("#aboutBlockTwo");
                      aboutBlockTwo.innerHTML = `<div class="col-xl-5 offset-xl-1 col-sm-6 about-text-p-2 py-sm-5 py-0 d-flex justify-content-center align-items-center">
                                              <div class="w-75 my-5">
                                                <h2 class="text-center h1">${aboutToggleInfo[1]}</h2>
                                                <p class="text-muted text-center fs-6">${aboutToggleInfo[2]}</p>
                                              </div>
                                            </div>
                                            <div id="aboutImagesTwo" class="aboutslika col-xl-5 col-sm-6 offset-sm-0 d-flex justify-content-center align-items-center position-relative">
                                              <img src="img/${aboutToggleInfo[0]}" alt="about img" />
                                            
                                            </div>`;
                    
                                                        
$(document).ready(function() {
                                          
 $("#aboutBlockTwo").hide()
                                          
 $("#showDetails").click(function() {
 $("#aboutBlockTwo").toggle(600)                      
 let btn = $(this)
  if(btn.text() == "Read less") {
 btn.text("Read more")
 } else {
 btn.text("Read less")
 }         
  })
  })

//galerija

const galerijaKartice = new Array("Exotic", "Capitals", "Party", "Winter");
const galerijaDataFilter = new Array("exotic", "capital", "party", "winter");

let galerijaIspis = `<ul> <li class='list active' data-filter='all'>All</li>`;
for (let i = 0; i < galerijaKartice.length; i++) {
  galerijaIspis += `<li class='list' data-filter='${galerijaDataFilter[i]}'>${galerijaKartice[i]}</li>`;
}
galerijaIspis += `</ul>`;
const galerijaDataItem = new Array(
  "exotic",
  "capital",
  "party",
  "winter",
  "exotic",
  "capital",
  "party",
  "winter",
  "exotic",
  "capital",
  "winter",
  "exotic",
  "party",
  "winter",
  "capital"
);
const galerijaSrc = new Array(
  "exotic1.jpg",
  "capital1.jpg",
  "party1.jpg",
  "winter2.jpg",
  "exotic2.jpg",
  "capital2.jpg",
  "party2.jpg",
  "winter1.jpg",
  "exotic3.jpg",
  "capital3.jpg",
  "winter4.jpg",
  "exotic4.jpg",
  "party3.jpg",
  "winter3.jpg",
  "capital4.jpg"
);
const galerijaAlt = new Array(
  "exotic photo",
  "capital photo",
  "party photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "party photo",
  "winter photo",
  "exotic photo",
  "capital photo",
  "winter photo",
  "exotic photo",
  "party photo",
  "winter photo",
  "capital photo"
);

galerijaIspis += `<div class='product'>`;
for (let i = 0; i < galerijaSrc.length; i++) {
  galerijaIspis += `<div class='itemBox' data-item='${galerijaDataItem[i]}'>
                    <img src='img/${galerijaSrc[i]}' alt='${galerijaAlt[i]}'/>
                  </div>`;
}
galerijaIspis += `</div>`;
// console.log(galerijaIspis);
const divGalerija = document.querySelector(".section-filter");
divGalerija.innerHTML = galerijaIspis;

// Filter galerija dogadjaj - start
let liste = document.querySelectorAll(".list");
let itemBoxes = document.querySelectorAll(".itemBox");

for (let i = 0; i < liste.length; i++) {
  liste[i].addEventListener("click", function () {
    for (let j = 0; j < liste.length; j++) {
      liste[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBoxes.length; k++) {
      itemBoxes[k].classList.remove("active");
      itemBoxes[k].classList.add("hide");

      if (
        itemBoxes[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBoxes[k].classList.remove("hide");
        itemBoxes[k].classList.add("active");
      }
    }
  });
}

//contact
var brojGresaka = 0
window.onload = function(){
    let taster = document.querySelector("#btnPrijava");
    taster.addEventListener("click", obradaForme);
}

function obradaForme(){
    let objImePrezime,objEmail, objAdresa,objNapomena;

    objImePrezime = document.querySelector("#tbImePrezime");
    objEmail = document.querySelector("#tbEmail");
    objAdresa = document.querySelector("#tbAdresa");
    objNapomena = document.querySelector("#taNapomena");

    let reImePrezime,reEmail, reAdresa;
    reImePrezime = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;
    reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`~-]+@[a-zA-Z0-9-]+(.com)+$/;
    reAdresa = /^(([A-Z][a-z]{1,15}(\.)?)|([1-9][0-9]{0,2}(\.)?))[a-zA-Z0-9\s\/\-]+$/;

    proveraRegularnimIzrazima(reImePrezime, objImePrezime, "First and Last name must start with uppercase!(Example:Ana Johnson)");
    proveraRegularnimIzrazima(reEmail, objEmail, "Email must be in format: something@example.com");
    proveraRegularnimIzrazima(reAdresa, objAdresa, "Address must be in format:");


    if(objNapomena.value.length < 10){
        objNapomena.nextElementSibling.classList.remove("sakrij");
        objNapomena.nextElementSibling.innerHTML = "Note must be at least 10 characters long!";
        objNapomena.classList.add("crvena-bordura");
        brojGresaka++;
    }
    else{
        objNapomena.nextElementSibling.classList.add("sakrij");
        objNapomena.nextElementSibling.innerHTML = "";
        objNapomena.classList.remove("crvena-bordura");
    }

    if(brojGresaka == 0){
        let divIspis = document.querySelector("#ispis");
        divIspis.setAttribute("class", "alert alert-success mt-4");

        let formatZaIspis = `Your message is sent!`;

        divIspis.innerHTML = formatZaIspis;

        document.getElementById("forma-prijava").reset();
    }

}

function proveraRegularnimIzrazima(re, objekat, poruka){
    if(!re.test(objekat.value)){
        objekat.nextElementSibling.classList.remove("sakrij");
        objekat.nextElementSibling.innerHTML = poruka;
        objekat.classList.add("crvena-bordura");
        brojGresaka++;
    }
    else{
        objekat.nextElementSibling.classList.add("sakrij");
        objekat.nextElementSibling.innerHTML = "";
        objekat.classList.remove("crvena-bordura");
    }
}

var nesto=document.getElementById('forma');

nesto.innerHTML = `<div class="stil">
<h2 class="sum">Send us a message</h2>
    <div class="col-5 w100">
        <form name="forma-prijava" id="forma-prijava">
            <div class="mb-3">
                <label for="tbImePrezime" class="form-label">Full name:</label>
                <input type="text" id="tbImePrezime" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="mb-3">
                <label for="tbEmail" class="form-label">E-mail:</label>
                <input type="text" id="tbEmail" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="mb-3">
                <label for="tbAdresa" class="form-label">Address:</label>
                <input type="text" id="tbAdresa" class="form-control"/>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
       
            <div class="mb-3">
                <label for="taNapomena" class="form-label">Note:</label>
                <textarea id="taNapomena"  class="form-control"></textarea>
                <p class="alert alert-danger mt-3 sakrij"></p>
            </div>
            <div class="dugme1">
                <input type="button" value="Send" class="btn btn-primary" id="btnPrijava" />
            </div>
        </form>
    </div>
    <div id="ispis"></div>
</div>`
       
