
const botonContactoHeader = document.getElementById('boton-contacto-header');
const modalContacto = document.getElementById('modal-contacto');
botonContactoHeader.addEventListener('click', () => {
    modalContacto.style.display = 'block';
});


const botonCerrar = document.getElementById("cerrar-modal");
botonCerrar.addEventListener("click", function() {
    const modal = document.getElementById("modal-contacto");
    modal.style.display = "none";
});





const botonCerrar2= document.getElementById("cerrar-modal-nosotros");
botonCerrar2.addEventListener("click", function() {
    const modal_nosotros = document.getElementById("modal-nosotros");
    modal_nosotros.style.display = "none";
});


// Selecciona el botón "Nosotros"
const botonNosotros = document.getElementById("boton-nosotros-header");

// Selecciona el diálogo flotante
const dialogoFlotante = document.getElementById("dialogo-flotante");

// Agrega un evento de clic al botón "Nosotros"
botonNosotros.addEventListener("click", function() {
    dialogoFlotante.style.display = "block";
});

