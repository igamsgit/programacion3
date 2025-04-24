"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangoDeProductos = exports.noStock = exports.productosEscolares = void 0;
const productos = [
    {
        id: "01",
        nombre: "boligrafo",
        precio: 2,
        stock: 230,
        categoria: "escolares",
    },
    {
        id: "02",
        nombre: "collar de perla",
        precio: 20,
        stock: 50,
        categoria: "bisuteria",
    },
    {
        id: "03",
        nombre: "molde",
        precio: 15,
        stock: 300,
        categoria: "cocina",
    },
    {
        id: "04",
        nombre: "corrector",
        precio: 3,
        stock: 600,
        categoria: "escolares",
    },
];
function llamadoCategorias(Productos, categoria) {
    return productos.filter(producto => producto.categoria === categoria);
    return productos.filter(producto => producto.categoria === categoria);
}
exports.productosEscolares = llamadoCategorias(productos, "escolares");
//---------------------------------------------------------------------------------------------------------------------------------------------------------
function productosAgotados(productos) {
    return productos.some(producto => producto.stock === 0);
}
exports.noStock = productosAgotados(productos);
//---------------------------------------------------------------------------------------------------------------------------------------------------------
function rangoDePrecio(productos, Min, Max) {
    return productos.filter(producto => producto.precio >= Min && producto.precio <= Max);
}
exports.rangoDeProductos = rangoDePrecio(productos, 2, 13);
