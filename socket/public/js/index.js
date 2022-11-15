const socket = io();

//capturamos el mensaje
const btnSend = document.getElementById('send-message');
const message = document.getElementById('message-area');
const chatBox = document.getElementById('chat-box');
const salas = document.getElementById('salas');

//funcion enviar mensaje
btnSend.addEventListener('click', ()=>{
    if(message.value == ""){
        message.focus();
    }else{
        chatBox.innerHTML += `
        <div class="chat from-message">
            <div class="detalles">
                <p>${message.value}</p>
            </div>
        </div>
        `;
        //manejo de scroll
        socket.emit('message', {msg: message.value});
        message.value = null;
    }
})

//funcion enviar con ENTER
function sendEnterKey(e){
    let enterKey = e.key;
    if(enterKey === 'Enter'){
        btnSend.click();
    }
}
/*El evento keydown se produce cuando se presiona una tecla */
window.onkeydown = sendEnterKey;

salas.addEventListener('click', ()=>{
    console.log('soy sala')
})

//listener socket
socket.on('message', (data)=>{
    chatBox.innerHTML +=`
    <div class="chat to-message">
        <div class="detalles">
            <p>${data.msg}</p>
        </div>
    </div>
    `;
})
/*
//aca capturo el evento en el html
salas.addEventListener('click', ()=>{
    console.log('soy sala')
})
*/
socket.on('salaUsuarios', (salas)=>{
    console.log(salas)
})