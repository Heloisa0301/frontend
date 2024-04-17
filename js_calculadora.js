function limpar(){
    document.getElementById('num1').value = "";
}

function op(valor){
    document.getElementById('num1').value += valor;
}

function calc(){
    let expressao = document.getElementById('num1').value;
    let res = eval(expressao);

    document.getElementById('num1').value = res;
}