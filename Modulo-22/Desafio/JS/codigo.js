/*DESAFIO FETCH
Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar 
en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y 
debe contener las propiedades en sus columnas de Id, name, username, email y address-street.
*/
const listaDeUsuarios = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const usuarios = await response.json()
    //console.log(usuarios)
    let tabla = ``;
    usuarios.forEach((usuario, index) => {
        tabla += `<tr>
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.username}</td>
        <td>${usuario.email}</td>
        <td>${usuario.address.street}</td>
        </tr>
        `
    });
    document.getElementById('tabla_de_usuarios').innerHTML = tabla;
}
listaDeUsuarios();