function mudarCor() {
    const body = document.querySelector('body');
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
  }

  function adicionarItem() {
    const input = document.querySelector('input[type="text"]');
    const valor = input.value;
    input.value = '';
    
    const lista = document.querySelector('ul');
    const novoItem = document.createElement('li');
    novoItem.textContent = valor;   
    
    lista.appendChild(novoItem);
  }

  function trocarImagem() {
    const img = document.getElementById('myImage');
    if (img.getAttribute('src') === './img/lobo1.jpg') {
      img.setAttribute('src', './img/lobo2.jpg');
      img.setAttribute('alt', 'Imagem 2');
    } else {
      img.setAttribute('src', './img/lobo1.jpg');
      img.setAttribute('alt', 'Imagem 1');
    }
  }

  function exibirMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Essa é a mensagem que deve ser exibida.";
  }

  function ocultarElemento() {
    const elemento = document.querySelector("#elemento");
    elemento.style.display = "none";
  }