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

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formMessage = document.getElementById("formMessage");

        try {

            let response;

for (let attempt = 1; attempt <= 3; attempt++) {

    try {

        response = await fetch(
            "https://mbss-backend-api.onrender.com/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        if (response.ok) {
            break;
        }

    } catch (error) {

        if (attempt === 3) {
            throw error;
        }

    }

    await new Promise(resolve => setTimeout(resolve, 5000));
}

if (response && response.ok) {

    formMessage.textContent =
        "Message sent successfully!";

    contactForm.reset();

} else {

    formMessage.textContent =
        "Failed to save message.";

}

        } catch (error) {

            console.error("Error:", error);

            formMessage.textContent =
                "Cannot connect to backend.";

        }

    });

}
// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================================
// PAGE LOADER
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("page-loader");

    if (loader) {
        loader.classList.add("hidden");
    }

});

window.addEventListener("load", function () {
    const loader = document.getElementById("page-loader");

    if (loader) {
        loader.classList.add("hidden");
    }
});


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercent =
        (scrollTop / documentHeight) * 100;

    const progressBar =
        document.getElementById("scroll-progress");

    if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
    }

});