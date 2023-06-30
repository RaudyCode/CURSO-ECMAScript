// enahced object literals
// function newUser(user, age, country){
//     return {
//         user: user,
//         age:age,
//         country: country
//     }
// }

// si se llaman igual simplemente no le agregamos el valor ni los dos puntos 
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('raudy', 20, 'el copey', 1));
