//in here   querySelector and queryselectorAll methods useage and parent and child node.


const div = document.querySelector('.parent')

//Using querySelector, we are selecting the first node or element.
console.log(div)

//The firstElementChild method is used to fetch the first element of a parent node.
console.log(div.firstElementChild)

const firstDay = div.firstElementChild

//Now, after accessing the first element, we can perform any operation.
console.log(firstDay.innerHTML)

firstDay.style.color = 'red'

firstDay.style.backgroundColor = "green"

firstDay.innerHTML = "NOT MONDAY"

//Now, using the children method, you can fetch all the children of a parent node in an HTMLCollection.

console.log(div.children)

//Now, an HTMLCollection is not an array, but it shares some functionalities with arrays. For example, you can access a particular element using the square bracket notation [index]. 
//Let's explore how to print all the child elements.

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

//You can also call parent from child as well

console.log(firstDay.parentElement)

//same way you can call next child using child

console.log(firstDay.nextElementSibling.innerHTML)
