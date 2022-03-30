const d = document;
const w = window;

function copiado() {

    var copyText = d.getElementById("btn-disc").textContent;

    navigator.clipboard.writeText(copyText);

    alert("Usuario copiado al Portapapels: " + copyText);

}

//=============================================================================//

w.onload = verHard();

function verSoft() {

    const elementoSoftSkills = d.querySelector("#card-soft");
    const elementoHardSkills = d.querySelector("#card-hard");
    elementoHardSkills.style.display = "none";
    elementoSoftSkills.style.display = "inline";

    const textoHardSkill = d.querySelector(".hard");
    textoHardSkill.style.backgroundColor = 'var(--colorNegro)';
    textoHardSkill.style.color = 'var(--colorLetraBlanca)';

    const textoSoftSkill = d.querySelector(".soft");
    textoSoftSkill.style.backgroundColor = 'var(--colorGris)';
    textoSoftSkill.style.color = 'var(--colorNegro)';

}


//=============================================================================//


function verHard() {
    const elementoHardSkills = d.querySelector("#card-hard");
    const elementoSoftSkills = d.querySelector("#card-soft");
    elementoSoftSkills.style.display = "none";
    elementoHardSkills.style.display = "inline";

    const textoHardSkill = d.querySelector(".hard");
    textoHardSkill.style.backgroundColor = 'var(--colorGris)';
    textoHardSkill.style.color = 'var(--colorNegro)';

    const textoSoftSkill = d.querySelector(".soft");
    textoSoftSkill.style.backgroundColor = 'var(--colorNegro)';
    textoSoftSkill.style.color = 'var(--colorLetraBlanca)';

    const imagen = d.getElementsByClassName('foto-perfil');
    imagen[0].style.display = 'inline';
}


//=============================================================================//


function login() {

    const elementoPantallaLogin = d.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'visible';
    elementoPantallaLogin.style.opacity = '1';

    const spinner = d.querySelector(".spinner-border");
    spinner.style.display = 'inline-block';

    const palabraLogin = d.querySelector(".login p");
    palabraLogin.style.display = 'none';


    const cuerpo = d.querySelector('.global');
    cuerpo.classList.add('no-scroll');
    cuerpo.style.borderRadius = '0';

}


//=============================================================================//


function exit() {

    const elementoPantallaLogin = d.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'hidden';
    elementoPantallaLogin.style.opacity = '0';

    const spinner = d.querySelector(".spinner-border");
    spinner.style.display = 'none';

    const palabraLogin = d.querySelector(".login p");
    palabraLogin.style.display = 'inline-block';

    const cuerpo = d.querySelector('.global');
    cuerpo.classList.remove('no-scroll');

}

// ==============================================================================//

/*   Menu Desplegable  */
const body = d.querySelector('body');
const btnOjoMenu = d.querySelector('#ojo');
const menu = d.querySelector('#menu-palabras');
const menuCompleto = d.querySelector('#navbar');
let mediaQuery = w.matchMedia('(max-width:  1550px)');

mediaQuery.onchange = () => {
    if (!mediaQuery.matches) {
        
        btnOjoMenu.setAttribute('class', 'fa-solid fa-eye');
        btnOjoMenu.classList.toggle('ocultar');
        menu.style.display = "flex";
        
    } 
    else{

        btnOjoMenu.classList.toggle('ocultar');
        menu.style.display = "none";

    }
};

btnOjoMenu.addEventListener('click', () => {
    classOjo = btnOjoMenu.getAttribute('class');
    if (classOjo === 'fa-solid fa-eye') {
        ("ojo cerrado");
        btnOjoMenu.classList.remove('fa-eye')
        btnOjoMenu.classList.add('fa-xmark');
        menu.style.display = "flex";
    }
    else{
        ("ojo abierto");
        btnOjoMenu.classList.remove('fa-xmark');
        btnOjoMenu.classList.add('fa-eye');
        menu.style.display = "none";
    }
});

menu.addEventListener('click', () => {
    setTimeout(() => {
        btnOjoMenu.click();
    },1000);
});


w.addEventListener('scroll', () => {
    let altura = d.documentElement.scrollTop ;
    console.log(altura);
    if (altura > 40) {
        menuCompleto.style.top = '0';
    }
    if (altura < 50) {
        menuCompleto.style.top = '1.65rem';
    }
})