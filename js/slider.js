Splide.defaults = {
  type   : 'loop',
  autoplay: true,
  perPage: 2,
  focus    : 'rigth',
  pagination:false,
  speed: number = 2000,
  breakpoints: {
    1550: {
      perPage: 1,
    },
    550: {
      perPage: 1,
    },
  },
}

var splide = new Splide( '.working', Splide.defaults  );
var splideDos = new Splide( '.educacionProfesional',Splide.defaults );
var splideTres = new Splide( '.cursosRealizados',Splide.defaults );
var proyectosSlider = new Splide( '.proyectos-slider',{
  type   : 'loop',
  perPage: 1,
  focus    : 'center',
  gap:'4rem',
  breakpoints: {
    500:{
      arrows : false,
    },
    800: {
      arrows : false,
    }
  },
} ).mount();


splide.mount();
splideDos.mount();
splideTres.mount();


const contorno = document.getElementsByClassName('splide__track');
contorno[3].style.padding = '0 1rem';
