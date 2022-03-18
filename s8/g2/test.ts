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

//1. 2. 3. 
class sonAccount {
    balanceInit: number = 0

    constructor(balanceInit: number) { this.balanceInit }

    //4.
    oneDeposit(sommaDeposit: number): number {

        return this.balanceInit += sommaDeposit

    }

    //5.
    oneWuthDraw(sommaPrelievo: number): number {
        return this.balanceInit -= sommaPrelievo
    }

    //6.
    twoDeposit(nuovaSomma: number): number {
        return this.balanceInit = + nuovaSomma
    }

    twoWuthDraw(sommaPrelievo: number): number {
        return this.balanceInit = - sommaPrelievo
    }

    //7.
    thirdDeposit(nuovaTerzaSomma: number): number {
        return this.balanceInit = + nuovaTerzaSomma
    }

    thirdWuthDraw(sommaPrelievo: number): number {
        return this.balanceInit = - sommaPrelievo
    }

    //8.
    addInterest(sommaInteresse: number): number {
        return this.balanceInit * sommaInteresse
    }

    //9.
    addInterestPerc(): number {
        return this.balanceInit * 0.1
    }
}

//10. 11. 12. 13.
let arra = new sonAccount(0)
arra.oneDeposit(50)
arra.oneWuthDraw(20)
arra.oneDeposit(90)

//14. 15. 16.
console.log(arra.balanceInit)
console.log(arra.addInterest(0.3))
console.log(arra.addInterestPerc(0.1))

//17.
class motherAccount extends sonAccount {
    constructor(balanceInit: number) {
        super(balanceInit)
    }
}
