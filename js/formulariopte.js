function valida() {
    a = document.getElementById("tnombre").value
    b = document.getElementById("tid").value
    c = document.getElementById("temail").value
    alert(a + " " + b + " " + c)
    alert("nombres: " + a + "\n"
        + "ID: " + b + "\n"
        + "Correo: " + c
    )
}