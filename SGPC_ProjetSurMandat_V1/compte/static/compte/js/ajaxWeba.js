
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
            // async : false, // Doit attendre la réponse avant de passer à la requete suivante
            success: function (response) {
                // 1. avec trigger('reset') je vide le formulaire
                $("#formAjax").trigger('reset');

                // parse recois en paramètre un string écrit en format JSON et renvoit un objet JavaScript
                var instance = JSON.parse(response["instance"]);
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

// Source :
//
// https://api.jquery.com/prepend/
// https://realpython.com/django-and-ajax-form-submissions/
// https://www.pluralsight.com/guides/work-with-ajax-django
// https://simpleisbetterthancomplex.com/tutorial/2016/08/29/how-to-work-with-ajax-request-with-django.html
// parse() : https://www.w3schools.com/jsref/jsref_parse_json.asp#:~:text=The%20JSON.,the%20result%20with%20a%20function.
// reset() : https://api.jquery.com/reset-selector/
// async : https://www.google.com/search?rlz=1C1VDKB_frFR931FR931&ei=xxtBYLPGCcrbgwf9_K6YDA&q=asynchrone+synchrone+informatique&oq=asynchrone+synch&gs_lcp=Cgdnd3Mtd2l6EAMYATICCAAyAggAMgIIADIGCAAQFhAeMggIABAWEAoQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BwgAELADEEM6BwgAEEcQsANQj09YiVNgwWFoAXACeACAAVaIAfcBkgEBM5gBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz
// Concept globaux d ajx : https://www.youtube.com/watch?v=RDo3hBL1rfA
// https://fr.wikipedia.org/wiki/Ajax_(informatique)#:~:text=Il%20est%20utilis%C3%A9%20%C3%A0%20partir,navigateur%20et%20un%20serveur%20Web.
// prepend() : https://api.jquery.com/prepend/