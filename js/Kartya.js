export default class Kartya {
  #obj;
  #szuloElem;
  constructor(szuloElem, adat) {
    this.#szuloElem = szuloElem;
    this.#obj = adat;
    this.megjelenit();
  }

  megjelenit() {
    let kod = `
        <div class="kartya">
            <img src="${this.#obj.src}" alt="${this.#obj.nev}">
            <h2>${this.#obj.nev}</h2>
            <p>${this.#obj.leiras}</p>
            <span>${this.#obj.ar} Ft</span>
        </div>
        `;
    this.#szuloElem.innerHTML += kod;
  }

  esemenyKezelo() {
    this.#szuloElem.addEventListener("click", () => {
      const e = new CommandEvent("kosarba", { detail: this.index });
      window.dispatchEvent(e);
    });
  }
}
