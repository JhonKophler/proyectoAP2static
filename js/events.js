/* var porcentajes = {

    html: '69%',
    css: '52%',
    javascript: '85%',
    bootstrap: '55%',
    c: '90%',
    typescript: '63%',
    angular: '60%',
    trabajo: '70%',
    resolucion: '48%',
    ingles: '60%',
    scrum: '65%',
    lid: '55%',
    proyeccion: '85%',

}

localStorage.setItem("listaPorcentajes", JSON.stringify(porcentajes));
var listaDesdeLocal = JSON.parse(localStorage.getItem("porcentajes")); */

function copiado() {

    var copyText = document.getElementById("btn-disc").textContent;

    navigator.clipboard.writeText(copyText);

    alert("Usuario copiado al Portapapels: " + copyText);

}

//=============================================================================//

window.onload = verHard();

function verSoft() {

    const elementoSoftSkills = document.querySelector("#card-soft");
    const elementoHardSkills = document.querySelector("#card-hard");
    elementoHardSkills.style.display = "none";
    elementoSoftSkills.style.display = "inline";

    const textoHardSkill = document.querySelector(".hard");
    textoHardSkill.style.backgroundColor = 'var(--colorNegro)';
    textoHardSkill.style.color = 'var(--colorLetraBlanca)';

    const textoSoftSkill = document.querySelector(".soft");
    textoSoftSkill.style.backgroundColor = 'var(--colorGris)';
    textoSoftSkill.style.color = 'var(--colorNegro)';

}

function verHard() {
    const elementoHardSkills = document.querySelector("#card-hard");
    const elementoSoftSkills = document.querySelector("#card-soft");
    elementoSoftSkills.style.display = "none";
    elementoHardSkills.style.display = "inline";

    const textoHardSkill = document.querySelector(".hard");
    textoHardSkill.style.backgroundColor = 'var(--colorGris)';
    textoHardSkill.style.color = 'var(--colorNegro)';

    const textoSoftSkill = document.querySelector(".soft");
    textoSoftSkill.style.backgroundColor = 'var(--colorNegro)';
    textoSoftSkill.style.color = 'var(--colorLetraBlanca)';
}


function disableScroll() {
    window.scrollTo(-10000, -10000);
}




function login() {

    const elementoPantallaLogin = document.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'visible';
    elementoPantallaLogin.style.opacity = '1';

    const spinner = document.querySelector(".spinner-border");
    spinner.style.display = 'inline-block';

    const palabraLogin = document.querySelector(".login p");
    palabraLogin.style.display = 'none';


    const cuerpo = document.querySelector('.global');
    cuerpo.classList.add('no-scroll');
    cuerpo.style.borderRadius = '0';

}

function exit() {

    const elementoPantallaLogin = document.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'hidden';
    elementoPantallaLogin.style.opacity = '0';

    const spinner = document.querySelector(".spinner-border");
    spinner.style.display = 'none';

    const palabraLogin = document.querySelector(".login p");
    palabraLogin.style.display = 'inline-block';

    const cuerpo = document.querySelector('.global');
    cuerpo.classList.remove('no-scroll');

}


/* function cargaDePorcentajes() {



    const elementoBarra = document.getElementsByClassName('elemento-barra');
    const porProgressBar = document.getElementsByClassName('progress-bar');
    console.log(listaDesdeLocal);

    for (let i = 0; i < elementoBarra.length; i++) {


        let h4 = elementoBarra[i].children[0].children[0].textContent;
        let porc = elementoBarra[i].children[0].children[1].textContent;
        elementoBarra[i].children[1].children[0].style.color = 'red';

        console.log(h4);
        console.log(porc);
        console.log("================");


    }

 */

/* console.log(porcentajes[0].html); */

/* } */