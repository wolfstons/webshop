export default class Kocka {
    #obj;
    #index;
    #szuloElem;
    constructor(index, obj, szuloElem){
        this.#index = index;
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
                <td>${this.#obj.ar} Ft</td>
                <td>
                    <button class="szerk">⚙️</button>
                    <button class="torles">❌</button>
                </td>
            </tr>
        `
        this.#szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    esemenyKezelo(){
        this.gombElem
    }
}