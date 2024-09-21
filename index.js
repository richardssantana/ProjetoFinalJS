// Array de celulares
const celulares = [
    {
        nome: "iPhone 12",
        preco: 4500,
        descricao: "Tela de 6.1 polegadas, processador A14 Bionic",
        imagem: "images/iphone12.jpg"
    },
    {
        nome: "Samsung Galaxy S21",
        preco: 4000,
        descricao: "Tela de 6.2 polegadas, processador Exynos 2100",
        imagem: "images/galaxys21.jpg"
    },
    {
        nome: "Xiaomi Mi 11",
        preco: 3500,
        descricao: "Tela de 6.81 polegadas, processador Snapdragon 888",
        imagem: "images/xiaomi11.jpeg"
    },
    {
        nome: "OnePlus 9",
        preco: 3700,
        descricao: "Tela de 6.55 polegadas, processador Snapdragon 888",
        imagem: "images/oneplus9.jpg"
    }
];

// Selecionar o container da lista de produtos
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');

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
            <p>Preço: R$ ${celular.preco}</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        `;

        // Adicionar o cartão ao container da lista de produtos
        productList.appendChild(productCard);

        // Adicionar evento de clique no botão "Adicionar ao Carrinho"
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            adicionarAoCarrinho(celular);
        });
    });
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

// Renderizar os celulares ao carregar a página
renderizarCelulares();
