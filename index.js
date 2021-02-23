document.addEventListener("DOMContentLoaded",(e)=>{
   

})

function superbowlWin(objectArry){
let obj = objectArry.find(o => o.result === "W")
if (!obj){
return undefined
}else{
return obj.year
}
}