"use strict";
let firstname = "Mi nombre";
let isActive = true;
let age = 24;
let fruits = ["manzana", "pera"];
let tupla = ["alfredo", true];
const user2 = {
    role: "",
    salary: 0,
    id: 0,
    name: "",
    email: "",
    password: 0
};
const user = {
    id: 18,
    name: "gabriel",
    email: "gabrielms1803@gmail.com",
    password: 123456789
};
const users = [
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
];
// const fill = users.fill({id: 15, name: "asasas", email: "asasas", password: 12344})
// console.table(fill)
// const filter = users.filter(  (user) =>  user.email=="luismariobross@hotmail.com")
// console.log(users[4]); // npm run start:dev 
const array = [5, 2, 9, 6, 1];
const flat = array.flat().sort();
console.log(flat); // npm run start:dev 
