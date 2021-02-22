    //COOKIES, utilizamos las cookies para comprobar que un correo electrónico no pueda repetirse, y una vez hecho, te deje mostrar el nombre del usuario que realiza el pedido.
    var arrayCookie = new Array();

    //recogemos los datos del formulario de pedidos  y comprobamos el correo que ingresa el usuario
    function ingresarDatosArray(){

        var usuario = document.formularioPedido.usuario.value;
        var correo = document.formularioPedido.correo.value;
        var tlf = document.formularioPedido.tlf.value;
        var formaPago = document.getElementById("pago").value;
        var elegido = document.getElementById("elegido").value;
        var resultado = "";
        var existe = false;

        if (validarCorreo(correo))
        {
            if (arrayCookie.length != 0)
            {
                for (var i = 0; i < arrayCookie.length; i++)
                {
                    var cookiePartida = arrayCookie[i].split(";");
                    for (var j = 0; j < cookiePartida.length; j++)
                    {
                        x = cookiePartida[j].substr(0, cookiePartida[j].indexOf("="));
                        x = x.replace(/^\s+|\s+$/g,""); //remplaza espacios por cadena vacía
                        if ("Correo" == x)
                        {
                            y = cookiePartida[j].substr(cookiePartida[j].indexOf("=") + 1);  //esto te coge el resultado, ej: nombreText. El contenido digamos
                            if (correo == y)
                            {
                                alert("el correo ya existe");
                                existe = true;
                                vaciarCampos();
                            }
                        }
                    }
                }
            }
            //escribimos las cookies con los datos recogidos y las introducimos en un array de cookies
            if (existe == false)
            {
                document.cookie = "Usuario=" + usuario + ";";
                document.cookie = "Correo=" + correo + ";";
                document.cookie = "Teléfono=" + tlf + ";";
                document.cookie = "FormaPago=" + formaPago + ";";
                document.cookie = "CestaElegida=" + elegido + ";";

                arrayCookie.push(document.cookie);
                //alert(arrayCookie);
                //Mostramos el usuario que ha hecho el pedidio, una vez que hemos comprobado que el correo no exite con anterioridad
                document.getElementById('resumenInformacion').innerHTML = usuario + " GRACIAS POR SU PEDIDO :)";
                vaciarCampos();
            }
        }
        else
            alert("correo no válido");
    }

    //Está función abre una ventana para confirmar que el pedido de cesta al introducir los datos en el formulario se ha realizado con éxito
    function abreVentana2()
    {
	var ventanaRealizar;
	ventanaRealizar = window.open("./ventanaSecundariaPedidoRealizado.html","Enviado","width=300,height=280,top=100,left=300");
	ventanaRealizar.focus();
    }
    //evento de teclado que permite pulsar números exclusivamente, así como las flechas izquierda y derecha, junto con el retroceso
    function keyNum(evento){
        var codigoTeclado = evento.keyCode;

    if (codigoTeclado >= 48 && codigoTeclado <= 57 || codigoTeclado >= 96 && codigoTeclado <= 105)
    {
        return true;
    }
    else if (codigoTeclado == 37 || codigoTeclado == 39 || codigoTeclado == 8 || codigoTeclado == 46)
    {
        return true;
    }
    else
        return false;
    }
    //evento de teclado que permite usar letras exclusivamente, junto con la barra espaciadora, las flechas de dirección y el retroceso
    function keyNombre(evento){
        var codigoLetra = evento.keyCode;

        if (codigoLetra >= 65 && codigoLetra <= 90)
        {
            return true;
        }
        else if (codigoLetra == 32 || codigoLetra == 37 || codigoLetra == 39 || codigoLetra == 8 || codigoLetra == 46)
        {
            return true;
        }
        else
            return false;
    }
    //esta función nos sirve para validar que se utilice un correo electrónico válido
    function validarCorreo(correo){
        var validacion = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
        if (validacion.test(correo))
        {
            return true;
        }         
        else
        {
            return false;
        }         
    }
    //función para validar que solo se puedan introducir 9 carácteres en el teléfono
    function validarFinal(){
        var cantidadEscrita = document.getElementsByName('tlf')[0].value.length;

        if (cantidadEscrita < 9)
        {
            return true;
        }
        else
            return false;
    }

    //Función para vaciar los campos del formulario
    function vaciarCampos(){
        document.formularioPedido.usuario.value = "";
        document.formularioPedido.correo.value = "";
        document.formularioPedido.tlf.value = "";
    }