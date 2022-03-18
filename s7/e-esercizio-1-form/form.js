let btnInvio = document.getElementById('bottone')

btnInvio.addEventListener('click', function (e) {

    //con questo invii il form
    e.preventDefault()


    var arrayy = document.querySelectorAll('.pippo')
    var psw2Val = document.querySelector('#psw2').value
    var psw1Val = document.querySelector('#psw1').value
    var pippo1 = document.getElementById('user1').value
    var pippo2 = document.getElementById('email').value

    var controllo = true;


    arrayy.forEach(elemento => {
        let valore = elemento.value;

        if (valore == "") {
            elemento.style.border = '1px solid red'
            controllo = false
        }
        else {
            elemento.style.border = ''
        };
    });

    if (psw1Val != psw2Val) {
        document.getElementById('span').innerText = 'La password non corrisponde'
        controllo = false;
    }
    else {
        document.getElementById('span').innerText = ''
    }

    //dopo il controllo manda tutto nel localstorage
    if (controllo) {
        var utenti = new Utente(pippo1, pippo2, psw1Val, psw2Val)

        let utenteMemorizzato = memorizzaDati(utenti)

        if (utenteMemorizzato) {
            setTimeout(function () {
                window.location = 'formLogin.html'
            }, 600)
        }
    }
})


//classe fuori funzione
//vai a vedere come si fa
class Utente {
    constructor(username, email, password) {
        this.id = this.getId()
        this.username = username
        this.email = email
        this.password = password

    }
    getId() {
        let newId = localStorage.getItem('id') == null ? 1 : Number(localStorage.getItem('id')) + 1
        localStorage.setItem('id', newId)
        return newId
    }
}


function memorizzaDati(nuovoUtente) {


    let elementiSalvati = localStorage.getItem('utenti');
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

    var target = dataBase.find(oldUser => oldUser.email == nuovoUtente.email || oldUser.username == nuovoUtente.username);

    //cercare se non trova nulla
    if (target == undefined) {
        dataBase.push(nuovoUtente)
        localStorage.setItem('utenti', JSON.stringify(dataBase))
        return true

        //rimandare al login

    } else {
        Swal.fire('Non disponibile')
        return false
    }
};


