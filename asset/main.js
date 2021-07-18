const showMenu =(toggleId,navId) =>{
    const toggle =document.getElementById(toggleId),
    nav= document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){

    navLink.forEach(n =>n.classList.remove('active'))
    this.classList.add('active') 

   const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n =>n.addEventListener('click',linkAction))

const scrl = ScrollReveal({
    origin: 'top',
    distance:'80px' ,
    duration: 2000,
    reset: true
})

scrl.reveal('.home_title',{})
scrl.reveal('.button',{delay:200})
scrl.reveal('.home_img',{delay:400})
scrl.reveal('.home_social-icon',{interval:200})


scrl.reveal('.about_img',{})
scrl.reveal('.about_subtitle',{delay:200})
scrl.reveal('.about_text',{delay:400})

scrl.reveal('.skills_subtitle',{})
scrl.reveal('.skills_text',{delay:200})
scrl.reveal('.skills_data',{interval:200})
scrl.reveal('.skills_img',{delay:200})
scrl.reveal('.project',{delay:200})
scrl.reveal('.project',{interval:200})
scrl.reveal('.service_img',{interval:200})


scrl.reveal('.contact_input',{interval:200})