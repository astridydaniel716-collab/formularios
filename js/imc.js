function calculo() {
    kg = parseFloat(document.getElementById("kg").value);
    alt= parseFloat(document.getElementById("alt").value);
    
    imc = kg / (alt * alt);

    alert( "IMC: " + imc 

    )

    }