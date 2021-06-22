"use script";

// 3. Susikurti objektą "Keturkampis".
// Objektas turi priimti du kintamuosius: a ir b kraštines.
// Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
// Informaciją išvesti į <p> žymę.

// Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas.     

let kvadratas = {
    a: 1000,
    b: 2000,

    plotasPerimetras: function() {

        let plotas;
        let perimetras;

        plotas = this.a * this.b;
        perimetras= 2 * this.a + 2 * this.b;
        
        return [plotas, perimetras] 
    },

    istrizaine: function() {
        let ilgis;
        ilgis = Math.sqrt(this.a * this.a + this.b * this.b );
        return ilgis;
    },

    nubrezk: function() {
        let elementas = document.querySelector(".keturkampis");
        elementas.style.width = this.a + "px";
        elementas.style.height = this.b + "px";
    },

    isvesk: function() {

    }

};

console.log('-------------------------------------------------');
console.log(kvadratas.plotasPerimetras());
console.log(kvadratas.istrizaine());

kvadratas.nubrezk();


