const carrosselWrapper = document.querySelector(".carrossel-wrapper");
const carrosselContainer = document.querySelector(".carrossel-container");
const botaoAnterior = document.querySelector(".carrossel-anterior");
const botaoProximo = document.querySelector(".carrossel-proximo");

let produtoLargura = 250; // largura do produto fixada no CSS
let posicaoAtual = 0;

// Ajusta a largura do produto para mobile dinamicamente
function atualizarProdutoLargura() {
  if (window.innerWidth <= 768) {
    produtoLargura = carrosselWrapper.querySelector(".produto").offsetWidth;
  } else {
    produtoLargura = 250;
  }
}

// Atualiza o transform para desktop (carrossel com botões)
function atualizarCarrossel() {
  if (window.innerWidth > 768) {
    // Limita a posição para não sair dos limites
    const maxPosicao =
      carrosselWrapper.scrollWidth - carrosselWrapper.clientWidth;
    posicaoAtual = Math.min(Math.max(posicaoAtual, 0), maxPosicao);
    carrosselWrapper.style.transform = `translateX(${-posicaoAtual}px)`;
  } else {
    // No mobile, deixa o scroll natural, sem transform
    carrosselWrapper.style.transform = "none";
    posicaoAtual = 0;
  }
}

botaoAnterior.addEventListener("click", () => {
  atualizarProdutoLargura();
  posicaoAtual -= produtoLargura + 20; // 20 é margin-right
  atualizarCarrossel();
});

botaoProximo.addEventListener("click", () => {
  atualizarProdutoLargura();
  posicaoAtual += produtoLargura + 20;
  atualizarCarrossel();
});

window.addEventListener("resize", () => {
  atualizarProdutoLargura();
  atualizarCarrossel();
});

// Inicializa
atualizarProdutoLargura();
atualizarCarrossel();
