export const cards = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/201",
    name: "Sanguche de milanesa",
    price: 8600,
    restaurant: "Restaurante  - El palmar "

  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/202",
    name: "Tarta de JQ",
    price: 6500,
    restaurant: "Restaurante  - Nueva roma "

  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/204",
    name: "Sushi tabla variada",
    price: 16000,
    restaurant: "Restaurante  - Sushi Santa fe "

  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)

  })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards.find(cards => cards.id === productId))
    }, 500);

  })
}