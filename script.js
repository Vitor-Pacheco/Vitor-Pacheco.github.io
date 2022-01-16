const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#javascript");

const hiddenDiv = document.querySelector(".hidden-div");
const titulo = document.querySelector("#titulo-skills");
const texto = document.querySelector("#texto-skills");

const botao = document.querySelector("#button-skills");

html.addEventListener ('click', () => {
  hiddenDiv.className = "show-div";
  titulo.innerHTML = "HTML";
  texto.innerHTML = "HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: 'Linguagem de Marcação de Hipertexto' é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo. Um documento é visto como um conjunto de eventos concorrentes dependentes de tempo (como áudio, vídeo, etc.), conectados por hiperligações (em inglês: hyperlink e link)."
});

css.addEventListener ('click', () => {
  hiddenDiv.className = "show-div";
  titulo.innerHTML = "CSS";
  texto.innerHTML = "Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. Assim, quando se quiser alterar a aparência dos documentos vinculados a este arquivo CSS, basta modifica-lo.";
});

js.addEventListener ('click', () => {
  hiddenDiv.className = "show-div";
  titulo.innerHTML = "JavaScript";
  texto.innerHTML = "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js.";
});

botao.addEventListener ('click', () => {
  hiddenDiv.className = "hide-div";
})