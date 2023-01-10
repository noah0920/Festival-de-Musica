
// function tarea( done){
//     console.log('mi primer tarea');

const { watch } = require("gulp");

//     done();
// }

// exports.tarea = tarea;

/*compilar sass */

const { src, dest } = required ("gulp");
//SRC: identificacion de un archivo o una serie de archivos
//DEST: permite almacenar algo en una carpeta de estilo
//"gulp" instalado en el pkg, lo extraemos
const sass = required ("gulp-sass") (required ('sass'));
const plumber = required ('gulp-plumber');


//imagenes
const webp = required ('gulp-webp');

/*cargar sass con gulp */
function css(done){
    src('src/scss/**/*.scss') //identificar archivo sass
    .pipe(plumber())
    .pipe(sass ()) //compilarlo / pipe, accion que se hace dsp de otra, ejecutados en cadena
    .pipe(dest ('build/css')); //almacenarlo en el disco duro

    done(); //avisa a gulp cuando llegamos al final de la ejecucion
}

function versionWebp ( done){

    src('src/img/**/*.{ping, jpg}');

    done();
}

function dev(done){
    watch('src/scss/**/*.scss', css);
    done();
}
exports.css = css;  
exports.dev = dev;
