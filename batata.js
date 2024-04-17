function alerta(){
    alert("parabens ligou");
}

function hello(){
    document.getElementById("hello").innerHTML="funcionou";
}

function sim(){
    alert("sai fora");
}

function nao(){
    var sim = prompt("gracas a deus");
    while(sim!="sim" && sim!="SIM"){
        sim = prompt("que bom");
    }
    alert("grazadeus");
}