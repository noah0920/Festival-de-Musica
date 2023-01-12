
// function tarea( done){
//     console.log('mi primer tarea');

const { watch } = require("gulp");

//     done();
// }

// exports.tarea = tarea;

/*compilar sass */

const { src, dest, watch, parallel } = required ("gulp");
//SRC: identificacion de un archivo o una serie de archivos
//DEST: permite almacenar algo en una carpeta de estilo
//"gulp" instalado en el pkg, lo extraemos
const sass = require ("gulp-sass") (required ('sass'));
const plumber = require ('gulp-plumber');


//imagenes
const cache = require ('gulp-cache');
const imagemin = require ('gulp-imagemin');
const webp = require ('gulp-webp');
const avif = require ('gulp-avif');


/*cargar sass con gulp */
function css(done){
    src('src/scss/**/*.scss') //identificar archivo sass
    .pipe(plumber())
    .pipe(sass ()) //compilarlo / pipe, accion que se hace dsp de otra, ejecutados en cadena
    .pipe(dest ('build/css')); //almacenarlo en el disco duro

    done(); //avisa a gulp cuando llegamos al final de la ejecucion
}

function imagenes(done){

    src('src/img/**/*.{ping, jpg}')
    .pipe
    done();
}

function versionWebp ( done){

    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{ping, jpg}')
        .pipe( webp (opciones))
        .pipe (dest ('build/img'))
    done();
}

function versionAvif ( done){

    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{ping, jpg}')
        .pipe( avif (opciones))
        .pipe (dest ('build/img'))
    done();
}

function javascript(){
    src('src/js/**/*.js')

    .pipe(dest ('build/js'));

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}
exports.css = css;
exports.js = javascript; 
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif; 
exports.dev = parallel (imagenes, versionWebp, versionAvif, javascript, dev);
