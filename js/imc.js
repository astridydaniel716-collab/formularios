function calculo() {
    kg = parseFloat(document.getElementById("kg").value);
    alt= parseFloat(document.getElementById("alt").value);
    
    imc = kg / (alt * alt);
    imc = imc.toFixed(2);
if (imc < 18.5) {
   alert("usted esta en bajo peso con: " + imc + " imc") 
} else if (imc >= 18.5 && imc < 24.9){
   alert("usted esta en peso normal con: " + imc + " imc") 
}
    else if (imc >= 25 && imc < 29.9){
   alert("usted esta en sobrepeso con: " + imc + " imc")
}
else{
    alert("usted esta en obesidad con: " + imc + " imc")
}

}
    