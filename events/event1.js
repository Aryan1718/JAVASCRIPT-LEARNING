
const image1 = document.getElementById('yash-photo1')

const link = document.getElementById('google')

//one way to call the event
// image1.onclick = function(){
//     alert("hello again my name is yash")
// }

//second way to call the event
// image1.addEventListener('click',function(){
//     alert('hello my name is yash shah')
// },false)

//different types of methods.

//target
image1.addEventListener('click',(e)=>{
    console.log(e.target)
},false)

//how to acces prentNode 
image1.addEventListener('click',(e)=>{
    console.log(e.target.parentNode)
},false)


//preventDefault

link.addEventListener('click',(e)=>{
 e.preventDefault()  
 console.log("clicked on google link.")
})

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(document.querySelector('input').value)
})

//propogration
//in here event bubbling happend first 2nd photo is print and after that clicked image so to handle event bubbling we use true value in 3rd parameter.
document.querySelector(".images").addEventListener('click',(e)=>{
    console.log("clicked on image")
},true)

document.querySelector('#yash-photo2').addEventListener('click',(e)=>{
    console.log("2nd photo clicked.")
},true)

//stopPropagation
//this methods help you to stop the bubbling...
document.querySelector(".images").addEventListener('click',(e)=>{
    console.log("clicked on image")
    
})

document.querySelector('#yash-photo2').addEventListener('click',(e)=>{
    console.log("2nd photo clicked.")
    e.stopPropagation()
})