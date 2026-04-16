export default class Kocka {
    #obj;
    #szuloElem;
    constructor(szuloElem, adat){
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        this.megjelenit();
        this.esemenyKezelo();
    }

    megjelenit(){
        let kod = `
                
           <tr>
                <td><img src="${this.#obj.src}" alt="${this.#obj.nev}"></td>
                <td>${this.#obj.nev}</td>
                <td>${this.#obj.leiras}</td>
                <td>${this.#obj.ar}</td>
                <td>
                    <button class="szerk">⚙️</button>
                    <button class="torles">❌</button>
                </td>
            </tr>
        `
        this.#szuloElem.innerHTML += kod;
    }

    esemenyKezelo(){

    }
}