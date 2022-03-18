//scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse
//dovranno sostenere i singoli lavoratori aiutonomi al fine di verificare il reddito annuo netto di ognuno a
//seconda del proprio reddito annuo lordo; tasse, cod redittività
//il programma utilizza classi astratte e non astratte

//1. tasse
//2. creare un reddito 1 per una classe di lavoratori autonomi
//3. creare un reddito 2 per una classe di lavoratori autonomi
//4. creare un reddito 2 per una classe di lavoratori autonomi
//5. calcolo 1
//6. calcolo 2
//7. calcolo 3 
//8. agg
//9. console log 1
//10. console log 2
//11. console log 3

//1.
abstract class Tasse {
    abstract getUtileTasse(): number
    abstract getTasseInps(): number
    abstract getTasseIrpef(): number
    abstract getRedditoAnnuoNetto(): number
    redditoannuolordo: number
    constructor(redditoannuolordo: number) {
        this.redditoannuolordo = redditoannuolordo
    }
}

//2.
abstract class redditoUno extends Tasse {   //1
    tasseinps: number = 1
    tasseirpef: number = 2
}

//3.
abstract class redditoDue extends Tasse {   //2
    tasseinps: number = 2
    tasseirpef: number = 3
}

//4.
abstract class redditoTre extends Tasse {    //3
    tasseinps: number = 3
    tasseirpef: number = 4
}

/*
utile = inps + irpef
annuo n = anno l - utili
*/

//5.
class socioCoperativa extends redditoUno {
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef()
    }
    getTasseInps() {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    }
    getTasseIrpef() {
        return (this.redditoannuolordo / 100) * this.tasseirpef
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse()
    }
}

/*
utile = inps + irpef
annuo n = anno l - utili
*/

//6.
class artigiano extends redditoDue {
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef()
    }
    getTasseInps() {
        return (this.redditoannuolordo / 100) * this.tasseinps
    }
    getTasseIrpef() {
        return (this.redditoannuolordo / 100) * this.tasseirpef
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse()
    }
}

/*
utile = inps + irpef
annuo n = anno l - utili
*/

//7.
class rappresentanteCommercio extends redditoTre {
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef()
    }
    getTasseInps() {
        return (this.redditoannuolordo / 100) * this.tasseinps
    }
    getTasseIrpef() {
        return (this.redditoannuolordo / 100) * this.tasseirpef
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse()
    }
}

//8.
let lavoratoreUno = new socioCoperativa(30000)
let lavoratoreDue = new artigiano(30000)
let lavoratoreTre = new rappresentanteCommercio(30000)


//9.
console.log(lavoratoreUno)
console.log(lavoratoreUno.getUtileTasse())
console.log(lavoratoreUno.getTasseInps())
console.log(lavoratoreUno.getTasseIrpef())
console.log(lavoratoreUno.getRedditoAnnuoNetto())

//10.
console.log(lavoratoreDue)
console.log(lavoratoreDue.getUtileTasse())
console.log(lavoratoreDue.getTasseInps())
console.log(lavoratoreDue.getTasseIrpef())
console.log(lavoratoreDue.getRedditoAnnuoNetto())

//11.
console.log(lavoratoreTre)
console.log(lavoratoreTre.getUtileTasse())
console.log(lavoratoreTre.getTasseInps())
console.log(lavoratoreTre.getTasseIrpef())
console.log(lavoratoreTre.getRedditoAnnuoNetto())


 