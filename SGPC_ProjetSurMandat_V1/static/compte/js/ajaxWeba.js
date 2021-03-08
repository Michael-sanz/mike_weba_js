
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

                // parse recois en paramètre un string écrit en format JSON et renvoit un objet JavaScript
                var instance = JSON.parse(response["instance"]);
                console.log(instance); // Pour démontrer que les données échanger sont non trivial
                var fields = instance[0]["fields"];
                var statusMarque = fields["MAR_is_active"];
                var idMarque = instance[0]["pk"];

                // Permet de change le statut de la marque à oui ou non au lieu de true or false
                if (statusMarque === true )
                {
                    instance[0]["fields"].MAR_is_active = 'Oui';
                }
                else
                {
                    instance[0]["fields"].MAR_is_active = 'Non';
                }
                // prepend() permet d'insérer le dernier contenu (tr) au début de mon tableau
                $("#tableau tbody").prepend(
                    `<tr>
                    <td>${fields["MAR_NOM"]||""}</td>
                    <td>${fields["MAR_is_active"] || ""}</td>
                    <td><a href="/compte/supprimerMarque/${idMarque}"><button class="btn btn-danger">Supprimer</button></a></td>
                    <td><a href="/compte/modifierMarque/${idMarque}"><button class="btn btn-warning">Modifier</button></a></td>
                    </tr>`
                )
            },
        })
    })
