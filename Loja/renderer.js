// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

/*
clientes.insert({
    nome: 'Rafael Carvalho',
    email: 'rapha.pse@outlook.com'
});
db.save()
*/
function ready(fn){
    if(document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function (){
    document.querySelector('#salvar').addEventListener('click', function(e){
        e.preventDefault();
        let data = {
            nome:document.querySelector('#nome').value,
            cpf:document.querySelector('#cpf').value,
            telefone: document.querySelector('#telefone').value
        }
        clientes.insert(data);
        db.save();
        document.querySelector('#cadastro').reset();
    });
});