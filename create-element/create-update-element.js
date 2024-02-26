
function createElement(dishName){
    const ul = document.querySelector('.food')
    const newLi = document.createElement('li')
    newLi.setAttribute('class','nameOfDish')
    newLi.appendChild(document.createTextNode(dishName))
    ul.appendChild(newLi)
}

function updateElement(dishName){
    const li = document.querySelector('li:nth-child(2)')
    li.innerHTML = dishName
}

function optimizeUpdateElement(dname){
    const newE = document.createElement('li')
    newE.appendChild(document.createTextNode(dname))
    document.querySelector('li:first-child').replaceWith(newE)
}

function removeElement(){
    document.querySelector('li:first-child').remove()
}

for(let i=0;i<5;i++){
    createElement("dish"+i)
}

updateElement("burger")
optimizeUpdateElement("garlic bread")
removeElement()