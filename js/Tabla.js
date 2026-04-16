
export default class Tabla{
    #adatLista = [];
    #szuloElem;
    constructor(adatLista, szuloElem){
        this.#szuloElem = szuloElem;
        this.#adatLista = adatLista;
        this.megjelenit();
    }

    megjelenit(){
        this.#adatLista.forEach((index, adat) =>{
            new Kocka(index, adat, szuloElem);
        })
    }

    ad(){

    }
}