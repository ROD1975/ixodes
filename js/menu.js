const menuBtn=document.querySelector(".menu__btn"),menu=document.querySelector(".menu__nav"),menuBar=document.querySelector(".menu"),header=document.querySelector("header"),logo=document.querySelector(".menu__logo");menuBtn.addEventListener("click",()=>{menuBtn.classList.toggle("menu__btn--open"),menu.classList.toggle("menu__nav--open")}),window.addEventListener("scroll",()=>{window.pageYOffset>0?(menuBar.style.position="fixed",menuBar.style.top="0",menuBar.style.left="0",menuBar.style.zIndex="10",logo.style.transform="scale(0.7)",document.querySelector(".menu__container").style.padding="0px 15px 0px 0px"):(menuBar.style.position="absolute",menuBar.style.top="0",menuBar.style.left="0",logo.style.transform="scale(1)",document.querySelector(".menu__container").style.padding="30px 15px"),header.offsetHeight<window.pageYOffset+125?menuBar.style.background="#1d1d1d":menuBar.style.background="transparent"});