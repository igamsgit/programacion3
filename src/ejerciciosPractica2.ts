//Crea una function que permita modicar el precio de un producto especifico 




type Productos= {
    id: string;
    name: string;
    price: number;
    stock: number;

};

const product: Productos [] = [  {


    id: "1",
    name: "nevera",
    price: 500,
    stock: 200


},
{


    id: "2",
    name: "camisa",
    price: 400,
    stock: 120


},
    
{


    id: "3",
    name: "laptop",
    price: 60,
    stock: 20


},
    
{


    id: "4",
    name: "telefono",
    price: 600,
    stock: 15


},
];

function total (stock: number, price: number) {
    const totalStockNumber = productos.map ((productos) productos => productos.stock * productos.price)
    
}
