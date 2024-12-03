const user = {id: 1 };
user.name  = "Benjamin"
user.guardar = function (){
    console.log("Guardando", user.name);
}

user.guardar();

const user = Object.freeze({id: 1 }); //Sus variables son fijas totalmente y no se puede agregar nada.

const user = Object.freeze({id: 1 }); //Sus variables son fijas pero se pueden cambiar.