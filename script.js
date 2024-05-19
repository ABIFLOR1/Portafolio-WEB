/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Diana Flores')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('amante de las comunidades')
    .pauseFor(1500)
    
    .start();