    ///////////////AYAX Y DOM///////////////////
    
    //Utilizaremos AYAX para generar el contenido de las cestas al pasar el ratón por encima de los botones de cesta
    if (window.XMLHttpRequest) 
    {
        httpRequest = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //El contenido de cada cesta se encuentra en un archivo json 
    httpRequest.open("GET", 'cestas.json', false);
        
    httpRequest.send();

    var lista = httpRequest.responseText;

    //Utilizamos un evento de ratón para que al posarnos encima del botón, llame al json y muestre el contenido utilizando DOM
    function respuesta(){
        var jsonDoc = JSON.parse(lista);
          
        if (document.getElementById('cesta1').childNodes.length == 1)
        {
            var h = document.createElement("h1");                       //Creamos con DOM un enunciado h1, una lista y una imagen para cada gesta, llamando al JSON

            var text = document.createTextNode(jsonDoc.Cestas[0].Nombre);
            h.appendChild(text);
            document.getElementById("cesta1").appendChild(h);
        }
                              
        if (document.getElementById('lista1').childNodes.length == 1)
        {
            for (var i = 0; i < jsonDoc.Cestas[0].Contenido.length; i++)
            {
                var li = document.createElement("li");
    
                var text = document.createTextNode(jsonDoc.Cestas[0].Contenido[i]);
                li.appendChild(text);
                document.getElementById("lista1").appendChild(li);
            }
        }

        if (document.getElementById('img1').childNodes.length == 1)
        {
            var img = document.createElement("img");
            var atributo = document.createAttribute("src");

            atributo.value = jsonDoc.Cestas[0].Foto;
            img.setAttributeNode(atributo);
            document.getElementById("img1").appendChild(img);
        }
            
        if (document.getElementById('pintar1').style.visibility == "hidden")
        {
            document.getElementById('pintar1').style.visibility = "visible";
        }

        document.getElementById('x1').style.visibility = "visible";
    }

    function respuesta2(){
        var jsonDoc = JSON.parse(lista);

        if (document.getElementById('cesta2').childNodes.length == 1)
        {
            var h = document.createElement("h1");

            var text = document.createTextNode(jsonDoc.Cestas[1].Nombre);
            h.appendChild(text);
            document.getElementById("cesta2").appendChild(h);
        }
        
        if (document.getElementById('lista2').childNodes.length == 1)
        {
            for (var i = 0; i < jsonDoc.Cestas[1].Contenido.length; i++)
            {
                var li = document.createElement("li");

                var text = document.createTextNode(jsonDoc.Cestas[1].Contenido[i]);
                li.appendChild(text);
                document.getElementById("lista2").appendChild(li);
            }
        }

        if (document.getElementById('img2').childNodes.length == 1)
        {
            var img = document.createElement("img");
            var atributo = document.createAttribute("src");

            atributo.value = jsonDoc.Cestas[1].Foto;
            img.setAttributeNode(atributo);
            document.getElementById("img2").appendChild(img);
        }

        if (document.getElementById('pintar2').style.visibility == "hidden")
        {
            document.getElementById('pintar2').style.visibility = "visible";
        }

        document.getElementById('x2').style.visibility = "visible";
    }

    function respuesta3(){
        var jsonDoc = JSON.parse(lista);

        var h = document.createElement("h1");

        if (document.getElementById('cesta3').childNodes.length == 1)
        {
            var text = document.createTextNode(jsonDoc.Cestas[2].Nombre);
            h.appendChild(text);
            document.getElementById("cesta3").appendChild(h);

        }
        
        if (document.getElementById('lista3').childNodes.length == 1)
        {
            for (var i = 0; i < jsonDoc.Cestas[2].Contenido.length; i++)
            {
                var li = document.createElement("li");

                var text = document.createTextNode(jsonDoc.Cestas[2].Contenido[i]);
                li.appendChild(text);
                document.getElementById("lista3").appendChild(li);
            }
        }

        if (document.getElementById('img3').childNodes.length == 1)
        {
            var img = document.createElement("img");
            var atributo = document.createAttribute("src");

            atributo.value = jsonDoc.Cestas[2].Foto;
            img.setAttributeNode(atributo);
            document.getElementById("img3").appendChild(img);
        }

        if (document.getElementById('pintar3').style.visibility == "hidden")
        {
            document.getElementById('pintar3').style.visibility = "visible";
        }

        document.getElementById('x3').style.visibility = "visible";
    }

    //Función para ocultar el contenido generado
    function ocultarCesta(id, id2){
        document.getElementById(id).style.visibility = "hidden";
        document.getElementById(id2).style.visibility = "hidden";
    }