import { handleStateLogin } from "../main.mjs"

export const logInUser = (currentUsername, currentPassword) => {
    const users = JSON.parse(localStorage.getItem('DBTM'))
    const user = users.find( user => user.username === currentUsername)

    if(!user) return alert('Usuario no encontrado')

    if(user.password === currentPassword){
       handleStateLogin(true,user.username,user.firstName,user.lastName,user.image)
       return true

    }
    else return false
    
}