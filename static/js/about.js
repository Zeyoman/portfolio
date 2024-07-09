
fetch("./static/js/data.json")
    .then(response => {
        // Vérifier si la requête a réussi
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Renvoie la réponse au format JSON
        return response.json();
    })
    .then(data => {
        /**
         * Random quote pick
         */
            data["quote"].forEach(function(datas) {
                dataJsonWord.push(datas);
            });
            longueurData = dataJsonWord.length
            randomIndex = Math.floor(Math.random() * (longueurData));
            document.getElementById("bigDescription").innerHTML = dataJsonWord[randomIndex]
        document.addEventListener('DOMContentLoaded', function () {
            if(window.screen.availWidth >= 991){
                $('#construction').attr('style','display:none')
                $('main').attr('style','display:block')
                $('header').attr('style','display:block')
            } else {
                $('#construction').attr('style','display:flex')
                $('main').attr('style','display:none')
                $('header').attr('style','display:none')
            }

            window.addEventListener('resize',function(){
                if(window.screen.availWidth >= 991){
                    $('#construction').attr('style','display:none')
                    $('main').attr('style','display:block')
                    $('header').attr('style','display:block')        
                }else{
                    $('#construction').attr('style','display:flex')
                    $('main').attr('style','display:none')
                    $('header').attr('style','display:none')
                }
            })
        })
    })
    .catch(error => {
        // Gérer les erreurs
        console.error('There was a problem with the fetch operation:', error);
    });