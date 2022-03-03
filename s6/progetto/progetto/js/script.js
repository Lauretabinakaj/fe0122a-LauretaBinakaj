$(document).ready(function () {


    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];


    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * mieImg.length);
        let immagineRandom = mieImg.splice(random, 1)
        $('<div class="images" id="emoji' + i + '" ><img id="' + i + '" src="img/' + immagineRandom + '.png" width="130" height="130"></div>').appendTo('#memory');
    }
    let immaginiCliccate = []
    $('.images').not('.trovato').click(function () {

        let nClick = $('.numclicks span').text()
        nClick++
        $('.numclicks span').text(nClick)

        if (immaginiCliccate.length != 2) {

            let imgId = $(this).children().attr('id')
            let imgSrc = $(this).children().attr('src')

            $('#' + imgId).show()
            let oggettoImg = {
                id: imgId,
                src: imgSrc,
            }
            immaginiCliccate.push(oggettoImg)
            if (immaginiCliccate.length == 2) {
                if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                    immaginiCliccate = []
                } else {
                    setTimeout(function () {

                        $('#' + immaginiCliccate[0].id).hide()
                        $('#' + immaginiCliccate[1].id).hide()
                        immaginiCliccate = []
                    }, 300)
                }
            }
        }
    })

    $('#start').click(function () {
        $('#memory').show();
        let now = new Date()
        now.setHours(0)
        now.setMinutes(0)
        now.setSeconds(0)


    });
    $('#restart').click(function () {
        window.location.reload()
    })
});





