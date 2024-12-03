function crearUsuario(nombre, email)
{
    return{
    email,
    nombre,
    activo: true,
    recuperarClave: function() {
        console.log("Recuperando clave...");
        
    }
}
}

let user1 = crearUsuario("Benjamin","benjamin.cedenogonzabay@gmail.com")
let user2 = crearUsuario("ivan","ivancedenogonzabay@gmail.com")

console.log(user1,user2)