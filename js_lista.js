const nome = document.getElementById('nome');
const botao = document.getElementById('add');
const lista = document.getElementById('lista');
const listaconv = [];

botao.addEventListener('click', function(){
    listaconv.push(nome.value);
    nome.value = "";
    console.log(listaconv);
    printF();
});

function printF(){
    lista.innerHTML = "";
    for (let index = 0; index < listaconv.length; index++){
        const li = document.createElement('li');
        li.textContent = listaconv[index];
        lista.appendChild(li);
    }
}

printF();