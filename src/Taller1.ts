/* 1.Dado un arreglo de productos donde cada uno tiene las siguientes propiedades id,name,price, category: electronica,ropa,calzado.
 
 *1: deben obtener nombres de productos electrónicos y ordenarlos
 *2: debe calcular el precio total de todos los productos

*/



type Product = {
    id: string;
    name:string;
    price: number;
    category: Category;

}

type Category = "electronic" | "clothes" | "footwear"
    



const products:Product[] = [{

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

export const electronicProducts = products.filter(product => product.category === 'electronic');

export const pTotal = products.reduce((acc, curr) => acc + curr.price, 0) 



//2. Dada una función debe tipar parámetro de entrada y salida según el tipo de dato que corresponda.

type Student = {

    name:string;
    califications: number[];

}

const students: Student[] = [{

    name: "Maria",
    califications: [20,19,18,19,17]

},

{

    name: "Luis",
    califications: [15,12,10,19,16]

},

{

    name: "George",
    califications: [20,19,18,19,17]

}];


 function calculate (students: Student[]): { name: string; average: number }[] {	
    return students.map((Student) => ({
        name : Student.name,
        average : Student.califications.reduce((acc, curr) => curr + acc, 0)/Student.califications.length
   
        }));

}
export const result = calculate(students);










































