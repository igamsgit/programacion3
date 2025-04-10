"use strict";
/* Crear un array inventario con al menos 3 objetos de tipo producto, donde cada producto tiene: id, nombre, precio y stock*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventarioDescuento = exports.mayor = exports.productos_disponibles = void 0;
const productos = [{
        id: "01",
        nombre: "lavadora",
        precio: 250,
        stock: 100,
    },
    {
        id: "02",
        nombre: "nevera",
        precio: 350,
        stock: 50,
    },
    {
        id: "03",
        nombre: "laptop",
        precio: 500,
        stock: 0,
    },];
// stock mayor a 0
exports.productos_disponibles = productos.filter((producto) => producto.stock > 0);
exports.mayor = productos[0];
// encontrar el producto mas caro
for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio > exports.mayor.precio) {
        exports.mayor = productos[i];
    }
}
// agregar descuento
function aplicarDescuento(inventario, Descuento) {
    return inventario.map(producto => (Object.assign(Object.assign({}, producto), { precio: producto.precio - (producto.precio * (Descuento)) })));
}
exports.inventarioDescuento = aplicarDescuento(productos, 0.5);
