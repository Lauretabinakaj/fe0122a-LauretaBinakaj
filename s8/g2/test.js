//1. classe principale, devo aggiungere constructor e metodi
//2. bilancio saldo del conto
//3. costruttore
//4. aggiungere fondi al conto
//5. togliere fondi al conto
//6. secondo conto, metodo che verrà esteso
//7. idem
//8. scegliere l'interesse
//9. interesse fisso al 10%
//10. creare nuovo conto che parte da 0
//11. aggiungiamo 50 al conto creato
//12. togliamo 20 al conto creato   
//13. aggiungo altri 90
//14. mi mostra nella console il saldo attuale
//15. interessi al 30%
//16. interesse fisso al 10%
//17. extend la prima classe
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
//1. 2. 3. 
var sonAccount = /** @class */ (function () {
    function sonAccount(balanceInit) {
        this.balanceInit = 0;
        this.balanceInit;
    }
    //4.
    sonAccount.prototype.oneDeposit = function (sommaDeposit) {
        return this.balanceInit += sommaDeposit;
    };
    //5.
    sonAccount.prototype.oneWuthDraw = function (sommaPrelievo) {
        return this.balanceInit -= sommaPrelievo;
    };
    //6.
    sonAccount.prototype.twoDeposit = function (nuovaSomma) {
        return this.balanceInit = +nuovaSomma;
    };
    sonAccount.prototype.twoWuthDraw = function (sommaPrelievo) {
        return this.balanceInit = -sommaPrelievo;
    };
    //7.
    sonAccount.prototype.thirdDeposit = function (nuovaTerzaSomma) {
        return this.balanceInit = +nuovaTerzaSomma;
    };
    sonAccount.prototype.thirdWuthDraw = function (sommaPrelievo) {
        return this.balanceInit = -sommaPrelievo;
    };
    //8.
    sonAccount.prototype.addInterest = function (sommaInteresse) {
        return this.balanceInit * sommaInteresse;
    };
    //9.
    sonAccount.prototype.addInterestPerc = function () {
        return this.balanceInit * 0.1;
    };
    return sonAccount;
}());
//10. 11. 12. 13.
var arra = new sonAccount(0);
arra.oneDeposit(50);
arra.oneWuthDraw(20);
arra.oneDeposit(90);
//14. 15. 16.
console.log(arra.balanceInit);
console.log(arra.addInterest(0.3));
console.log(arra.addInterestPerc());
//17.
var motherAccount = /** @class */ (function (_super) {
    __extends(motherAccount, _super);
    function motherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    return motherAccount;
}(sonAccount));
