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
objektas.rezultatas();
// metodas1, suma 6
// pagalbinis = 6 
// console.log 6


// a < b + c
// b < a + c
// c < a + b

const trikampis= {
    a: 0,
    b: 0,
    c: 0,

    paleidimas: function(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    },

    tikrink: function() {
        if( this.a < this.b + c  )


        return 0
    },

    rezultatas: function() {
        console.log(this.pagalbinis)
    }
};

trikampis.paleidimas(3,4,5);