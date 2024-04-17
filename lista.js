let listaItens = [];

function adicionar() {
    const valor = document.getElementById('item').value.trim();

    if (valor) {
        listaItens.push(valor);
        atualizarLista();
        document.getElementById('item').value = '';
    } else {
        alert('Insira um valor válido.');
    }
}

function remover(index) {
    listaItens.splice(index, 1);
    atualizarLista();
}

function atualizarLista() {
    const listaHtml = document.getElementById('lista');
    listaHtml.innerHTML = '';

    listaItens.forEach((item, index) => {
        const novoItem = document.createElement('li');
        novoItem.textContent = item;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => remover(index));

        novoItem.appendChild(btnRemover);
        listaHtml.appendChild(novoItem);
    });
}
