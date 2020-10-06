const recipes = document.querySelectorAll('.recipe')
const buttons = document.querySelectorAll('.title button')
const hidden = document.querySelectorAll('.hide')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (buttons[i].textContent == 'ESCONDER') {
            buttons[i].innerHTML = 'MOSTRAR'
            hidden[i].classList.add('active')
        } else {
            buttons[i].innerHTML = 'ESCONDER'
            hidden[i].classList.remove('active')
        }
        console.log(i)
    })    
}



function addIngredient (){

    const ingredients = document.querySelector('#ingredients')
    const fieldContainerIngredient = document.querySelectorAll('.ingredients')
    


    const newField = fieldContainerIngredient[fieldContainerIngredient.length - 1 ].cloneNode(true)
     
    if(newField.children[0].value == "") return false

    newField.children[0].value == ""

    ingredients.appendChild(newField)
    
}

document
    .querySelector(".add-ingredient")
    .addEventListener("click",addIngredient)


function addModeOfPrepare (){
     const preparation = document.querySelector('#modeOfPrepare')
     const fieldContainerPrepare = document.querySelectorAll('.modeOfPrepare')

     const newField = fieldContainerPrepare[fieldContainerPrepare.length - 1 ].cloneNode(true)

     if(newField.children[0].value == "") return false

     newField.children[0].value == ""

     preparation.appendChild(newField)

}

document
    .querySelector('.add-ModeOfPrepare')
    .addEventListener('click',addModeOfPrepare)











