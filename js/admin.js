import Tabla from "./Tabla.js";
import { termekek } from "./adat.js"

const szuloElem = document.querySelector(".tablazat");
new Tabla(termekek, szuloElem)

window.addEventListener("szerk" , (event)=>{
  console.log(event.detail)
})

window.addEventListener("torles", (event)=>{
    console.log(event.detail)
})