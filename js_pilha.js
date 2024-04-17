function adicionar() {
    const item = document.getElementById('item');
    const pilha = document.getElementById('pilha');

    if (item.value.trim() != "") {
        const novoLi = document.createElement('li');
        novoLi.innerHTML = item.value;

        if (pilha.firstChild) {
            pilha.insertBefore(novoLi, pilha.firstChild);
        } else {
            pilha.appendChild(novoLi);
        }

        item.value = "";
    }
}


function remover() {
    const pilha = document.getElementById('pilha');
    const itens = pilha.getElementsByTagName('li');
    if (itens.length > 0) {
        pilha.removeChild(itens[0]);
    } else {
        alert("A pilha está vazia!"); 
    }
}