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







// MBSS Technologies Contact Form

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const contactData = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            message: document.getElementById("message").value

        };


        try {

            const response = await fetch(
                "http://localhost:8080/api/contact",
                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(contactData)

                }

            );


            if (response.ok) {

                formMessage.textContent =
                    "Message sent successfully!";

                contactForm.reset();

            } else {

                formMessage.textContent =
                    "Failed to send message.";

            }


        } catch (error) {

            console.error("Error:", error);

            formMessage.textContent =
                "Backend is not running. Please try again later.";

        }

    });

}