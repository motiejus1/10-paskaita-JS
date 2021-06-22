"use strict";

// 2. Susikurti objektų masyvą:
// * Masyve 100 objekto elementų.
// * Objekto vidiniai kintamieji: id, vardas.
// * Vardas reikšmė = vardas1,vardas2 ir t.t.  
// * Id reikšmė = 1, 2 ir t.t.

 

// Papildomai:
// Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas. Kas antras div - mėlynas.

let masyvas = [];

for (let i=0; i<100; i++) {
    let objektas = {
        id: "",
        vardas: "vardas"
    };
    masyvas[i]=i; // i => objekta
}

console.log(masyvas);

 