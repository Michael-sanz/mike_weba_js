const body = document.querySelector('body');


function modifierForm(button) {
    var parentNod = document.getElementById("elementParent")
    var modal = document.createElement("modal");
    parentNod.appendChild(modal);
    var formulaireNumeroSuivi = document.getElementsByClassName("formNumeroSuivi"); // retourne une liste de formulaire avec un id correspondant à l'id de la commande
    console.log(formulaireNumeroSuivi);
    var idForm = button.id;
    for (let cpt = 0; cpt < formulaireNumeroSuivi.length; cpt++) {

        if (formulaireNumeroSuivi[cpt].id === idForm) {
            var formulaireVoulu = formulaireNumeroSuivi[cpt];
            break;
        }
    }
    formulaireVoulu.innerHTML =
        '<span id="croix">+</span>'+
        '<div>'+
        '<label>Entrez-le numéro de suivi</label>'+
        '<br>'+
        ' <input name="inputNumeroSuivi"  type="text"/>'+
        ' <br>'+
        '<br>'+
        '<input type="submit" class="btn btn-primary" id="btnNum" value="Modifier" placeholder="Entrez le numéro de suivi"/>'+
       ' </div>'+
        '</div>'

    modal.append(formulaireVoulu);
    return modal;
}


var gestionnaireClick = function (event){
    if (event.target.className === 'btnNumeroSuivi') {
            return modifierForm(event.target);
    }
    else if (event.target.id === 'croix'){
        // trouvé sur internet : https://developer.mozilla.org/fr/docs/Web/API/Location/reload
            return document.location.reload();
    }
}


body.addEventListener('click', gestionnaireClick);
// ici "addEventListener" est une fonction d'ordre supérieur
// ici "gestionnaireClick" est la fonction de rapelle ou callback