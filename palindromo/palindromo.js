let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", Palindromo);

function Palindromo() {
    let texto = document.getElementById('txtbox').value;
    let textInvertido = inverter(texto);

    if(texto == textInvertido)
        alert(texto + " É UM PALÍNDROMO")
    else
        alert(texto + " NÃO É UM PALÍNDROMO")        
}   

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i --){
        newString += str[i];
    }
    return newString;
}