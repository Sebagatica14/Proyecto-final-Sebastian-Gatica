export const addUser =async (firstName, lastName,age,username ,password , image = "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png") => {
 try{
 const res = await fetch('http://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
      age, 
      image,
      username,
      password
    })
  })

  const user = await res.json()
  const listUsers = JSON.parse(localStorage.getItem('DBTM'))
  listUsers.push(user)
  localStorage.setItem('DBTM', JSON.stringify(listUsers))


    }catch(e){
    console.error(e)
 }

}