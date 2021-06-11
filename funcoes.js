function operacao(){
    imc = 0
    estado = "";
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    if(nome=="" || idade==""||peso==""||altura==""){
        alert("Preencha os espacos em branco")
    }else {
        imc = peso/(altura*altura);

     if (imc < 18.5){
        estado = "Peso Baixo"
    }else if(imc < 24.9){
        estado = "Peso saudável"
    }else if(imc < 29.99){
        estado = "Sobrepeso"
    }else if(imc < 34.99){    
        estado = "Obesidade (Grau 1)"
    }else if(imc < 39.99){
        estado = "Obesidade Severa (Grau 2)"
    }else if(imc > 40){
        estado = "Obesidade Mórbida (Grau 3)"    
    }

    } 

    document.getElementById("ficha").innerHTML = "<center>Estado do Paciente</center><br>"+
    "<br>"
    "<b>Nome: </b>"+nome+
    "<br>"
    "<b>Idade: </b>"+idade+
    "<br>"
    "<b>Peso: </b>"+peso+
    "<br>"
    "<b>Altura: </b>"+altura+
    "<br>"
    "<b>IMC: </b>"+imc+
    "<br>"
    "<b>Estado do Paciente: </b>"+estado+

    

{}
}
