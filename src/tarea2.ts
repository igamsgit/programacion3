const usuarios = [
    {
    id: "1" ,
    name: "Andres" ,
    email: "andres@gmail.com",
    password: "1234",
    role: "admin",
    isActive: true ,
    createAt: new Date(),
    updateAt: new Date(),
}];

export const filtro= usuarios.map((user)=>{
    const gmail= user.email.includes("@gmail.com");
    const name = user.name
    if (gmail) {
        return{gmail,name}    
    }
    });

    //export const filtro= usuarios.map((user)=>{
       // const gmail= user.email.includes("@gmail.com");
        //if (gmail) {
         //   return{gmail:user.email,name:user.name}    
         
       // }
        //});
export const activos= usuarios.filter(us=>us.isActive==(true))

export const borrar= usuarios.slice(2/*indice*/,1/*cantidad*/)

export const buscar= usuarios.find((user)=>{
    const id= user.id.includes("1");

}

)

export const viejos= usuarios.filter(use=>use.createAt<new Date("03/27/25"))



