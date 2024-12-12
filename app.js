function pesquisar() {
//console.log(dados);
let section = document.getElementById("resultados-pesquisa");
let  campoPesquisa = document.getElementById("campo-pesquisa");
if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Voçê prescisa digitar o nome da musica"</p
      return
}
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let tom = "";
let titulo = "";
let tags = "";

for (let dado of dados) {
  titulo = dado.titulo.toLoLowerCase()
  tom = dado.tom.toLowerCase()
  tags = dado.tags.toLowerCase()

if (titulo.includes(campoPesquisa)) || resultados.includes(campoPesquisa)  || tags.includes(campoPesquisa)

resultados += `

}
  resultados += `
    <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.tom}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
    `;
}
section.innerHTML = resultados; 
}