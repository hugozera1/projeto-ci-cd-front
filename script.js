const btn = document.getElementById("btnChamarAPI");
const saida = document.getElementById("saida");

// Substitua pelo seu endpoint do Render
const API_URL = "https://seu-back.onrender.com";

btn.addEventListener("click", async () => {
  try {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    saida.innerText = dados.mensagem;
  } catch (erro) {
    saida.innerText = "Erro ao chamar a API!";
    console.error(erro);
  }
});
