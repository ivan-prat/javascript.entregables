let rol;
do {
    rol = prompt("Te gustaria ingresar como Usuario, Administrador o Invitado?:")?.toLowerCase();
} while (rol === null || rol === "");
if (rol === "administrador") {
    alert("Bienvenido, Acceso completo al sistema");
} else if (rol === "usuario") {
    alert("Bienvenido, Acceso a tu panel de usuario");
} else if (rol === "invitado") {
    alert("Bienvenido, Acceso limitado al sistema");
}
else {
    alert("Rol no reconocido, ingresa un rol valido");
}