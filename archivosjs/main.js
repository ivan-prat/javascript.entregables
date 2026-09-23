let tipoDeUsuario = prompt("Le gustaria ingresar como cliente o como proveedor?");
let repuestos = ["filtro de aceite", "bujias", "pastillas de freno", "amortiguadores", "correa de distribucion", "bateria", "radiador", "faro delantero", "espejo retrovisor", "paragolpes", "ventilador", "embrague", "alternador", "catalizador", "manguera de radiador", "tubo de escape", "sensor de oxigeno", "filtro de aire", "filtro de combustible", "bomba de agua", "bomba de combustible", "caja de cambios", "disco de freno", "pastilla de embrague", "amortiguador trasero", "amortiguador delantero", "faro trasero", "espejo lateral", "parabrisas", "limpiaparabrisas", "bomba de direccion asistida", "bomba de freno", "cilindro maestro de freno", "cilindro esclavo de embrague", "cable de acelerador"];
const mostrarMensaje = (mensaje) => {
    alert(mensaje);
}
function existeEnStock(producto, lista) {
    return lista.includes(producto);
}
function agregarRepuesto(producto, lista) {
    lista.push(producto);
}
if (tipoDeUsuario === "proveedor") {
    let nombreProveedor = prompt("Ingrese su nombre completo");
    mostrarMensaje("Bienvenido " + nombreProveedor);
let repuestoProveedor = prompt("Ingrese el repuesto que desea vender");
if (existeEnStock(repuestoProveedor, repuestos)) {
    mostrarMensaje("El repuesto ya se encuentra en el inventario.");
} else {
    agregarRepuesto(repuestoProveedor, repuestos);
    mostrarMensaje("El repuesto no lo teniamos en stock, ya ha sido agregado, pase por caja a retirar el dinero. ¡Muchas gracias!");
}
}
if (tipoDeUsuario === "cliente") {
    let nombreCliente = prompt("Ingrese su nombre completo");
    mostrarMensaje("Bienvenido " + nombreCliente);
let repuestoSeleccionado = prompt("Ingrese el repuesto que desea comprar");
if (existeEnStock(repuestoSeleccionado, repuestos)) {
    mostrarMensaje("El repuesto seleccionado está disponible para la venta.");
} else {
    mostrarMensaje("Lo sentimos, el repuesto seleccionado no está disponible para la venta.");
}
}

