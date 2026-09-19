function solicitarRol() {
    let entrada = prompt("Te gustaria ingresar como Usuario, Administrador o Invitado?:")?.toLowerCase();
    return entrada;
}
function mostrarMensaje(rolIngresado) {
    if (rolIngresado === "administrador") {
    return("Bienvenido, Acceso completo al sistema\nTe gustaria volver a ingresar como otro rol?");
} else if (rolIngresado === "usuario") {
    return("Bienvenido, Acceso a tu panel de usuario\nTe gustaria volver a ingresar como otro rol?");
} else if (rolIngresado === "invitado") {
    return("Bienvenido, Acceso limitado al sistema\nTe gustaria volver a ingresar como otro rol?");
}
else {
    return("Rol no reconocido, ingresa un rol valido");
}
}
const preguntarContinuar = (texto) => confirm(texto);
const despedirUsuario = () => alert("¡Gracias por utilizar mi simulador, hasta luego!");
let continuar = true;
let rol;
do {
do {
    rol = solicitarRol();
} while (rol === null || rol === "");
let mensaje = mostrarMensaje(rol);
continuar = preguntarContinuar(mensaje);
} while (continuar);
despedirUsuario();