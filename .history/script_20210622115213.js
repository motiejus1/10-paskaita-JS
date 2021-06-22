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
    cons objektas = {
        id: i+1,
        vardas: "vardas"+(i+1)
    };
    masyvas[i]=objektas; // i => objekta

    // let div = document.createElement("div");
    // div.innerHTML = objektas.id + " " + objektas.vardas;
    // document.querySelector(".container").appendChild(div);

    // console.log(Object.keys(objektas));
}

console.log(masyvas);

 