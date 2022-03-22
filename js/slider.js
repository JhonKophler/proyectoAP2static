Splide.defaults = {
  type   : 'loop',
  autoplay: true,
  perPage: 2,
  focus    : 'rigth',
  pagination:false,
  speed: number = 1000,
  breakpoints: {
    1550: {
      perPage: 1,
    },
    550: {
      perPage: 1,
    },
  },
}

var splide = new Splide( '.splide', Splide.defaults  );
var splideDos = new Splide( '.educacionProfesional',Splide.defaults );
var splideTres = new Splide( '.cursosRealizados',Splide.defaults );

splide.mount();
splideDos.mount();
splideTres.mount();