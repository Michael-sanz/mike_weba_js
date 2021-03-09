
// Utilise JQuery
$("#formAjax").submit(function (e) {
        // Empêche le rechargement de la page
        e.preventDefault();
        // serialize() encode mes données du formulaire sous forme d'une chaîne pour ça soumission
        var serializedData = $(this).serialize();
        // fait une requête ajax et de méthode POST
        $.ajax({
            type: 'POST',
            url: "../postListeMarqueAjax/",
            data: serializedData,
            //async : false, // Doit attendre la réponse avant de passer à la requete suivante
            success: function (response) {
                // 1. avec trigger('reset') je vide le formulaire
                $("#formAjax").trigger('reset');

                // Permet de change le statut de la marque à oui ou non au lieu de true or false
                if (response.statutMarque === true )
                {
                    response.statutMarque = 'Oui';
                }
                else
                {
                    response.statutMarque = 'Non';
                }
                // prepend() permet d'insérer le dernier contenu (tr) au début de mon tableau
                $("#tableau tbody").prepend(
                    `<tr>
                    <td>${response.nomMarque}</td>
                    <td>${response.statutMarque}</td>
                    <td><a href="/compte/supprimerMarque/${response.idMarque}"><button class="btn btn-danger">Supprimer</button></a></td>
                    <td><a href="/compte/modifierMarque/${response.idMarque}"><button class="btn btn-warning">Modifier</button></a></td>
                    </tr>`
                )
            },
        })
    })
