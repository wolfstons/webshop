export default class Kartyak {
  #adatLista;
  #szuloElem;
  constructor(szuloElem, adatLista) {
    this.#szuloElem = szuloElem;
    this.#adatLista = adatLista;
    this.megjelenit();
  }
  megjelenit() {
    this.#adatLista.forEach((adat) => {
      const elem = document.createElement("div");
      elem.classList.add("kartya");
      elem.innerHTML = `
                <img src="${adat.src}" alt="${adat.nev}">
                <h2>${adat.nev}</h2>
                <p>${adat.leiras}</p>
                <span>${adat.ar} Ft</span>
            `;
      this.#szuloElem.appendChild(elem);
    });
  }
}
