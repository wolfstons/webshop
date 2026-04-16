import {termekek} from "./adat.js";
import Kartyak from "./Kartyak.js";

const termekekElement = document.getElementsByClassName("termek")[0];
const kartyak = new Kartyak(termekekElement, termekek);