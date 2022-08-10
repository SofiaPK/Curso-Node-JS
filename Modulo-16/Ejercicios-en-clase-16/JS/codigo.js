/*document.nodeType es de solo lectura y retorna el valor 
positivo/entero representado en el nodo

ACCEDER A LOS NODOS DEL DOM
1) document.getElementById("title");
2) document.getElementsByClassName("item");
3)document.getElementsByTagName("div");
4)document.querySelector(".item");
5) document.querySelectorAll(".item");
*/

/*DOM SCRIPTING
<div class="item">
    <h2>Elemento 1</h2>
    <p>Descripcion del elemento 1</p>
</div>
*/

const nuevoDiv = document.createElement("div");
nuevoDiv.classList.add("item");

const h2 = document.createElement("h2");
h2.textContent = "Elemento 5";
nuevoDiv.appendChild(h2)

const p = document.createElement("p");
p.textContent = "Descripcion del elemento 5";
nuevoDiv.appendChild(p);

const contenedor = document.querySelector(".contenedor");
contenedor.appendChild(nuevoDiv);  
//agregamos nuevoDiv al div padre 'contenedor'

/* 
Eliminamos 
nuevoDiv.remove()

nuevoDiv.removeChild(h2)

Ver el nodo padre

nuevoDiv.parentElement (1 nivel)
nuevoDiv.parentElement.parentElement (2 nivel)

--Ver elemento previo
contenedor.previuousSibling

--Ver elemento posterior
contenedor.nextElementSibling
*/

