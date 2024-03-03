const question=document.querySelector(".question");
const gif=document.querySelector(".gif");
const yes=document.querySelector(".yes");	
const no=document.querySelector(".no");	
yes.addEventListener("click",()=>{
    question.innerHTML="Yayyyy I Love You Too!";
    gif.src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/tonton-friends-quan-ying-mu/sticker_9.gif?da99a2031dc22eb05689abae35c0baa1"
})
no.addEventListener("click",()=>{
    question.innerHTML="Why You Click No!?";
    const nobtn=no.getBoundingClientRect();
    const maxX=window.innerWidth - nobtn.width;
    const maxY=window.innerHeight - nobtn.height;
    const randomX=Math.floor(Math.random()* maxX);
    const randomY=Math.floor(Math.random()* maxY);
    no.style.left=randomX + "px";
    no.style.top=randomY + "px";
    gif.src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/tonton-friends-quan-ying-mu/sticker_10.gif?da99a2031dc22eb05689abae35c0baa1"

});