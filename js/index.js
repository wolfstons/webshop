import { termekek } from "./adat.js";
import Kartyak from "./Kartyak.js";
import Kosar from "./Kosar.js";

const termekekElement = document.getElementsByClassName("kartya")[0];
const kartyak = new Kartyak(termekekElement, termekek);
const kosarElem = document.querySelector(".kosar");
const kosarKepElem = document.querySelector(".kosarcim");
export const KOSARLISTA = [];

window.addEventListener("kosarba", (event) => {
  KOSARLISTA.push(event.detail);
  if (KOSARLISTA.length > 0) {
    kosarKepElem.innerHTML = `<div class="card" style="width: 8rem;">
    <img src="/src/kosar.jpeg" class="card-img-top" alt="kosar">
    <div class="card-body text-center">
      <p class="card-text">Kosár (${KOSARLISTA.length})</p>
    </div>
  </div>`;
  } else {
    //kosarElem.innerHTML=""
  }
  kosarElem.innerHTML = "";
  KOSARLISTA.forEach((element) => {
    new Kosar(
      element.src,
      element.nev,
      element.ar,
      element.leiras,
      kosarElem,
      KOSARLISTA,
    );
  });

  console.log(KOSARLISTA);
});
