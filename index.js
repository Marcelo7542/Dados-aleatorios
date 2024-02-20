function Dado() {
  const num = document.getElementById("numero").value;
  const imagem = document.getElementById("imagens");
  const resultado = document.getElementById("resultado");
  const values = [];
  const imagens = [];

  for (let i = 0; i < num; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    imagens.push(`<img src="${value}.png">`);
  }
  imagem.innerHTML = imagens;
  resultado.textContent = `Dado Numero: ${values.join(', ')}`;
}
