/*
FALSE
false
0
''
null
undefined
Nan
*/

function f1(){
    console.log("Soy funcion 1");
    return true;
}

function f2(){
    console.log("Soy funcion 2");
    return true;
}

x = f1() && f2();
console.log(x);