"use strict";


const objektas= {
    sk1: 2,
    sk2: 4,
    pagalbinis: 0,


    metodas1: function() {
        this.pagalbinis = this.sk1 + this.sk2;
        return this.sk1 + this.sk2
    },

    metodas2: function() {

        let suma = this.metodas1();
        return suma;
    },

    rezultatas: function() {
        console.log(this.pagalbinis)
    }
};

console.log(objektas.metodas2());
