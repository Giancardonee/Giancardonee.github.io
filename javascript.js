/* Este fragmento de codigo es para el boton de Leer Mas/ Leer Menos*/

let LeerMas_btn = document.getElementById('LeerMas_btn');
let EsconderText = document.getElementById('EsconderText');

LeerMas_btn.addEventListener('click', toggleText);

function toggleText() {
    EsconderText.classList.toggle('showText');

  if(EsconderText.classList.contains('showText')) {
    LeerMas_btn.innerHTML = 'Leer Menos'
  }
  else {
    LeerMas_btn.innerHTML = 'Leer Mas'
  }
}

/* Este fragmento de codigo es para aplicarle estilos al form */

let contador1 = 0;


function cambiarFondoTurquesa() {
    let form = document.getElementById('Form-ID');
    console.log('Se cambio el color de fondo a Turquesa'); 
    form.style.backgroundColor = '#2092b4';

}

function fondoDefault () {
     let form = document.getElementById('Form-ID');
     contador1 = contador1 + 1 ; 
      if (contador1 == 1) {
          console.log('Se apreto el boton con ID colorFondoDefault una vez')
        }

      if (contador1  >= 2) {
     console.log ('Se apreto el boton con ID colorFondoDefault ',contador1, 'veces');
     form.style.backgroundColor = '#9e9e9e'}

}

function cambiarLetraBlanco () {
    let form = document.getElementById('Form-ID');
    form.style.color = '#FFFFFF'
    console.log ('Se cambio el color de la letra a blanco')
}

function letraDefalt () {
    let form = document.getElementById('Form-ID');
    form.style.color = '#000000'
    console.log ('Se cambio el color de la letra al color default')
}

/*Barra de Nav js */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]'); 
menuLinks.forEach (menuLink => {
  menuLink.addEventListener("click", function(){
      navMenu.classList.remove("nav-menu_visible");
  })

})