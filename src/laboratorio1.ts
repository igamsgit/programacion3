import { productos_disponibles } from './Examen1';
/*1.FILTRAR PRODUCTOS POR CATEGORÍA: 
DADO UN ARRAY DE PRODUCTOS, CREA UNA FUNCIÓN QUE TOME UNA CATEGORÍA COMO ARGUMENTO Y DEVUELVA UN NUEVO ARRAY SOLO CON LOS PRODUCTOS QUE PERTENECEN 
A ESA CATEGORÍA (SI LA PROPIEDAD CATEGORÍA EXISTE)*/ 

/*2.VERIFICAR SI HAY PRODUCTOS AGOTADOS, EXPLIQUE UNA FUNCIÓN QUE TOME UN ARRAY DE PRODUCTO Y DEVUELVA TRUE SI AL MENOS UN PRODUCTO TIENE UN STOCK IGUAL A CERO
Y FALSE EN EL CASO CONTRARIO */ 

/*3. ENCONTRAR PRODUCTOS POR PRECIO DENTRO DE UN RANGO:
CREA UNA FUNCTION QUE TOME UN ARRAY DE PRODUCTO Y DOS NÚMEROS(PRECIO MÍNIMO - PRECIO MÁXIMO). LA FUNCTION DEBE DEVOLVER UN NUEVO ARRAY,CON LOS PRODUCTOS CUYO
PRECIO ESTÉN DENTRO DE ESE RANGO(INCLUYENTE)*/ // < MENOR QUE // > MAYOR QUE

type Producto = {
    id: string;
    nombre:string;
    precio: number;
    stock: number ;
    categoria:Categoria;
}

type Categoria = "escolares" | "cocina" | "bisuteria"



const productos: Producto[] = [
  {
    id: "01",
    nombre: "boligrafo",
    precio: 2,
    stock: 230,
    categoria: "escolares",
  },
  {
    id: "02",
    nombre: "collar de perla",
    precio: 20,
    stock: 50,
    categoria: "bisuteria",
  },

  {
    id: "03",
    nombre: "molde",
    precio: 15,
    stock: 300,
    categoria: "cocina",
  },
  {
    id: "04",
    nombre: "corrector",
    precio: 3,
    stock: 600,
    categoria: "escolares",
  },
];

function llamadoCategorias(Productos: Producto[], categoria: Categoria): Producto[]{

    
      return productos.filter(producto => producto.categoria === categoria);  return productos.filter(producto => producto.categoria === categoria);

}

export const productosEscolares = llamadoCategorias(productos, "escolares");


//---------------------------------------------------------------------------------------------------------------------------------------------------------

function productosAgotados(productos: Producto[]): boolean {
  return productos.some(producto => producto.stock === 0);
}

export const noStock = productosAgotados(productos);




//---------------------------------------------------------------------------------------------------------------------------------------------------------

function rangoDePrecio(productos: Producto[], Min: number, Max: number): Producto[] {
  return productos.filter(producto => producto.precio >= Min && producto.precio <= Max);
}

export const rangoDeProductos = rangoDePrecio(productos,2,13);

