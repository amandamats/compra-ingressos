
function comprar(){
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (ingresso == "pista"){
        comprarPista(quantidade);
    } else if (ingresso == "inferior"){
        comprarInferior(quantidade);
    } else if (ingresso = "superior"){
        comprarSuperior(quantidade);
    }
}

function comprarPista(quantidade){
    let qntPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (quantidade > qntPista){
        alert("Quantidade de ingresso indisponível\nQuantidade disponível: " + qntPista);
    } else{
        qntPista -= quantidade;
        document.getElementById("qtd-pista").textContent = qntPista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior(quantidade){
    let qntInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (quantidade > qntInferior){
        alert("Quantidade de ingresso indisponível\nQuantidade disponível: " + qntInferior);
    } else {
        qntInferior -= quantidade;
        document.getElementById("qtd-inferior").textContent = qntInferior;
        alert("Compra realizada com sucesso!");

    }
}

function comprarSuperior(quantidade){
    let qntSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    
    if (quantidade > qntSuperior){
        alert("Quantidade de ingresso indisponível\nQuantidade disponível: " + qntSuperior);
    } else {
        qntSuperior -= quantidade;
        document.getElementById("qtd-superior").textContent = qntSuperior;
        alert("Compra realizada com sucesso!");

    }
}