function Cualesmayor(a,b)
{
    if(a > b)
        return a
    if(a<b)
        return b
    if(a==b)
        return "SON IGUALES"
}
let mayor = Cualesmayor(10,5);
console.log( mayor);