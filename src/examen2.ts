/* dado un arreglo de productos debe crear 5 funciones para implementar el crud las funciones son las siguientes
a) create: debe recibir como parametro la informacion que va a registrar en la base de datos(arreglo)
b) findAll: debe retornar todos los productos cuya propiedad isActive sea true
c) findOne: debe recibir como parametro el id del producto que debe buscar
d) update: debe recibir como parametros el id del producto el cual quiere modificar y tambien la informacion nueva de actualizacion
e) delete: debe recibir como parametro el id del producto que debe eliminar*/


type Producto = {
    id: number;
    name: string;
    category: string;
    price: number;
    isActive: boolean;
    createdAt: Date;
    updateAt: Date;

};

type nuevaInfo = {

    name: string;
    category: string;
    price: number;
   

};



const productos: Producto[] = [
    {
        id: 1,
        name: "laptop",
        category: "electronica",
        price: 500,
        isActive: false,
        createdAt: new Date("12-02-2015"),
        updateAt: new Date("8-05-2022"),
    },

    {
        id: 2,
        name: "vestido",
        category: "ropa",
        price: 50,
        isActive: true,
        createdAt: new Date("1-4-2000"),
        updateAt: new Date("2-5-2010"),
    },

    {
        id: 3,
        name: "pizarra",
        category: "escolar",
        price: 100,
        isActive: true,
        createdAt: new Date("4-22-2015"),
        updateAt: new Date("5-30-2022"),
    },

];





function create(product: nuevaInfo): Producto {
    const newProduct: Producto = {
        id: productos.length + 1, // Generar un ID único
        name: product.name,
        category: product.category,
        price: product.price,
        isActive: true, // Por defecto, el producto está activo
        createdAt: new Date(),
        updateAt: new Date(),
    };
    productos.push(newProduct);
    return newProduct;
}

function findAll(): Producto[] {
    return productos.filter((product) => product.isActive === true);
}

function findOne(id: number): Producto | undefined {
    return productos.find((product) => product.id === id);
}

function update(id: number, updatedInfo: Partial<nuevaInfo>): Producto | undefined {
    const product = productos.find((product) => product.id === id);
    if (!product) return undefined; // Producto no encontrado

    // Actualizar las propiedades directamente
    Object.assign(product, updatedInfo);
    product.updateAt = new Date(); // Actualizar la fecha de modificación
    return product;
}

function deleteProduct(id: number): boolean {
    const productIndex = productos.findIndex((product) => product.id === id);
    if (productIndex === -1) return false; // Producto no encontrado

    productos.splice(productIndex, 1); // Eliminar el producto del arreglo
    return true;
}

// Ejemplo de uso
console.log("Productos activos:", findAll());
console.log("Crear producto:", create({ name: "Ordenador", category: "electrónica", price: 600 }));
console.log("Buscar producto con ID 2:", findOne(2));
console.log("Actualizar producto con ID 1:", update(1, { name: "Laptop Pro", price: 550 }));
console.log("Eliminar producto con ID 3:", deleteProduct(3));
console.log("Productos después de eliminar:", productos);








