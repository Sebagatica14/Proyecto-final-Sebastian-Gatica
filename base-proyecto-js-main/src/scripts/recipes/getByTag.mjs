export const getRecipesByTag =async (tag) => {
    const res = await fetch(`https://dummyjson.com/recipes/tag/${tag}`)
    const { recipes } = await res.json()

    document.querySelector('#recetas').innerHTML =""
    recipes.forEach(recipe => {
    document.querySelector('#recetas').innerHTML += ` 
    <div class="card">
            <div class="content">
                  <div class="back">
                    <div class="back-content">
                      <svg stroke="#ffffff" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
              
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              
                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
              
                      <g id="SVGRepo_iconCarrier">
              
                      <img src=${recipe.image} alt=${recipe.name} height="100%" width="100%">
              
                      </g>
              
                      </svg>
                      <strong>${recipe.name}</strong>
                    </div>
                  </div>
                  <div class="front">
                    
                    <div class="img">
                    <button class="img" type="boton-ver-receta">
                    <img src=${recipe.image} alt=${recipe.name} height="100%" width="100%">
                    </button>
                    </div>
              
                    <div class="front-content">
                      <small class="badge">${recipe.difficulty}</small>
                      <div class="description">
                        <div class="title">
                          <p class="title">
                            <strong>${recipe.cuisine}</strong>
                          </p>
                          <svg fill-rule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode: normal" text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                        </div>
                        <p class="card-footer">
                          ${recipe.prepTimeMinutes} Minutos &nbsp; | &nbsp; ${recipe.servings} Porciones | &nbsp; ${recipe.caloriesPerServing} Calorias
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    `
    });
    
}