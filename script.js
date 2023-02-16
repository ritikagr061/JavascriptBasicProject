'use strict';


const openBtn=document.querySelectorAll(".show-modal");
const closeBtn=document.querySelector(".close-modal");

const dialogBox=document.querySelector(".modal");
const hidden=document.querySelector(".hidden");
const overlay=document.querySelector(".overlay");

//we always 

// console.log(openBtn);

for(var i=0;i<openBtn.length;i++)
{
    openBtn[i].addEventListener('click',
    function(){
        //hidden.style.display='block';
        //but note that the above method is not very suitable in real life bcz
        //you might have so many style properties that you might want to change and therfore
        // its preferable to add and remove classes.

        dialogBox.classList.remove('hidden');
        //class list identified by the first class that was present which was modal in our case - <div class="modal hidden"> therfore we wrote dialogeBox
        overlay.classList.remove('hidde');
        //class list identified by the first class hence we wrote overlay 
    })
}

closeBtn.addEventListener('click',function(){
    dialogBox.classList.add("hidden");
    overlay.classList.add("hidden");
})

overlay.addEventListener('click',function(){
    dialogBox.classList.add("hidden");
    overlay.classList.add("hidden");
})

