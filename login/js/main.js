let arrayUsers = [];

function cadastro() {
  let nome = document.getElementById("nome").value;
  let password = document.getElementById("password").value;
  let user = {
    nome: nome,
    senha: password,
  };
  for (let i = 0; i < arrayUsers.length; i++) {
    console.log("entrou");
    if (arrayUsers[i].nome == nome) {
      console.log("entrou");
      alert("Usuario ja cadastrado");
    }
  }
  if (nome == "") {
    alert("por favor informe um nome");
  } else if (password == "") {
    alert("por favor informe uma senha");
  } else {
    arrayUsers.push(user);
    localStorage.setItem("login", JSON.stringify(arrayUsers));
    alert("cadastro feito com sucesso");
    window.location.href = "../index.html";
  }
}

function login() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let users = JSON.parse(localStorage.getItem("login"));

  for (let i = 0; i < users.length; i++) {
    if (usuario == users[i].nome && senha == users[i].senha) {
      alert("Seja bem vindo: " + users[i].nome);
      window.location.href = "../html/dashboard.html";
    } else if (usuario != users[i].nome) {
      alert("nome nao cadastrado");
    } else if (senha != users[i].senha) {
      alert("senha incorreta");
    } else {
      alert("Desculpe ocorreu um erro");
    }
  }
}

let produtos = [];

function cadastrarProduto() {
  //pegar as informações digitadas dos usuários pelo id
  //criar o objeto para ser cadastrado
  let produto = {
    nome: document.getElementById("idProduto").value,
    preco: document.getElementById("idPreco").value,
    quantidade: document.getElementById("idQtd").value,
  };

  //1ª buscar os valores no localStorage e preencher o array
  produtos = JSON.parse(localStorage.getItem("Produtos"));
  if (produtos == null) produtos = [];

  //inserir o objeto no array
  produtos.push(produto);

  //armazenar no localStorage convertendo para JSON
  localStorage.setItem("Produtos", JSON.stringify(produtos));

  //inserindo os valores cadastrados na tabela dinamicamente
  let corpoTabela = document.getElementById("idCorpoTabela");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = produto.nome;
  tr.appendChild(td1);
  let td2 = document.createElement("td");
  td2.innerHTML = produto.preco;
  tr.appendChild(td2);
  let td3 = document.createElement("td");
  td3.innerHTML = produto.quantidade;
  tr.appendChild(td3);
  corpoTabela.appendChild(tr);

  alert("Produto cadastrado com sucesso!");
}

function carregarTabela() {
  //Buscar os valores no localStorage e preencher o array
  produtos = JSON.parse(localStorage.getItem("Produtos"));
  //Diferene de null é porque existem valores a serem carregados
  if (produtos != null) {
    let corpoTabela = document.getElementById("idCorpoTabela");

    for (let i = 0; i < produtos.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = produtos[i].nome;
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      td2.innerHTML = produtos[i].preco;
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      td3.innerHTML = produtos[i].quantidade;
      tr.appendChild(td3);

      corpoTabela.appendChild(tr);
      /*console.log('Produto: '+ produtos[i].nome 
      +'\nPreço: '+ produtos[i].preco
      +'\nQtd: ' + produtos[i].quantidade)*/
    }
  }
}

function paginar() {
  window.location.href = "../html/cadastro.html";
}

function voltar() {
  window.location.href = "./index.html";
}
