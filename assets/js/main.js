/*===== validate Contact form before submission =====*/ 
 function validateForm() {
        const name = document.querySelector("input[name='name']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const message = document.querySelector("textarea[name='message']").value.trim();

        // Validate name
        const nameError = document.querySelector(".name-error");
        if (name === "") {
            nameError.textContent = "Please enter your name.";
            return false;
        } else {
            nameError.textContent = "";
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.querySelector(".email-error");
        if (email === "") {
            emailError.textContent = "Please enter your email address.";
            return false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
        }

        // Validate message
        const messageError = document.querySelector(".message-error");
        if (message === "") {
            messageError.textContent = "Please enter a message.";
            return false;
        } else {
            messageError.textContent = "";
        }

        // If all fields are valid, submit the form
        return true;
    }

/*===== Clear Contact form after submission =====*/ 
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== Update EXPERIENCE =====*/
function updateExperience() {
    var experienceElement = document.getElementById("noOfExperience");
    var currentYear = new Date().getFullYear();
    // Calculate the years of experience
    var startYear = 2019; // the year started experience
    var yearsOfExperience = currentYear - startYear;
    // Update the content of the <p> tag with the current year
    experienceElement.textContent = yearsOfExperience;
}
    // Call the function when the page loads
    updateExperience();

/*=============================*/