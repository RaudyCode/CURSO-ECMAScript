// // Declarando 
// class User{};
// // Instancia de una clase
// //const neUser = new User();

// class user {
//     // metodos
//     greeting() {
//         return 'Hello';
//     }
// };

// const gndx = new user();
// console.log(gndx.greeting());
// const gbrailius = new user();
// console.log(gbrailius.greeting());

// class user {
//     constructor(){
//         console.log(){
//             console.log('Nuevo Usuario');
//         }
        
//     }
//     greeting() {
//         return 'Hello';
//     }
// };

// const david = new user();

// this
// class user {
//     constructor(name){
//         this.name= name;
//     }

//     // metodos
//     speak(){
//         return 'Hello';
//     }
//     greeting() {
//         return `${this.speak()} ${this.name}`;
//     }
// };


// const ana = new user('Ana');
// console.log(ana.greeting());

// setters getters
// class user{
//     constructor(name, age){
//         this.name =name;
//         this.age = age;
//     }
//     // metodos
//     speak(){
//         return 'Hello';
//     }
//     greeting() {
//         return `${this.speak()} ${this.name}`;
//     }
//     get uAge() {
//         return this.age;
//     }
//     set uAge(n){
//         this.age=n;
//     }

// }

// const ana = new user('David', 15);
// console.log(ana.uAge);
// console.log(ana.uAge=20);

class persona {
    constructor(name, age, correo, direccion){
        this.name=name;
        this.age=age;
        this.correo=correo;
        this.direccion=direccion;
    }
    precentar(){
        return `Hola! Mi nombre es ${this.name}, tengo ${this.age} Años de edad. Mi correo es ${this.correo} o puedes ir a verme en ${this.direccion}`;
    }
};
const raudy = new persona('Raudy', 20, 'Raudycode@gmail.com', 'el copey');
const braiquin = new persona('Braiquin', 14, 'code@gmail.com', 'Maimon');
console.log(raudy.precentar());
console.log(braiquin.precentar());