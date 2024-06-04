//________________Importacion de funciones_______________________
import { getAllRecipes } from "./recipes/getRecipes.mjs";
import { getRecipesByTag } from "./recipes/getByTag.mjs";
import { getProductsByCat } from "./product/getByCat.mjs";
import { getAllProducts } from "./product/getProducts.mjs";
import { getAllUsers } from "./Users/getAllUsers.mjs";
import { addUser } from "./Users/addUser.mjs";
import { logInUser } from "./Users/login.mjs";
import { stateLogin } from "./Users/stateLogin.mjs";
import { getAllPosts } from "./posts/getPosts.mjs";
import { getUsers } from "./Users/getUsers.mjs";
import { buscador } from "./Users/getBybuscador.mjs";

//________Funciones que se ejecutan al iniciar la pagina__________
getAllUsers()
stateLogin();

let isLoged = JSON.parse(localStorage.getItem('stateLoginTM'))

const $ = selector => document.querySelector(selector)

const $recipes = $('#recetas')
const $btnShowRecetas = $('#show-recetas')
//_________selectores de categorias y tags_______________________
const $selectTag = $('#tag')
const $selectCat = $('#cat')
//____________inicio de sesion y registro________________________
const $IniciarSesion = $('#iniciar-sesion')
const $registrarse = $('#registrarse')
const $formRegistro = $('.registro')
const $formInicio = $('.form-inicio') 
const $btnFormRegistro = $('#btn-registro')
const $btnFormInicioSesion = $('#btn-iniciar-sesion')
const $home = $('.r-s')
//__________Botones del navegador________________________________
const $btnShowProductNav = $('#show-products')
const $btnShowRecetasNav = $('#show-recetas')
const $btnShowUsersNav = $('#show-users')
const $btnShowPostsNav = $('#show-posts')
const $btnCerrarSesion = $('#cerrar-sesion')

//____________Formulario de registro_____________________________
const $regName = $('#reg-name')
const $regSurname = $('#reg-surname')
const $regEdad = $('#reg-edad')
const $regUsername = $('#reg-username')
const $regPassword = $('#reg-password')

//____________Formulario Login___________________________________
const $logInUsername = $('#login-username')
const $logInPassword = $('#login-password')

//_____________botones atras adelante____________________________
const $btnAArecetas = $('.btn-aa-recetas')
const $btnAtras = $('#atras')
const $btnAdelante = $('#adelante')


//_____________Home de Bienvenida________________________________
const showHome = () => {

   document.querySelector('#home').innerHTML = `
   <img src=${isLoged.user.image} alt="${isLoged.user.username}">
   <h1> Bienvenido ${isLoged.user.firstName} ${isLoged.user.lastName}</h1>
   `
   document.querySelector('#home').classList.remove('ocultar')

}

//_______________inicio ya logeado________________________________
if(isLoged.state){
   $formInicio.classList.add('ocultar')
   $home.classList.remove('ocultar')
   $IniciarSesion.classList.add('ocultar')
   $registrarse.classList.add('ocultar')
   
   
   $btnShowProductNav.classList.remove('ocultar')
   $btnShowRecetasNav.classList.remove('ocultar')
   $btnShowUsersNav.classList.remove('ocultar')
   $btnShowPostsNav.classList.remove('ocultar')
   $btnCerrarSesion.classList.remove('ocultar')

   $selectCat.classList.add('ocultar')
   $selectTag.classList.add('ocultar')
   showHome()
}

$btnShowProductNav.addEventListener('click', () => {
   console.log("hola estoy escuchando boton product");
   $selectTag.classList.add('ocultar')
   $selectCat.classList.remove('ocultar')
   $btnAArecetas.classList.remove('ocultar')
   getAllProducts()
   })

$registrarse.addEventListener('click', () => {
   $formInicio.classList.add('ocultar')
   $formRegistro.classList.remove('ocultar')
   })
   
$IniciarSesion.addEventListener('click', () => {
   $formInicio.classList.remove('ocultar')
   $formRegistro.classList.add('ocultar')
   })

$btnShowRecetas.addEventListener('click', () => {
   console.log("hola estoy escuchando boton recetas");
   $selectCat.classList.add('ocultar')
   $selectTag.classList.remove('ocultar')
   $btnAArecetas.classList.remove('ocultar')
   getAllRecipes()
   })

$selectTag.addEventListener('change', (e) => {
   getRecipesByTag(e.target.value)
   })

$selectCat.addEventListener('change', (e) => {
   getProductsByCat(e.target.value)
   })

$btnFormRegistro.addEventListener('click', (e) => {
   e.preventDefault();
   addUser($regName.value, $regSurname.value, $regEdad.value, $regUsername.value, $regPassword.value )
   alert('registro hecho')
   $formInicio.classList.remove('ocultar')
   $formRegistro.classList.add('ocultar')
})

$btnFormInicioSesion.addEventListener('click', (e) => {
   e.preventDefault();

   const resLogin = logInUser($logInUsername.value, $logInPassword.value)
   if(resLogin){
   showHome()
   $formInicio.classList.add('ocultar')
   $home.classList.remove('ocultar')
   $IniciarSesion.classList.add('ocultar')
   $registrarse.classList.add('ocultar')
   
   $selectCat.classList.add('ocultar')
   $selectTag.classList.add('ocultar')
   
   $btnShowProductNav.classList.remove('ocultar')
   $btnShowRecetasNav.classList.remove('ocultar')
   $btnShowUsersNav.classList.remove('ocultar')
   $btnShowPostsNav.classList.remove('ocultar')
   $btnCerrarSesion.classList.remove('ocultar')

   $logInUsername.value = "" 
   $logInPassword.value = ""

   }else{
      alert('Usuario o contraseña incorrecto')
   }
})

$btnCerrarSesion.addEventListener('click', () => {
   handleStateLogin();

   $formInicio.classList.remove('ocultar')
   $home.classList.add('ocultar')
   $IniciarSesion.classList.remove('ocultar')
   $registrarse.classList.remove('ocultar')
   
   $btnShowProductNav.classList.add('ocultar')
   $btnShowRecetasNav.classList.add('ocultar')
   $btnShowUsersNav.classList.add('ocultar')
   $btnShowPostsNav.classList.add('ocultar')
   $btnCerrarSesion.classList.add('ocultar')

   document.querySelector('#home').classList.add('ocultar')

   document.querySelector('#products').innerHTML = ""
   document.querySelector('#recetas').innerHTML = ""
   document.querySelector('#posts').innerHTML = ""
   document.querySelector('#users').innerHTML = ""
   document.querySelector('#tag').innerHTML = ""
})

export function handleStateLogin(state = false, username ="", firstName ="", lastName ="", image =""){
   
   isLoged.state = state
   isLoged.user.username = username
   isLoged.user.firstName = firstName
   isLoged.user.lastName = lastName
   isLoged.user.image = image

   localStorage.setItem('stateLoginTM', JSON.stringify(isLoged))
}

$btnAtras.addEventListener('click', () => {

})

$btnShowPostsNav.addEventListener('click', () => {
   document.querySelector('#posts').classList.remove('ocultar')
   $selectCat.classList.add('ocultar')
   $selectTag.classList.add('ocultar')
   $btnAArecetas.classList.add('ocultar')
   console.log("hola estoy escuchando boton post");
   getAllPosts()
   })

$btnShowUsersNav.addEventListener('click', () => {
   document.querySelector('#users').classList.remove('ocultar')
   $btnAArecetas.classList.add('ocultar')
   console.log("hola estoy escuchando boton users");
   getUsers()
   })

$btnbuscador.addEventListener('click', () => {
   buscador()
})