export const viewanimistion= (inview:boolean,setfunction:(elm:string)=>void,classname:string)=>{
window.addEventListener('scroll',()=>{
    if(inview){
setfunction(classname)
    }

})
}