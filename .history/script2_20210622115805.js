"use strict";


const objektas= {
    sk1: 2,
    sk2: 4,
    pagalbinis: 0,


    metodas1: function() {
        return this.sk1 + this.sk2
    },

    metodas2: function() {

        let suma = this.metodas1()
        return 0
    },

    rezultatas: function() {

    }




};
