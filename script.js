//Variables globales
let carrito = [];
let total = 0;
//Funcion para actualizar el carrito en el DOM
function actualizarCarrito() {
    const listaCarrito=document.getElementById("lista-carrito");
    listaCarrito.innerHTML=""; //Limpiar el carrito actual en el DOM
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent=`${item.nombre}-${item.precio}`;
        listaCarrito.appendChild(li);
    });
    document.getElementById("total").textContent=total.toFixed(2);
}
//funcion para agregar  productos al carrito
function agregarAlCarrito(nombre,precio) {
    carrito.push({nombre,precio});
    total += precio;
    actualizarCarrito();
}
//Obtener todos los botones de "Añadir al carrito"
const botones=document.querySelectorAll(".add-to-cart");
//Asignar el evento click a cada boton
botones.forEach(boton =>{
    boton.addEventListener("click",(e) => {
        const nombreProducto =e.target.parentElement.querySelector("h3").textContent;
        const precioProducto=parseFloat(e.target.getAttribute("data-precio"));
        agregarAlCarrito(nombreProducto, precioProducto);
    });
});
//comprar - Alerta simple
document.getElementById("comprar").addEventListener("click", ()=> {
    if (carrito.length === 0){
        alert("El carrito está vacío.");
    } else {
        alert('Compra realizada, vuelva pronto.');
        carrito = [];
        total = 0;
        actualizarCarrito();
    }
});
// Captura el evento de envío del formulario de soporte
document.getElementById("form-soporte").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario para evitar recargar la página
    
    // Muestra un mensaje de confirmación al usuario
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");

    // Limpia el formulario después de enviarlo
    document.getElementById("form-soporte").reset();
});
// Evento para cerrar el video flotante
document.getElementById("cerrar-video").addEventListener("click", function() {
    document.getElementById("video-flotante").style.display = "none";
});
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de cerrar y asigna el evento de clic
    var cerrarBoton = document.getElementById("cerrar-video");
    if (cerrarBoton) {
        cerrarBoton.addEventListener("click", function() {
            document.getElementById("video-flotante").style.display = "none";
        });
    } else {
        console.error("El botón de cerrar con id='cerrar-video' no se encuentra en el DOM.");
    }
});