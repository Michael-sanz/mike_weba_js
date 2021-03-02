$("#formAjax").submit(function (e) {
        // preventing from page reload and default actions
        e.preventDefault();
        // serialize the data for sending the form data.
        var serializedData = $(this).serialize();
        // make POST ajax call
        $.ajax({
            type: 'POST',
            url: "../postListeMarqueAjax/",
            data: serializedData,
            // async : false,
            success: function (response) {
                // on successfull creating object
                // 1. clear the form.
                $("#formAjax").trigger('reset');
                // 2. focus to nickname input
                $("#id_MAR_NOM").focus();

                // display the newly friend to table.
                var instance = JSON.parse(response["instance"]);
                console.log(instance);
                var fields = instance[0]["fields"];
                var idMarque = instance[0]["pk"];
                console.log(fields);
                console.log(idMarque);
                console.log(fields["MAR_is_active"])
                // if (fields["MAR_is_active"] === true) {
                //     fields["MAR_is_active"].value === 'oui'
                // }
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