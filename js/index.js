import {termekek} from "./adat.js";
import Kartyak from "./Kartyak.js";


const termekekElement = document.getElementsByClassName("kartya")[0];
const kartyak = new Kartyak(termekekElement, termekek);
const kosarElem=document.getElementById
export const KOSARLISTA=[]


window.addEventListener("kosarba" , (event)=>{
    KOSARLISTA.push(event.detail.nev)
    console.log(KOSARLISTA)
})