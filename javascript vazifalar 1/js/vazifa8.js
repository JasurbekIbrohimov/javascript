// kiritilyotgan 2 la sonn juft yoki toq bolishi kk

let a = Number(prompt(`1-sonni kiriting`))
let b = Number(prompt(`2-sonni kiriting`))

if(a % 2 == 0 && b % 2 == 0){
    alert(`juft`)
}else if( a % 2 == 1 && b % 2 == 1 ){
    alert(`toq`)
}else{
    alert(`No togri sonkiritingiz`)
}