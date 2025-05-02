"use strict";
// const nombre = (name: string,age:number): => {} // function flecha 
// function nombre (name: string,age:number): number {} // funcion flecha con return
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtrarproductos = void 0;
const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Tecnología",
        price: 1200,
        isActive: true,
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-01-01"),
    },
    {
        id: 2,
        name: "Sofa",
        category: "Hogar",
        price: 1555,
        isActive: false,
        createdAt: new Date("2023-02-01"),
        updatedAt: new Date("2023-02-01"),
    },
    {
        id: 3,
        name: "Camisa",
        category: "Ropa",
        price: 5035,
        isActive: true,
        createdAt: new Date("2023-03-01"),
        updatedAt: new Date("2023-03-01"),
    },
];
function filtrar(product) {
    // return product.price > 1200; // devuelve true o false
    return product.price > 1200;
}
exports.filtrarproductos = products.filter((product) => filtrar(product)); // devuelve un array con los productos que cumplen la condicion de la funcion filtrar
