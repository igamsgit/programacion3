const numeros1 = [2, 4, 6, 8, 10];
const resultado = numeros1.map(a=>a*2);
//console.log(resultado);

const palabras = ["sol", "montaña", "cielo", "estrella", "luz"];
const palabrasLargas = palabras.filter(pala=>pala.length>5);
//console.log(palabrasLargas);

const numeros2 = [10, 25, 47, 58, 90, 12];
const mayorDe50 = numeros2.find(mayor=>mayor>50);
//console.log(mayorDe50);

const numeros3 = [5, -3, 12, 8, -1];
const hayNegativos = numeros3.some(negativo=>negativo<0);
//console.log(hayNegativos);

const numeros4 = [10, 20, 30, 40];
const sumaTotal = numeros4.reduce((a,b)=>(a+b),0);
//console.log(sumaTotal);

function combinarArrays(nombre:string[], apellido:string[]) {
    return nombre.concat(apellido);
}

type Nombres=string[]

type Apellidos=string[]


const nombre: Nombres = ["Ana", "Luis", "Carlos"];
const apellido: Apellidos = ["Gómez", "Pérez", "Rodríguez"];

const nombresCompletos = combinarArrays(nombre, apellido);
console.log(nombresCompletos);
// Output esperado: ["Ana", "Luis", "Carlos", "Gómez", "Pérez", "Rodríguez"]