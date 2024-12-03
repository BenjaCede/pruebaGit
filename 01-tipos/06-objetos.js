let nombre = "Luffy";
let anime = "One piece";
let edad = 19;

let personaje = {
    nombre: "Luffy",
    anime: "One piece",
    edad: 21,
};
console.log(personaje);
console.log(personaje.nombre)
console.log(personaje['anime'])

personaje['nombre'] = "Nami";
console.log(personaje)

delete personaje.anime
console.log(personaje)