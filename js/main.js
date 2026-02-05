function calcular() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let s= n1 + n2;
    let r= n1 - n2;
    let m= n1 * n2;
    let d; 
    if (n2 !== 0) {
    d = n1 / n2;} 
    else {
    d = "No se puede dividir por 0";}

    alert ("numero 1: " + n1 + "\n" +
         "numero 2: " + n2 + "\n" + 
         n1 + "+" + n2 + "=" + s + "\n" +
         n1 + "-" + n2 + "=" + r + "\n" +
         n1 + "*" + n2 + "=" + m + "\n" +
         n1 + "/" + n2 + "=" + d )

}
