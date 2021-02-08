//
// var idParent = document.getElementById("test");
//
// var modal = document.createElement("moadal");
//
// idParent.appendChild(modal);
//
//

//
//
//
// console.log(btn1.id);
// btn1.innerHTML = btn1.id;

// var modal = document.createElement("modal");
//
// console.log(buttonNumeroSuivi).id[0];
// // buttonNumeroSuivi[0].innerHTML = "balblabl";

// lien documentation = https://medium.com/@dren4510/building-a-modal-overly-using-pure-javascript-211ba416e028

var buttonNumeroSuivi = document.querySelectorAll('.btnNumeroSuivi');
var btn1 =document.getElementById(buttonNumeroSuivi[0].id);
const body = document.querySelector('body');
const overlayDiv = document.createElement('div');
let displayBool = false;

overlayDiv.style.position = 'fixed';
overlayDiv.style.width = '100%';
overlayDiv.style.height = '100%';
overlayDiv.style.top = '0';
overlayDiv.style.left = '0';
overlayDiv.style.right = '0';
overlayDiv.style.bottom = '0';
overlayDiv.style.backgroundColor = 'rgba(0,0,0,0.5)';
overlayDiv.style.zIndex = '2';
overlayDiv.style.textAlign = '-webkit-center';
overlayDiv.style.display = "none";
body.appendChild(overlayDiv);

function styleOverlay() {
  const contentContainer = document.querySelector('#container');
  contentContainer.style.textAlign = 'center';
  contentContainer.style.marginTop = '27vh';
  contentContainer.style.backgroundColor = 'white';
  contentContainer.style.width = '53%';
  contentContainer.style.height = '17vh';
}
function displayOverlay(idBtn) {

  if(displayBool) {
    overlayDiv.innerHTML = `
      <div id="container">
        <h1>Hello, World</h1>
        <button id="close-btn">Close</button>
        <p id="testpara"></p>
      </div> 
    `
    styleOverlay();

    document.getElementById("testpara").innerHTML = idBtn;
    console.log(idBtn);
    overlayDiv.style.display = 'block';

  } else {
      overlayDiv.style.display = 'none';
    }
}
body.addEventListener('click', event => {
  if(event.target.className === 'btnNumeroSuivi') {
       displayBool = !displayBool;
       var idBtn = event.target.id;
       displayOverlay(idBtn);

  } else if(event.target.id === 'close-btn') {
      displayBool = !displayBool;
      displayOverlay();
    }
})

