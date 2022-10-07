// agreamos la alerta de error
eliminar.addEventListener("click", () => {
    Swal.fire({
    title: "Carrito vacio",
    text: "vuelva a cargar la cantidad",
    icon: "error",
    confirmButtonText: "Ok",
    });
});
// hacemos referencia al boton de confirmación de compra
let notif = document.getElementById ("btn")
console.log (notif)
notif.addEventListener("click", () => {
    Swal.fire({
    title: "Compra realizada",
    text: "Agregado con exito",
    icon: "success",
    confirmButtonText: "Ok",
    });
});