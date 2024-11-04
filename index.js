const buttn=document.querySelector("#button")
const divskill=document.querySelector("#skill")

if(buttn && divskill){
    buttn.addEventListener('click',()=>{
        if(divskill.style.display === 'none'){
            divskill.style.display ='block';
           buttn.value = "Hide Skills" 


        }else{
            divskill.style.display ='none';
            buttn.value = "Show Skills";
        }
    })
}
