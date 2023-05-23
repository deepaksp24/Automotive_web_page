const wrapper=document.querySelector(".sliderwrap")

const menuItems=document.querySelectorAll(".item")
menuItems.forEach((it,index)=>{
    it.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100 * index}vw)`;
    });
});