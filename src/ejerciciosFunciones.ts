// 📦 Tipos base
// Ejercicios de funciones
type Category = "Tecnologia " | "Hogar" | "Ropa" | "Accesorios";

type Product = {
    id: number;
    name: string;
    category: Category;
    price: number;
    isActive: boolean;
    CreatedAt: Date;
    UpdateAt: Date;

};

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};
const allUser: User[] = [
    {
        id: 1,
        name: "ari",
        email: "ari@gmail.com",
        password: "1233",
        isActive: true,
        createdAt: new Date("02/15/2008"),
        updatedAt: new Date("05/02/2018"),
    },

    {
        id: 2,
        name: "maria",
        email: "adriana@gmail.com",
        password: "1234",
        isActive: true,
        createdAt: new Date("10/11/2015"),
        updatedAt: new Date("06/17/2018"),
    },

    {
        id: 3,
        name: "jose",
        email: "adrian@gmail.com",
        password: "1235",
        isActive: true,
        createdAt: new Date("06/01/2015"),
        updatedAt: new Date("08/02/2018"),
    },
]
//1. Ordenar productos por fecha de creación (createdAt) de forma descendente.
const sortUsersByCreatedAt = (users: User[]) => {
    return users.sort((a: User, b: User) => b.createdAt.getTime() - a.createdAt.getTime())
}
console.log(sortUsersByCreatedAt(allUser))

//2. Encontrar un usuario por su correo electrónico (email). Si no existe, devolver undefined.
const findUserByEmail = (users: User[], email: string) => {
    return users.find((user) => user.email === email) ?? undefined
}


//3. Contar cuántos usuarios hay por primera letra del nombre
const email = findUserByEmail(allUser, "adrian@gmail.com");

const countUsersByInitial = (users: User[], letter: string) => {
    return users.filter((user) => user.name[0] === letter)

}
//4. Filtrar usuarios inactivos (isActive: false) que fueron creados antes de una fecha dada.
function usuariosInactivos(users: User[], before: Date): User[] {
    return users.filter((user) => user.createdAt < before && user.isActive === false)
}

const userFilter = usuariosInactivos(allUser, new Date("02/10/2009"))


//5. Obtener un array de correos electrónicos (email) de usuarios activos (isActive: true).
const usersActive = (users: User[]) => {
    return users.filter((User) => User.isActive).map((user) => user.email)
}

//6. Generar un resumen de usuarios activos e inactivos.
const getUserStatusSummary = (users: User[]) => {
    const active = users.filter((user) => user.isActive == true).length
    const inactive = users.filter((user) => user.isActive == false).length

    return ``
}

//7. Validar que todos los correos electrónicos (email) son válidos (contienen "@" y ".").
const hasInvalidEmails = (users: User[]): boolean => {
    return users.some((user) => !user.email.includes("@") || !user.email.includes(".")
    )
}
//8. Obtener un array de usuarios con solo nombre y correo electrónico (name y email).
function getUsersNameAndEmail(users: User[]): { name: string; email: string }[] {
    return users.map((user) => ({ name: user.name, email: user.email }));
}

//9. remplazar un usario existente por ID
function replaceUserById(users: User[], id: number, newUser: User): User[] {
    return users.map((user) => user.id === id ? newUser : user);
}

//10.Eliminar a todos los usuarios inactivos (isActive: false).
function deleteInactiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive === true);
}

//🛒 Productos – Ejercicios Intermedios

//1. Obtener el promedio de precios de productos activos (isActive: true).
const getAveragePrice = (products: Product[]): number => {
    const activeProducts = products.filter((product) => product.isActive === true)
    const totalPrice = activeProducts.reduce((acc, product) => acc + product.price, 0)
    return totalPrice / activeProducts.length
}

//2. Filtrar productos por categoría (category).
function filterByCategory(products: Product[], category: Category): Product[] {
    return products.filter(product => product.category === category);
}

//3. Generar un resumen por categoría con cantidad de productos
function countProductsByCategory(products: Product[]): Record<Category, number> {
    return products.reduce((summary, product) => {
        summary[product.category] = (summary[product.category] || 0) + 1;
        return summary;
    }, {} as Record<Category, number>);
}

//4. Aplicar un descuento del 10% a todos los productos activos (isActive: true).
function applyDiscount(products: Product[], discount: number): Product[] {
    return products.map(product => product.isActive ? { ...product, price: product.price * (1 - discount / 100) } : product);
}

//5. Agrupar productos en activos e inactivos
function groupByActivity(products: Product[]): { active: Product[]; inactive: Product[] } {
    return {
        active: products.filter(product => product.isActive),
        inactive: products.filter(product => !product.isActive),
    };
}

//6. Buscar productos que contengan una palabra en su nombre (name).
function searchProductsByName(products: Product[], keyword: string): Product[] {
    return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
}

//7. Ordenar productos por precio (descendente)
function sortByPriceDesc(products: Product[]): Product[] {
    return products.sort((a, b) => b.price - a.price);
}

//8. Generar un inventario con ID como clave
function toInventoryMap(products: Product[]): Record<number, Product> {
    return products.reduce((inventory, product) => {
        inventory[product.id] = product;
        return inventory;
    }, {} as Record<number, Product>);
}

//9. Validar que todos los productos tienen precios mayores a 0
function arePricesValid(products: Product[]): boolean {
    return products.every(product => product.price > 0);
}

//10. Obtener los 5 productos más recientes
function getLatestProducts(products: Product[], count: number = 5): Product[] {
    return products.sort((a, b) => b.CreatedAt.getTime() - a.CreatedAt.getTime()).slice(0, count);
}