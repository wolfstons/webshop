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
    <div class="col-md-4 mb-3">
      <div class="card h-100 shadow">
        <img src="${this.#obj.src}" class="card-img-top" alt="${this.#obj.nev}">
        <div class="card-body">
          <h5 class="card-title">${this.#obj.nev}</h5>
          <p class="card-text">${this.#obj.leiras}</p>
          <span class="fw-bold">${this.#obj.ar} Ft</span>
        </div>
      </div>
    </div>
  `;
  this.#szuloElem.querySelector(".row").innerHTML += kod;
}

  esemenyKezelo() {
    this.#szuloElem.addEventListener("click", () => {
      const e = new CommandEvent("kosarba", { detail: this.index });
      window.dispatchEvent(e);
    });
  }
}
