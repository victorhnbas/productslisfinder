const cadastar = document.getElementById("cadastrar");

cadastar.addEventListener("click", function(){
    const divCadastrar = document.getElementById("divCadastrar");
    const fechar = document.getElementById("fechar");

    divCadastrar.style.display = "flex"

    fechar.addEventListener("click", function(){
        divCadastrar.style.display = "none"
    });

});

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", function() {
    document.getElementById("saida").innerHTML = '';
    const input = document.getElementById("inputProdutos");
    const divCadastrar = document.getElementById("divCadastrar");

    if (!input.value) {
        document.getElementById("saida").innerHTML = `Insira algum conteúdo dentro do campo!`;
        return;
    } else{
        divCadastrar.style.display = "none";
    }

    const cardProdutos = document.createElement("div");
    cardProdutos.className = "cardProdutos";
    const textoProduto = document.createElement("p");
    textoProduto.textContent = input.value;

    const btnExcluir = document.createElement("button");
    btnExcluir.innerHTML = `<i class="fa-solid fa-delete-left"></i>`;
    btnExcluir.className = "btnExcluir";

    btnExcluir.addEventListener("click" ,function(){
        cardProdutos.remove();
    }); 

    const btnEditar = document.createElement("button");
    btnEditar.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    btnEditar.className = "btnEditar";
    const divAlterar = document.getElementById("divAlterar");
    const btnAlterar = document.getElementById("btnAlterar");
    const fechar2 = document.getElementById("fechar2");
    document.getElementById("saida2").innerHTML = '';

    fechar2.addEventListener("click", function(){
        divAlterar.style.display = "none";
        
    });

    btnEditar.addEventListener("click", function(){
        divAlterar.style.display = "flex";
    });

    btnAlterar.addEventListener("click", function(){
        const inputAlterar = document.getElementById("inputAlterar");
        
        if(!inputAlterar.value){
            document.getElementById("saida2").innerHTML = "Insira algo no campo!";
            return;
        }else{
            textoProduto.textContent = inputAlterar.value;
            divAlterar.style.display = "none";
        }

    });

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Lembre-se de adicionar 1, pois os meses começam do zero
    const ano = data.getFullYear();
    const dataFeitaTexto = dia + '/' + mes + '/' + ano;

    const dataFeita = document.createElement("p");
    dataFeita.className = "textData";
    dataFeita.textContent = dataFeitaTexto;

    cardProdutos.appendChild(textoProduto);
    cardProdutos.appendChild(dataFeita);
    cardProdutos.appendChild(btnExcluir);
    cardProdutos.appendChild(btnEditar);

    document.getElementById("containerProdutos").appendChild(cardProdutos);
});

const inputPesquisa = document.getElementById("input");
const containerProdutos = document.getElementById("containerProdutos");
const produtos = document.getElementsByClassName("cardProdutos");

inputPesquisa.addEventListener("keyup", function(){
    var termoPesquisa = inputPesquisa.value.toLowerCase();

    for(let i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var nomeProduto = produto.textContent.toLocaleLowerCase();

        if(nomeProduto.includes(termoPesquisa)){
            produto.style.display = "flex";
        }else{
            produto.style.display = "none";
        }
    }
});
