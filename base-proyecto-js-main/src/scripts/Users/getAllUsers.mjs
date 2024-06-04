export const getAllUsers =async () => {
    try{
    
    if(!localStorage.getItem('DBTM')){
    const res = await fetch('http://dummyjson.com/users?limit=0')
    const { users } = await res.json()
    const listUsers = JSON.stringify(users)
    localStorage.setItem('DBTM', listUsers)
    }else{
        console.log('ya esta creada la base de datos');
    }

    }catch(e){
console.error(e)
    }
}