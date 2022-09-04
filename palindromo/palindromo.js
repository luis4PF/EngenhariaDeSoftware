let verify = document.getElementById("verify");
verify.addEventListener("click", Palindromo);

function Palindromo() {
    let text = document.getElementById('textbox').value;
    let textInverted = inverter(text);

    if(text == textInverted)
        alert(text + " É UM PALÍNDROMO")
    else
        alert(text + " NÃO É UM PALÍNDROMO")        
}   

function inverter(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i --){
        newString += str[i];
    }
    return newString;
}