export const stateLogin = () => {

    if(!localStorage.getItem('stateLoginTM')){
        localStorage.setItem('stateLoginTM', JSON.stringify({
            state: false,
            user:{
                username : "",
                firstName : "",
                lastName: "",
                image : ""
            }
        }))
        return
    }
    return console.log('ya esta creado el estado');
}