"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viejos = exports.buscar = exports.borrar = exports.activos = exports.filtro = void 0;
const usuarios = [
    {
        id: "1",
        name: "Andres",
        email: "andres@gmail.com",
        password: "1234",
        role: "admin",
        isActive: true,
        createAt: new Date(),
        updateAt: new Date(),
    }
];
exports.filtro = usuarios.map((user) => {
    const gmail = user.email.includes("@gmail.com");
    const name = user.name;
    if (gmail) {
        return { gmail, name };
    }
});
//export const filtro= usuarios.map((user)=>{
// const gmail= user.email.includes("@gmail.com");
//if (gmail) {
//   return{gmail:user.email,name:user.name}    
// }
//});
exports.activos = usuarios.filter(us => us.isActive == (true));
exports.borrar = usuarios.slice(2 /*indice*/, 1 /*cantidad*/);
exports.buscar = usuarios.find((user) => {
    const id = user.id.includes("1");
});
exports.viejos = usuarios.filter(use => use.createAt < new Date("03/27/25"));
