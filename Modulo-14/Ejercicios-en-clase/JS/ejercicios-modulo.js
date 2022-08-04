    var boton = document.getElementsByTagName('button');
    
    for (var i = 0; i < boton.length; i++){
        boton[i].onclick = function(){cambiarColor(this.innerHTML)}
        }
    function cambiarColor(colores){
        alert('El color es ' + colores);
        document.getElementById('contenedor').style.backgroundColor = colores
        document.getElementById('contenedor').style.width = '190px'
    }

