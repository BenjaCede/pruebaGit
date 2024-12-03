const punto = {
    x:10,
    y:15,
    dibujar(){
        console.log("Dibujando...")

    }
};
if('dibujar' in punto )
    punto.dibujar()
for(let llave of Object.keys(punto))
    console.log(llave, punto[llave])