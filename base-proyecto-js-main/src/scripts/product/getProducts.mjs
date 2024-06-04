export const getAllProducts =async () => {

  try {
   
    document.querySelector('#home').classList.add('ocultar')
    document.querySelector('#products').innerHTML = ""
    document.querySelector('#recetas').innerHTML = ""
    document.querySelector('#posts').innerHTML = ""
    document.querySelector('#users').innerHTML = ""
    document.querySelector('#tag').innerHTML = ""
    const res = await fetch('https://dummyjson.com/products?limit=20')
    const { products } = await res.json()
    
    console.log(products);
    
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

const resCat = await fetch('https://dummyjson.com/products/category-list')
const cats = await resCat.json()

cats.forEach(cat => {
	document.querySelector('#cat').innerHTML += `<option value="${cat}">${cat}</option>`
})

} catch(e){
    console.error(e)
}

}