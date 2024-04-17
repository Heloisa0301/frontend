function adicionar(){
    const item = document.getElementById('item');
    const fila = document.getElementById('fila');

    if (item.value.trim() != ""){
        const novoLi = document.createElement('li');
        novoLi.innerHTML = item.value;

        fila.appendChild(novoLi);
        item.value = "";
    }
}

function remover() {
    const fila = document.getElementById('fila');
    const itens = fila.getElementsByTagName('li');
    if (itens.length > 0) {
        fila.removeChild(itens[0]);
    } else {
        alert("A fila está vazia!"); 
    }
}