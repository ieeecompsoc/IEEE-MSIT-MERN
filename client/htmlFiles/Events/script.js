let expandbtn = document.querySelector(".expand");
let hyplinks = document.querySelectorAll(".hyplinks div");
let section = document.querySelector(".section")
let flag=false;

expandbtn.addEventListener("click",function(){
    if(!flag){
        section.style.minHeight="6.5rem"
        
        for(let i=0;i<hyplinks.length;i++){
            hyplinks[i].style.display ="block";
            hyplinks[i].style.fontSize="18px"
        }
        flag=true;
    }
    else{
        section.style.minHeight="3.5rem"
        for(let i=0;i<hyplinks.length;i++){
            hyplinks[i].style.display ="none";
        }
        flag=false;
    }
    
})
