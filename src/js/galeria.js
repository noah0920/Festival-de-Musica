document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement ('picture');
        
        imagen.innerHTML = `
         
        <img loading="lazy" width="200" height="300" src="img/thumb/${i}.jpg" alt="imagen galeria">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
        
    }
} 

function mostrarImagen(id){
    const imagen = document.createElement ('picture');
        
    imagen.innerHTML = `
     
    <img loading="lazy" width="200" height="300" src="img/grande/${id}.jpg" alt="imagen galeria">
    `;
    //crea el overlay con la imagen
    const overlay = document.createElement ('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('.btn-cerrar');
    overlay.appendChild(cerrarModal);

    //lo añade al html
    const body = document.querySelector ('body');
    body.appendChild(overlay);




}