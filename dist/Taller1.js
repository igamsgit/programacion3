"use strict";
/* 1.Dado un arreglo de productos donde cada uno tiene las siguientes propiedades id,name,price, category: electronica,ropa,calzado.
 
 *1: deben obtener nombres de productos electrónicos y ordenarlos
 *2: debe calcular el precio total de todos los productos

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.pTotal = exports.electronicProducts = void 0;
const products = [{
        id: "1",
        name: "shirt",
        price: 15,
        category: "clothes",
    },
    {
        id: "2",
        name: "shoe",
        price: 35,
        category: "footwear",
    },
    {
        id: "3",
        name: "refrigerator",
        price: 200,
        category: "electronic",
    },
    {
        id: "4",
        name: "smartphone",
        price: 450,
        category: "electronic",
    },
    {
        id: "5",
        name: "tv",
        price: 250,
        category: "electronic",
    }];
exports.electronicProducts = products.filter(product => product.category === 'electronic');
exports.pTotal = products.reduce((acc, curr) => acc + curr.price, 0);
const students = [{
        name: "Maria",
        califications: [20, 19, 18, 19, 17]
    },
    {
        name: "Luis",
        califications: [15, 12, 10, 19, 16]
    },
    {
        name: "George",
        califications: [20, 19, 18, 19, 17]
    }];
function calculate(students) {
    return students.map((Student) => ({
        name: Student.name,
        average: Student.califications.reduce((acc, curr) => curr + acc, 0) / Student.califications.length
    }));
}
exports.result = calculate(students);
