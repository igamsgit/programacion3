"use strict";
/*let firstname: string = "Mi nombre"
let isActive: boolean = true
let age:number = 24
let fruits: Array<string> = ["manzana", "pera"]
let tupla =[ "alfredo", true]


type User = {
    id:number;
    name:string;
    email:string;
    password:number;

}

interface IUser {
    id:number;
    name:string;
    email:string;
    password:number;
}

interface IUser2 extends IUser {
    role: string;
    salary: number;
}

const user2:IUser2 = {
    role: "",
    salary: 0,
    id: 0,
    name: "",
    email: "",
    password: 0
}

const user:User=  {
    id: 18,
    name: "gabriel",
    email: "gabrielms1803@gmail.com",
    password: 123456789
};

const users:User[]= [
    {
        id: 13, // 0
        name: "elmo",
        email: "plazasesamo@gmail.com",
        password: 123456893
    },
    {
        id: 12, // 1
        name: "pedro",
        email: "predopicapiedra@gmail.com",
        password: 456123789
    },
    {
        id: 14,
        name: "hugo",
        email: "hugopiedrascalientes@gmail.com",
        password: 785413399
    },

    {
        id: 15,
        name: "maria",
        email: "mariahiguera@hotmail.com",
        password: 785447547
    },
    {
        id: 16,
        name: "luis",
        email: "luismariobross@hotmail.com",
        password: 785444445

    }
  
]




// const fill = users.fill({id: 15, name: "asasas", email: "asasas", password: 12344})
// console.table(fill)

// const filter = users.filter(  (user) =>  user.email=="luismariobross@hotmail.com")
// console.log(users[4]); // npm run start:dev
const array = [5,2,9,6,1]
const flat = array.flat().sort()

import { filtro } from "./tarea2"
console.table(filtro)

import { activos } from "./tarea2"
console.log(activos)

type User={
    id:number ,
    name: string ,
    email: string,
    password:string,
    createAt: Date,
    updateAt: Date,

}

const users:User[]=[]

type CreateUser = {
    name:string,
    email:string,
    password:string,
}

function createUser(createUser: CreateUser):User{
    const { email, name, password } = createUser
    
    const newUser:User={
        name: name,
        email: email,
        password: password,
        id: users.length+1,
        createAt: new Date(),
        updateAt: new Date()
    }

    users.push(newUser)

    return newUser
} */
Object.defineProperty(exports, "__esModule", { value: true });
/* import { electronicProducts } from "./Taller1"
 
console.table(electronicProducts)

 import { pTotal } from "./Taller1"
 
console.log('Precio total de todos los productos de todas las categorias:', pTotal);

import { result } from "./Taller1"

console.log(result);*/
//import { productos_disponibles } from "./Examen1";
//console.log(productos_disponibles);
//import { mayor } from "./Examen1";
//console.log(mayor);
//import { inventarioDescuento } from "./Examen1";
//console.log(inventarioDescuento);
//import { productosEscolares } from "./laboratorio1";
//console.log(productosEscolares);
//import { noStock } from "./laboratorio1";
//console.log(noStock);
// import { rangoDeProductos } from "./laboratorio1";
// console.log( rangoDeProductos);
const practicaFunciones_1 = require("./practicaFunciones");
console.log(practicaFunciones_1.filtrarproductos);
