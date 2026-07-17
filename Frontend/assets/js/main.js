// MBSS Technologies Website JavaScript


// Mobile Navigation Menu

const menu = document.querySelector(".menu");

const navLinks = document.querySelector(".nav-links");


if(menu){

    menu.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}





// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});







// Scroll Animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.15

}

);





sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";


observer.observe(section);


});







// Contact Form (Temporary)

const form=document.querySelector("form");


if(form){


form.addEventListener("submit",(event)=>{


event.preventDefault();


alert(
"Thank you for contacting MBSS Technologies. We will get back to you soon."
);


form.reset();


});


}