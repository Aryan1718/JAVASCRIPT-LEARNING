//in here   querySelector and queryselectorAll methods useage and parent and child node.


const div = document.querySelector('.parent')

//using querySelector we are selecting first node or element
console.log(div)

//firstElementChild method is used to fetch the first element of an parent node
console.log(div.firstElementChild)

const firstDay = div.firstElementChild

//now after accessing the first element we can perform any operation
console.log(firstDay.innerHTML)

firstDay.style.color = 'red'

firstDay.style.backgroundColor = "green"

firstDay.innerHTML = "NOT MONDAY"

//Now using children method you can fetch all the children of an parent in a htmlCollection

console.log(div.children)

//now htmlCollection is not array but there are some same functionality like array like using [index] you can fetch 
//particular element so check out how to print all the child element

const child = div.children

//here is way to print all the elements 
for (let i = 0; i < child.length; i++) {
    console.log(child[i].innerHTML)
}

//or else you can do this way

console.log(child[0].innerHTML)


//Now we can find out the childNodes as well

console.log(div.childNodes)

//difference between childNodes and HtmlCollection
//check-out parent-child.txt

//You can also call parent from child as well

console.log(firstDay.parentElement)

//same way you can call next child using child

console.log(firstDay.nextElementSibling.innerHTML)