//funcion flecha
// const nombreDeF = (age:number):number => {



// }

function suma(num1:number, num2:number){
    return num1+num2
}

function execite(num1:number, num2:number, op:Function){
    console.log(op(num1,num2))
}

execite(2,2, suma);

//suma
// function execute(num1:number, num2:number, ()=>{
//     return num1 + num2
// });

// const result = execute(1,2)

//filtrar
function filtrar(product:Producto){
    return product.price>=6;
}

export const saveFilter = productos.filter(filtrar);

//ejercicio guia
type User={
    id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const users:User[] = [
    { 
        id: "1", 
        name: "Andres", 
        email: "andres@gmail.com", 
        password: "123456",
        isActive: true, 
        createdAt: new Date("04/13/2024"), 
        updatedAt: new Date("04/14/2024") 
    },
    {
        id:"2",
        name:"Samuel",
        email:"samuel@gmail.com",
        password:"23546",
        isActive: true,
        createdAt: new Date("02/15/2025"),
        updatedAt: new Date("03/20/2025"),
    },
    {
        id:"3",
        name:"Luis",
        email:"luis@hotmail.com",
        password:"67546",
        isActive: false,
        createdAt: new Date("02/15/2025"),
        updatedAt: new Date("03/20/2025"),
    }
]

const findByEmail = (users:User[], email:string)=>{
    return users.find((user)=>user.email===email)
}

const findByFirstLetterName= (users:User[], letter:string)=>{
    return users.filter(user=>user.name[0]===letter)
}

//ejercicio 4 guia
export const filterOldInactiveUser= (users:User[], before:Date):User[]=>{
return users.filter((user)=>user.createdAt<before && user.isActive===false)
}

export const usersactive=(users:User[])=>{
return users.filter((user=>user.isActive===true)).map((user)=>user.email);
}

export const usersInactive=(users:User[])=>{
    const active=users.filter((user)=>user.isActive).length
    const inactive=users.filter((user)=>user.isActive==false).length

    return `Existe un total de ${active} de usuarios activos, y 
    un total de ${inactive} inactivos`
}


export const EmailInvalid=(users:User[]):boolean=>{
  return users.some((user)=>!user.email.includes("@") || !user.email.includes("."))
}
