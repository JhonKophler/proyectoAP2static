const imagenes = document.querySelector('.grid');
let modal = document.querySelector('.visor-img');
const btnCerrar = document.querySelector('#cerrar-img');
let img = document.createElement('img');

imagenes.addEventListener('click', (event) => {

    if (event.target.classList.contains('g-col-6')) {
        modal.style.display = 'flex';
        let srcImg = event.target.src;
        img.src = srcImg;
        modal.appendChild(img);
        body.classList.toggle('no-scroll');

    }
    
});


btnCerrar.addEventListener('click', () => {
    body.classList.toggle('no-scroll');
    modal.removeChild(img);
    modal.style.display = 'none';
});
