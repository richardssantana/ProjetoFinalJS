const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Apple iPhone 16 Plus",
    price: 9024.05,
    colors: [
      {
        code: "black",
        img: "./img/iphone.png",
      },
      {
        code: "#A1B3F7",
        img: "./img/iphone2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 9590.00,
    colors: [
      {
        code: "lightgray",
        img: "./img/samsung.png",
      },
      {
        code: "#DBE6D2",
        img: "./img/samsung2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Motorola Razr 50 Dobrável",
    price: 4949.10,
    colors: [
      {
        code: "green",
        img: "./img/motorola.png",
      },
      {
        code: "darkblue",
        img: "./img/motorola2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Xiaomi Redimi Note 13 Pro",
    price: 2464.99,
    colors: [
      {
        code: "black",
        img: "./img/xiaomi.png",
      },
      {
        code: "lightgray",
        img: "./img/xiaomi2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Asus Zenfone 10",
    price: 4799.00,
    colors: [
      {
        code: "#9BAF8A",
        img: "./img/asus.png",
      },
      {
        code: "#CE403D",
        img: "./img/asus2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //  Alterar o produto escolhido
    choosenProduct = products[index];

    //  Alterar textos dos produtos
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //  Adicionar novas cores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Suponha que esta função seja chamada quando o usuário adicionar um item ao carrinho
function atualizarCarrinho(itemCount) {
  const notification = document.querySelector('.notification');
  
  if (itemCount > 0) {
    notification.style.display = 'flex'; 
    notification.textContent = itemCount; 
  } else {
    notification.style.display = 'none'; 
  }
}

let quantidadeDeItens = 3; 
atualizarCarrinho(quantidadeDeItens);