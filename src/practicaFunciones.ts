import { result } from './Taller1';
// const nombre = (name: string,age:number): => {} // function flecha 
// function nombre (name: string,age:number): number {} // funcion flecha con return

// function nombre (): number {} //funcion traducional
// function nombre (name: string,age:number): number {} // funcion tradicional con return

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// //callbacks: funciones que se pasan como argumento a otras funciones

// function sumar (number1:number,number2:number): number {
//     return number1 + number2;
// }

// function execute (num1:number,num2:number,op:Function):{
//     console.log(op(num1,num2));
// }

// execute(2,3, sumar); // 5


//resumido
export function sumar( num1:number,num2:number,  callbacks: (resultado: number)=>void ){
    return callbacks(num1+num2)
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//ejercicios de funciones

type Category = "Tecnología" | "Hogar" | "Ropa" | "Accesorios";

type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const products: Product[] = [
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

function filtrar (product: Product){ // filtrar es una funcion que recibe un producto y devuelve un booleano
    // return product.price > 1200; // devuelve true o false
    return product.price > 1200;
}

export const filtrarproductos = products.filter(filtrar); // es mas corto ya que solo se coloca el parametro
// //export const filtrarproductos = products.filter((product)=> filtrar(product)); este es lo mismo pero mas largo

