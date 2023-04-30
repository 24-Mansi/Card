let a=document.getElementById("first")
a.style.color="steelblue"
a.style.textAlign="center"


let b=document.getElementById("second")
b.style.color="lightcoral"
b.style.textAlign="center"


let c=document.getElementById("third")
c.style.color="darkslategray"
c.style.textAlign="center"

let d=document.getElementsByClassName("card-text")
d.style.color="whitesmoke"


// for(let i=0;i<=2;i++){
//     let b=document.getElementsByClassName("card-text")
//     b[i].style.color="pink"
// }

// let c=document.querySelector("#third")
// c.style.backgroundColor="pink"

// let d=document.querySelectorAll(".card-text")
// d[0].style.color="purple"
// d[1].style.color="lavender"
// console.log(d)

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card-text").getElementsByTagName("a"))

