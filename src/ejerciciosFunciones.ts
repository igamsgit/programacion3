import { filtrar } from './laboratorio1';
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
//1
const sortUsersByCreatedAt = (users: User[]) => {
    return users.sort((a: User, b: User) => b.createdAt.getTime() - a.createdAt.getTime())
}
console.log(sortUsersByCreatedAt(allUser))

//2
const findUserByEmail = (users: User[], email: string) => {
    return users.find((user) => user.email === email) ?? undefined
}

//3
const email = findUserByEmail(allUser, "adrian@gmail.com");

const countUsersByInitial = (users: User[], letter: string) => {
    return users.filter((user) => user.name[0] === letter)

}

//4
function usuariosInactivos(users: User[], before: Date): User[] {
    return users.filter((user) => user.createdAt < before && user.isActive === false)
}

const userFilter = usuariosInactivos(allUser, new Date("02/10/2009"))

//5
const usersActive = (users: User[]) => {
    return users.filter((User) => User.isActive).map((user) => user.email)
}

//6
const getUserStatusSummary = (users: User[]) => {
    const active = users.filter((user) => user.isActive == true).length
    const inactive = users.filter((user) => user.isActive == false).length

    return ``
}

//7
const hasInvalidEmails = (users: User[]): boolean => {
    return users.some((user) => !user.email.includes("@") || !user.email.includes(".")
    )
}


