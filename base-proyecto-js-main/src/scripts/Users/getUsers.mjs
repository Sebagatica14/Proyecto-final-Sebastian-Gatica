export const getUsers =async () => {

    try {
     
      document.querySelector('#home').classList.add('ocultar')
      document.querySelector('#products').innerHTML = ""
      document.querySelector('#recetas').innerHTML = ""
      document.querySelector('#posts').innerHTML = ""
      document.querySelector('#users').innerHTML = ""
      document.querySelector('#tag').innerHTML = ""
      const res = await fetch('http://dummyjson.com/users?limit=20')
      const { users } = await res.json()
      
      console.log(users);
      
      users.forEach(user => {
          document.querySelector('#users').innerHTML += `
          <div class="carduser">
          <label class="avatar"><img src="${user.image}" alt="${user.firstName}"></label>
          <label class="info">
            <span class="info-1">${user.firstName}</span>
            <span class="info-2">${user.lastName}</span>
          </label>
          <div class="content-1">${user.university}</div>
          <div class="content-2">Tel ${user.phone}</div>
        </div>
        `
});
  
  } catch(e){
      console.error(e)
  }
  
  }