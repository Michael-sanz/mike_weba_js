// //
// // var idParent = document.getElementById("test");
// //
// // var modal = document.createElement("moadal");
// //
// // idParent.appendChild(modal);
// //
// //
//
// //
// //
// //
// // console.log(btn1.id);
// // btn1.innerHTML = btn1.id;
//
// // var modal = document.createElement("modal");
// //
// // console.log(buttonNumeroSuivi).id[0];
// // // buttonNumeroSuivi[0].innerHTML = "balblabl";
//
// // lien documentation = https://medium.com/@dren4510/building-a-modal-overly-using-pure-javascript-211ba416e028
//
// var buttonNumeroSuivi = document.querySelectorAll('.btnNumeroSuivi');
// var btn1 =document.getElementById(buttonNumeroSuivi[0].id);
// const body = document.querySelector('body');
// const overlayDiv = document.createElement('div');
// let displayBool = false;
//
// overlayDiv.style.position = 'fixed';
// overlayDiv.style.width = '100%';
// overlayDiv.style.height = '100%';
// overlayDiv.style.top = '0';
// overlayDiv.style.left = '0';
// overlayDiv.style.right = '0';
// overlayDiv.style.bottom = '0';
// overlayDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
// overlayDiv.style.zIndex = '2';
// overlayDiv.style.textAlign = '-webkit-center';
// overlayDiv.style.display = "none";
// body.appendChild(overlayDiv);
//
// function styleOverlay() {
//   const contentContainer = document.querySelector('#container');
//   contentContainer.style.textAlign = 'center';
//   contentContainer.style.marginTop = '27vh';
//   contentContainer.style.backgroundColor = 'white';
//   contentContainer.style.width = '53%';
//   contentContainer.style.height = '17vh';
// }
// function displayOverlay(idBtn) {
//
//     console.log(idBtn)
//     overlayDiv.innerHTML = `
//       <div id="container">
//         <h1>Entrer le numéro de suivi</h1>
//         <div class="form-group">
//             <form method="post" action="numeroSuivi">
//                 <div class="col-12">
//                     <input id="InputNumeroSuivi" type="text"/>
//                 </div>
//                 <br>
//                 <input type="submit" class="btn btn-primary" id="btnNum" value="Modifier">
//                 <a href="#"><button class="btn btn-danger" id="close-btn">Annuler</button></a><br>
//             </form>
//         </div>
//         <p id="testpara"></p>
//       </div>
//     `
//
//     console.log(document.getElementById("InputNumeroSuivi"));
//     if(displayBool) {
//     styleOverlay();
//     document.getElementById("testpara").innerHTML = idBtn;
//
//     overlayDiv.style.display = 'block';
//
//   } else {
//       overlayDiv.style.display = 'none';
//     }
// }
//
//
//
// body.addEventListener('click', event => {
//   if(event.target.className === 'btnNumeroSuivi') {
//        displayBool = !displayBool;
//        var idBtn = event.target.id;
//        displayOverlay(idBtn);
//   } else if(event.target.id === 'close-btn') {
//       displayBool = !displayBool;
//       displayOverlay();
//     }
//   //   else if(event.target.className !== 'btnNumeroSuivi') {
//   //      overlayDiv.style.display = 'none';
//   // }
// })
//

const body = document.querySelector('body');



function modifierForm(button) {
    var parentNod = document.getElementById("elementParent")
    var modal = document.createElement("modal");
    parentNod.appendChild(modal);
    var formulaireNumeroSuivi = document.getElementsByClassName("formNumeroSuivi");
    var idForm = button.id;
    for (let i = 0; i < formulaireNumeroSuivi.length; i++) {

        if (formulaireNumeroSuivi[i].id === idForm) {
            var formulaireVoulu = formulaireNumeroSuivi[i];
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
}

body.addEventListener('click', event => {
    if (event.target.className === 'btnNumeroSuivi') {
        modifierForm(event.target);
    }
    else if (event.target.id === 'croix'){
        document.location.reload()
    }
})
