//scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse
//dovranno sostenere i singoli lavoratori aiutonomi al fine di verificare il reddito annuo netto di ognuno a
//seconda del proprio reddito annuo lordo; tasse, cod redittività
//il programma utilizza classi astratte e non astratte
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Tasse = /** @class */ (function () {
    function Tasse(redditoannuolordo) {
        this.redditoannuolordo = redditoannuolordo;
    }
    return Tasse;
}());
//2.
var redditoUno = /** @class */ (function (_super) {
    __extends(redditoUno, _super);
    function redditoUno() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tasseinps = 1;
        _this.tasseirpef = 2;
        return _this;
    }
    return redditoUno;
}(Tasse));
//3.
var redditoDue = /** @class */ (function (_super) {
    __extends(redditoDue, _super);
    function redditoDue() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tasseinps = 2;
        _this.tasseirpef = 3;
        return _this;
    }
    return redditoDue;
}(Tasse));
//4.
var redditoTre = /** @class */ (function (_super) {
    __extends(redditoTre, _super);
    function redditoTre() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tasseinps = 3;
        _this.tasseirpef = 4;
        return _this;
    }
    return redditoTre;
}(Tasse));
/*
utile = inps + irpef
annuo n = anno l - utili
*/
//5.
var socioCoperativa = /** @class */ (function (_super) {
    __extends(socioCoperativa, _super);
    function socioCoperativa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    socioCoperativa.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    socioCoperativa.prototype.getTasseInps = function () {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    socioCoperativa.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    socioCoperativa.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return socioCoperativa;
}(redditoUno));
/*
utile = inps + irpef
annuo n = anno l - utili
*/
//6.
var artigiano = /** @class */ (function (_super) {
    __extends(artigiano, _super);
    function artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    artigiano.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    artigiano.prototype.getTasseInps = function () {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    artigiano.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return artigiano;
}(redditoDue));
/*
utile = inps + irpef
annuo n = anno l - utili
*/
//7.
var rappresentanteCommercio = /** @class */ (function (_super) {
    __extends(rappresentanteCommercio, _super);
    function rappresentanteCommercio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rappresentanteCommercio.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    rappresentanteCommercio.prototype.getTasseInps = function () {
        return (this.redditoannuolordo / 100) * this.tasseinps;
    };
    rappresentanteCommercio.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo / 100) * this.tasseirpef;
    };
    rappresentanteCommercio.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return rappresentanteCommercio;
}(redditoTre));
//8.
var lavoratoreUno = new socioCoperativa(30000);
var lavoratoreDue = new artigiano(30000);
var lavoratoreTre = new rappresentanteCommercio(30000);
//9.
console.log(lavoratoreUno);
console.log(lavoratoreUno.getUtileTasse());
console.log(lavoratoreUno.getTasseInps());
console.log(lavoratoreUno.getTasseIrpef());
console.log(lavoratoreUno.getRedditoAnnuoNetto());
//10.
console.log(lavoratoreDue);
console.log(lavoratoreDue.getUtileTasse());
console.log(lavoratoreDue.getTasseInps());
console.log(lavoratoreDue.getTasseIrpef());
console.log(lavoratoreDue.getRedditoAnnuoNetto());
//11.
console.log(lavoratoreTre);
console.log(lavoratoreTre.getUtileTasse());
console.log(lavoratoreTre.getTasseInps());
console.log(lavoratoreTre.getTasseIrpef());
console.log(lavoratoreTre.getRedditoAnnuoNetto());
