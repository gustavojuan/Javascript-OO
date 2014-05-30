;
//alert("Hola esta funcionando");

function sumar(num1,num2)
{
    return num1 + num2;
}
function pulsarBotoncito()
{
    //alert("Has pulsado el botoncito");
    var resultado = sumar(47,50);
    document.getElementById("resultado").innerHTML = resultado;
}

function alCargarElDocumento()
{
	var boton = document.getElementById("botoncito");
    document.getElementById("parrafito").innerHTML = "CAMBIO DE TEXTO";
	boton.onclick = pulsarBotoncito;
}

window.onload = alCargarElDocumento;
