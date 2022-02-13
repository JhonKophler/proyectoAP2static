function copiado() {

    /* Obtener el contenido de el elemento "btn-disc" */
    var copyText = document.getElementById("btn-disc").textContent;

    /* Copiar al clipboard */
    navigator.clipboard.writeText(copyText);

    /* Alert para mostrar lo que quedo copiado */
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

function login() {
    const elementoPantallaLogin = document.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'visible';
}

function exit() {
    const elementoPantallaLogin = document.querySelector(".ingresar");
    elementoPantallaLogin.style.visibility = 'hidden';
}