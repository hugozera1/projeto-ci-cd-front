const btn = document.getElementById("btnChamarAPI");
const saida = document.getElementById("saida");

const API_URL = "https://projeto-ci-cd-back-lj2k.onrender.com/";

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
