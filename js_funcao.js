function converter(){
    let cel = document.getElementById('celso').value;
    let ferrari = document.getElementById('ferrari').value;

    if(cel != ""){
        let celso = parseFloat(cel);
        let result = (celso* 9/5) + 32;
        document.getElementById('ferrari').value=result;
    }
}
