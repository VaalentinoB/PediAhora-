;


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
      resolve(products.find(products => products.id === productId))
    }, 500);

  })
}


