Készítette: Stolár-Németh Villő és Páczi Balázs

```mermaid
classDiagram
    class Kartyak {
        -adatLista : array
        -szuloElem : html DOM
        +constructor(szuloElem, adatLista)
        +megjelenit() void
    }
    class Kartya {
        -obj : object
        -szuloElem
        +megjelenit() void
        +constructor(obj, szuloElem) void
        +esemenyKezelo() event
    }
    Kartyak --> Kartya

    class Tabla {
        -adatLista : array
        -szuloElem : html DOM
        +constructor(szuloElem, adatLista)
        +megjelenit() void
        +ad() event
    }
    class Kocka {
        -obj : object
        -szuloElem
        +megjelenit() void
        +constructor(obj, szuloElem) void
        +esemenyKezelo(torles) event
    }
    Tabla --> Kocka
