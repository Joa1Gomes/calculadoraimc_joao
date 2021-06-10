function operacao(){
    imc = 0
    estado = "";
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    if(nome=="" || idade==""||peso==""||altura==""){
        document.getElementById('erro').style.display = "block";
    
    } else{
        imc = peso/ (altura*altura);
    }



}