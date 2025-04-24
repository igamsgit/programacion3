/* Crear un array inventario con al menos 3 objetos de tipo producto, donde cada producto tiene: id, nombre, precio y stock*/


type Producto = {
    id: string;
    nombre:string;
    precio: number;
    stock: number ;

}

const productos: Producto[] = [
  {
    id: "01",
    nombre: "lavadora",
    precio: 250,
    stock: 100,
  },
  {
    id: "02",
    nombre: "nevera",
    precio: 350,
    stock: 50,
  },
  {
    id: "03",
    nombre: "laptop",
    precio: 500,
    stock: 0,
  },
];

// stock mayor a 0
export const productos_disponibles = productos.filter((producto)=>producto.stock > 0)

export let mayor = productos[0]; 

// encontrar el producto mas caro
for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio > mayor.precio) {
        mayor = productos[i]; 
    }
}

// agregar descuento
function aplicarDescuento(inventario: Producto[], Porcentaje: number): Producto[]{
    return inventario.map(producto => ({ ...producto, precio: producto.precio - (producto.precio * (Porcentaje)) }));
}

export const inventarioDescuento = aplicarDescuento(productos,0.5); 






