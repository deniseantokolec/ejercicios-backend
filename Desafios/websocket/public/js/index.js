const socket = io()

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`)
    }).join(" ");
    document.getElementById('msg').innerHTML = html;
}

socket.on('msg', function(data) { render(data); });


function addMessage(e) {
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}


socket.on('mensajes',(data)=>{
    console.log(data);
    document.getElementById('mgs').innerHTML=data
});
socket.on('respuestaServer',(data)=>{
    alert(data.mensaje)
    document.getElementById('btn').addEventListener('click',()=>{
        let msg =document.getElementById('mensaje').value;
        socket.emit('respuesta',msg)
    })
    
})
socket.on('notificacion',(data)=>{
    data.map(m=>document.getElementById('mgs').innerHTML+=`<p>${m}</p>`)
})