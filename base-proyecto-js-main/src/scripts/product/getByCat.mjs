export const getProductsByCat =async (cat) => {
    const res = await fetch(`https://dummyjson.com/products/category/${cat}`)
    const { products } = await res.json()

    document.querySelector('#products').innerHTML =""
    products.forEach(product => {
    document.querySelector('#products').innerHTML += ` 
    <div class="cardBox">
    <div class="cardP">
    <div class="h4">${product.title}<img src=${product.images[0]} alt=${product.title} height="100%" width="100%">$${product.price}</div>
    <div class="content">
      <div class="h3">${product.brand}</div>
      <p>${product.description}</p>
    </div>
    </div>
    </div>
    `
    });
    
} 