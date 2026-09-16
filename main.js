let continuar = true;
let rol;
do {
do {
    rol = prompt("Te gustaria ingresar como Usuario, Administrador o Invitado?:")?.toLowerCase();
} while (rol === null || rol === "");
if (rol === "administrador") {
    continuar = confirm("Bienvenido, Acceso completo al sistema\nTe gustaria volver a ingresar como otro rol?");
} else if (rol === "usuario") {
    continuar = confirm("Bienvenido, Acceso a tu panel de usuario\nTe gustaria volver a ingresar como otro rol?");
} else if (rol === "invitado") {
    continuar = confirm("Bienvenido, Acceso limitado al sistema\nTe gustaria volver a ingresar como otro rol?");
}
else {
    alert("Rol no reconocido, ingresa un rol valido");
}
} while (continuar);