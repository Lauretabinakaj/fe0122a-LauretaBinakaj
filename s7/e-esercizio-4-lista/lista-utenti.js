//ajax
/*$.ajax({
    url: 'https://sofin.wp-admin.it/public/api/v1/user',
    method: 'POST',
    data: {
        name: "Mario",
        lastname: "Rossi",
        email: "test.shaSDADSADSAylee@example.org",
        email_verified_at: "2021-12-13T14:17:06.000000Z",
        password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
        role_id: 4,
    }
})*/


//fetch
/*fetch(
    'https://sofin.wp-admin.it/public/api/v1/user',
     {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marco",
            lastname: "Rossi",
            email: "tesdDSDSDSDssddst.shaylee@example.org",
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            role_id: 4
        }),
    }
)*/

//creare un html basandosi sulla lista utenti
//nome cognome mail

let utentiLocal = [
    {
        nome: "mateos",
        cognome: "Moro",
        email: "mateosmo",

    },
    {
        nome: "filippo",
        cognome: "d",
        email: "gg",

    },
    {
        nome: "ciro",
        cognome: "hh",
        email: "aa"
    }
]

utentiLocal.forEach(function (utente) {
    function creaHTML() {

        let utentiLocal = document.querySelector('tasks_list_html')
        elementiSalvati.forEach(function (li) {
            //creazione elemento
            var li = document.createElement('li');
            li.innerHTML = utentiLocal
            //scrivi l'aggiunta all'interno
            li.classList.add('item')
            //aggiunta funzioni
            li.addEventListener("click", function () {
                li.remove()
                rimuoviElementodaDb()
            })
            //aggiunta def elemento
            utentiLocal.prepend(li)
        })
    }
})

//html

const newDiv = document.createElement("div");




