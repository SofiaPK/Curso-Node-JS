/*Crear una funcion asincrona utilizando ASYNC/AWAIT que consuma
la api de github (https://api.github.com/users) y esta debe contener
dentro de su url el nombre del usuario que se obtenga del archivo 
local (user.json). Recordar usar template string `${}`.
Luego crear un elemento imagen que muestre el avatar "avatar_url" 
del usuario pasado por json. 
Despues agregar esa imagen para ser visualizada en nuestro 
documento HTML document.body.append(img).
*/

async function mostrarAvatar() {
    // lee el archivo JSON
    let resp = await fetch('JS/user.json');
    let usuario = await resp.json();
  
    // leer el usuario de github
    let githubResp = await fetch(`https://api.github.com/users/${usuario.name}`);
    //console.log(githubResp)
    let githubUser = await githubResp.json(); //creamos el usuario
  
    // mostrar el avatar
    let img = document.createElement('img'); //Creo el elemento imagen
    img.src = githubUser.avatar_url; //forma de entrar a la propiedad
    document.body.append(img);
}
mostrarAvatar(); //inicializo la funcion
