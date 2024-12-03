let user = {
    id: 1,
    nombre: "Benjamin Cedeño",
    edad: 17
};

for(let prop in user)
{
    console.log(prop, user[prop])
}

let animales = ["caballo","Vaca","Cerdo"];
for(indice in animales)
{
    console.log(Number(indice)+1, animales[indice]);
}