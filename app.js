// Exemplo simples de pesquisa com resultados fictícios
function pesquisar() {
  const resultadosContainer = document.getElementById("resultados-pesquisa");
  const termoPesquisa = document.querySelector("input").value.trim();

  // Limpa resultados anteriores
  resultadosContainer.innerHTML = "";

  if (termoPesquisa === "") {
      resultadosContainer.innerHTML = "<p>Por favor, digite uma música.</p>";
      return;
  }

  // Dados fictícios para exemplo
  const dados = [
      { titulo: "Ao Único", artista: "Corinhos Evangélicos", link: "https://www.cifraclub.com.br/corinhos-evangelicos/ao-nico/imprimir.html#columns=true" },
      { titulo: "Os Planos de Deus", artista: "Samuel Messias", link: "https://www.cifraclub.com.br/samuel-messias/os-planos-de-deus-barquinho/imprimir.html" },
      { titulo: "Escudo", artista: "Voz da Verdade", link: "https://www.cifraclub.com.br/voz-da-verdade/escudo/imprimir.html" }
  ];

  // Filtrando resultados com base no termo de pesquisa
  const resultadosFiltrados = dados.filter(item =>
      item.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  if (resultadosFiltrados.length === 0) {
      resultadosContainer.innerHTML = "<p>Nenhuma cifra encontrada.</p>";
      return;
  }

  // Exibindo resultados filtrados
  resultadosFiltrados.forEach(item => {
      const div = document.createElement("div");
      div.className = "item-resultado";
      div.innerHTML = `
          <h2><a href="${item.link}" target="_blank">${item.titulo}</a></h2>
          <p class="descricao-meta">${item.artista}</p>
          <a href="${item.link}" target="_blank">Mais informações</a>
      `;
      resultadosContainer.appendChild(div);
  });
}
