export const getAllPosts =async () => {

    try {
    
      document.querySelector('#home').classList.add('ocultar')
      document.querySelector('#products').innerHTML = ""
      document.querySelector('#recetas').innerHTML = ""
      document.querySelector('#posts').innerHTML = ""
      document.querySelector('#users').innerHTML = ""
      document.querySelector('#tag').innerHTML = ""
      const res = await fetch('https://dummyjson.com/posts')
      const { posts } = await res.json()
      
      console.log(posts);
      
      posts.forEach(post => {
          document.querySelector('#posts').innerHTML += `
          <div class="card-containerpost">
          <div class="cardpost">
          <div class="front-contentpost">
            <p>${post.title}</p>
            <p id="tagpost">${post.tags}</p>
          </div>
          <div class="contentpost">
            <p class="headingpost">Usuario ${post.userId}</p>
            <p>${post.body}</p>
            <p id="vistas">Views ${post.views}</p>
          </div>
        </div>
        </div>
         `
      });
  
  } catch(e){
      console.error(e)
  }
  
  }