/**
 * 
 * variable part
 * 
 */
// const dataJsonWord = []
// const dataJsonProject = []

/**
* function part
*/

function isBackgroundTooLight(hexColor) {
// Convertir la couleur hexadécimale en ses composantes RGB
var r = parseInt(hexColor.substr(1, 2), 16);
var g = parseInt(hexColor.substr(3, 2), 16);
var b = parseInt(hexColor.substr(5, 2), 16);

// Calculer la luminance relative selon la formule standard
var luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

// Comparer la luminance avec un seuil prédéfini (0.5 est souvent utilisé)
return luminance > 0.5; // Si la luminance est supérieure à 0.5, le fond est considéré comme trop clair
}

function setWidthProject(array){
longueurArr = array.length
}

/**
* 
* Json part
* 
*/
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
            // data["quote"].forEach(function(datas) {
            //     dataJsonWord.push(datas);
            // });
            // longueurData = dataJsonWord.length
            // randomIndex = Math.floor(Math.random() * (longueurData));
            // document.getElementById("bigDescription").innerHTML = dataJsonWord[randomIndex]
        
        /**
         * Put all project in section
         */
            // i = 0
            // data["project"].forEach(function(datas) {
            //     i++

            //     // Créer un nouvel élément div
            //     var projectContainer = document.createElement('div');

            //     // Ajouter la classe "projectContainer" à l'élément div
            //     projectContainer.classList.add('projectContainer');
            //     projectContainer.style.backgroundColor = datas["color"]
            //     if (isBackgroundTooLight(datas["color"])) {
            //         projectContainer.style.color = "black"
            //     } else {
            //         projectContainer.style.color = "white"
            //     }

            //     // projectContainer.style.height = projectContainer.offsetWidth

            //     // Créer un élément div enfant avec la classe "projectName"
            //     var projectNameDiv = document.createElement('div');
            //     projectNameDiv.classList.add('projectName');

            //     // Créer un élément h3 avec la classe "projectNameH"
            //     var projectNameHeading = document.createElement('h3');
            //     projectNameHeading.classList.add('projectNameH');

            //     // Texte à ajouter à l'élément h3
            //     // var projectNameText = document.createTextNode(datas["titre"]);
            //     var projectNameText = document.createTextNode(datas["titre"]);

            //     // Ajouter le texte à l'élément h3
            //     projectNameHeading.appendChild(projectNameText);

            //     // Ajouter l'élément h3 à l'élément div "projectName"
            //     projectNameDiv.appendChild(projectNameHeading);

            //     // Créer un élément div enfant avec la classe "projectInfo"
            //     var projectInfoDiv = document.createElement('div');
            //     projectInfoDiv.classList.add('projectInfo');

            //     // Créer un élément div avec la classe "projectDescription"
            //     var projectDescriptionDiv = document.createElement('div');
            //     projectDescriptionDiv.classList.add('projectDescription');
            //     projectDescriptionDiv.innerText = datas["description"]

            //     // Créer un élément div avec la classe "projectDate"
            //     var projectDateDiv = document.createElement('div');
            //     projectDateDiv.classList.add('projectDate');
            //     projectDateDiv.innerText = datas["dateCreation"]

            //     // Ajouter les éléments div "projectDescription" et "projectDate" à l'élément div "projectInfo"
            //     projectInfoDiv.appendChild(projectDescriptionDiv);
            //     projectInfoDiv.appendChild(projectDateDiv);

            //     // Ajouter les éléments "projectName" et "projectInfo" à l'élément div "projectContainer"
            //     projectContainer.appendChild(projectNameDiv);
            //     projectContainer.appendChild(projectInfoDiv);

            //     // Ajouter le nouvel élément div à la fin du corps de la page
            //     document.getElementById('projectList').appendChild(projectContainer);

            //     // Set l'url du projet sur chacun des containers
            //     projectContainer.addEventListener('click',function(){
            //         window.location.href = datas["url"]
            //     })

            //     var widthDiv = projectContainer.offsetWidth

            //     if(i != 3){
            //         $(projectContainer).css('height',widthDiv+"px")
            //     } else{
            //         i = 0
            //         widthDiv += 4
            //         $(projectContainer).css('height',widthDiv+"px")
            //     }

            //     // Set l'url du dernier projet dans la nav dernier projet
            //     if(datas["last"]){
            //         $('#last-one').children().attr('href',datas["url"])
            //     }
            // });
            // // set l'url random d'un projet dans la nav random projet
            // console.log(data["project"].length)
            // var randomProject = Math.floor(Math.random() * (data["project"].length))
            // var randomProjectUrl = data["project"][randomProject]["url"]
            // $('#random-project').children().attr('href',randomProjectUrl)
    })
    .catch(error => {
        // Gérer les erreurs
        console.error('There was a problem with the fetch operation:', error);
    });

document.addEventListener('DOMContentLoaded', function () {
/**
 * 
 * Insert basic value
 * 
 */

/**
 * 
 * Function part
 * 
 */

/**
 * 
 * Add event listener part
 * 
 */

    // document.getElementById('searchBar').addEventListener('input', function() {
    //     // Mettre notre recherche en lowercase pour avoir de bon résultats
    //     var searchTerm = this.value.toLowerCase().trim();
    
    //     // Permet de chopper les project dans projectList
    //     var projects = document.querySelectorAll('#projectList .projectContainer');
    
    //     // Boucle à travers tous les projets
    //     projects.forEach(function(project) {
    //         // Récupère le h4 de chaque projet
    //         var title = project.querySelector('.projectNameH').innerText.toLowerCase().trim();
    
    //         // Vérifie la compatibilité entre recherche et h4 des projets
    //         if (title.includes(searchTerm)) {
    //             project.style.display = 'flex';
    //             console.log("présent")
    //             $('#noSearchFound').attr('style','display:none')
    //         } else {
    //             project.style.display = 'none';
    //             console.log("pas la")
    //             $('#noSearchFound').attr('style','display:flex')
    //         }
    //     });
    // });    
    
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
