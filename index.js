// Array de celulares
const celulares = [
    {
        nome: "iPhone 12",
        preco: 4500,
        descricao: "Tela de 6.1 polegadas, processador A14 Bionic",
        imagem: "images/iphone12.jpg",
        spec: "64GB, 4GB RAM, Câmera dupla de 12MP"
    },
    {
        nome: "Samsung Galaxy S21",
        preco: 4000,
        descricao: "Tela de 6.2 polegadas, processador Exynos 2100",
        imagem: "images/galaxys21.jpg",
        spec: "128GB, 8GB RAM, Câmera tripla de 12MP"
    },
    {
        nome: "Xiaomi Mi 11",
        preco: 3500,
        descricao: "Tela de 6.81 polegadas, processador Snapdragon 888",
        imagem: "images/xiaomi11.jpeg",
        spec: "256GB, 8GB RAM, Câmera tripla de 108MP"
    },
    {
        nome: "OnePlus 9",
        preco: 3700,
        descricao: "Tela de 6.55 polegadas, processador Snapdragon 888",
        imagem: "images/oneplus9.jpg",
        spec: "128GB, 8GB RAM, Câmera tripla de 48MP"
    }
];

// Textos de venda
const textosVenda = {
    "iPhone 12": "O iPhone 12 é a escolha perfeita para quem busca desempenho e design icônico. Equipado com o chip A14 Bionic, o mais rápido do mercado, e uma tela OLED de 6.1 polegadas, ele entrega qualidade visual impressionante. Com câmera dupla de 12MP, suas fotos e vídeos terão cores vívidas e detalhes nítidos. Sua construção em vidro e alumínio garante durabilidade e resistência, tudo isso por um preço justo.",
    
    "Samsung Galaxy S21": "O Samsung Galaxy S21 é para quem deseja estar à frente. Com seu processador Exynos 2100 e 8GB de RAM, você terá desempenho extremo para multitarefas e jogos. A tela de 6.2 polegadas Dynamic AMOLED 2X oferece a melhor experiência visual, enquanto a câmera tripla de 12MP captura todos os momentos com qualidade profissional. Inovação e estilo em um só smartphone.",
    
    "Xiaomi Mi 11": "Com o Xiaomi Mi 11, você eleva sua experiência mobile a outro nível. Ele possui uma tela de 6.81 polegadas com resolução Quad HD+ para imagens incrivelmente detalhadas. O processador Snapdragon 888 e 8GB de RAM proporcionam velocidade e fluidez em qualquer tarefa. Sua câmera de 108MP faz dele uma verdadeira máquina de fotografia, ideal para capturar seus melhores momentos com precisão.",
    
    "OnePlus 9": "O OnePlus 9 combina potência e elegância. Equipado com o processador Snapdragon 888, ele garante alto desempenho e eficiência energética. A tela de 6.55 polegadas com taxa de atualização de 120Hz é perfeita para quem busca fluidez em jogos e vídeos. Sua câmera tripla, desenvolvida em parceria com a Hasselblad, eleva suas fotos a um novo patamar de qualidade."
};

// Selecionar o container da lista de produtos e do carrinho
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const carouselLink = document.getElementById('carousel-link'); // Link do carrossel
const carouselImg = document.getElementById("carousel-img"); // Imagem do carrossel
const carouselName = document.getElementById("carousel-name"); // Nome do celular
let indiceImagemAtual = 0; // Índice da imagem atual do carrossel

// Função para renderizar os celulares na página
function renderizarCelulares() {
    celulares.forEach(celular => {
        // Criar o cartão do celular
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Preencher o conteúdo do cartão
        productCard.innerHTML = `
            <img src="${celular.imagem}" alt="${celular.nome}">
            <h3>${celular.nome}</h3>
            <p>${celular.descricao}</p>
            <p>Especificações: ${celular.spec}</p>
            <p>Preço: R$ ${celular.preco}</p>
            <button class="detalhes-produto">Ver Detalhes</button>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        `;

        // Adicionar o cartão ao container da lista de produtos
        productList.appendChild(productCard);

        // Adicionar evento de clique no botão "Ver Detalhes"
        productCard.querySelector('.detalhes-produto').addEventListener('click', () => {
            // Redirecionar para a página de detalhes do produto com o nome do produto na URL
            window.location.href = `produto.html?produto=${encodeURIComponent(celular.nome)}`;
        });

        // Adicionar evento de clique no botão "Adicionar ao Carrinho"
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            adicionarAoCarrinho(celular);
        });
    });
}

// Função para mudar a imagem do carrossel
function mudarImagem(direcao) {
    // Atualiza o índice da imagem atual
    indiceImagemAtual += direcao;

    // Verifica se o índice está fora dos limites
    if (indiceImagemAtual < 0) {
        indiceImagemAtual = celulares.length - 1; // Volta para a última imagem
    } else if (indiceImagemAtual >= celulares.length) {
        indiceImagemAtual = 0; // Volta para a primeira imagem
    }

    // Atualiza a imagem do carrossel e o nome do celular
    const celularAtual = celulares[indiceImagemAtual];
    carouselImg.src = celularAtual.imagem;
    carouselImg.alt = celularAtual.nome;
    carouselLink.href = `produto.html?produto=${encodeURIComponent(celularAtual.nome)}`; // Atualiza o link
    carouselName.textContent = celularAtual.nome; // Atualiza o nome do dispositivo
}

// Inicializa o carrossel com a primeira imagem
function renderizarCarrossel() {
    mudarImagem(0); // Carrega a primeira imagem no carrossel
}

// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um celular ao carrinho
function adicionarAoCarrinho(celular) {
    carrinho.push(celular);
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    // Limpar o conteúdo do carrinho antes de atualizar
    cartList.innerHTML = '';

    // Atualizar a lista de itens do carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco}`;
        cartList.appendChild(li);
    });

    // Atualizar o total
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    cartTotal.textContent = total;
}

// Renderizar os celulares e o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCelulares();
    renderizarCarrossel();
});

// Adicionar eventos para os botões do carrossel
document.querySelector('.left-btn').addEventListener('click', () => mudarImagem(-1));
document.querySelector('.right-btn').addEventListener('click', () => mudarImagem(1));
