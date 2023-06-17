const NavLinkA = document.querySelectorAll('.nav-link a');
const sectionS = document.querySelectorAll('section');

// Nav Scroll.........
window.addEventListener('scroll',()=>{

    // Add Active Class....
    sectionS.forEach(section=>{
        let up = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');


        if(up>=offset && up<offset+height){
            NavLinkA.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('.nav-link a[href*='+ id +']').classList.add('active')
            })
        }
    })

    // Add Class Nav.....
    let nav = document.querySelector('nav');
    nav.classList.toggle('nav-scroll',window.scrollY>0)
});

// Menu .........
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let navLink = document.querySelector('.nav-link');

open.addEventListener('click',()=>{
    navLink.style.display='block';
    open.style.display='none';
    close.style.display='inline-block'
});
close.addEventListener('click',()=>{
    navLink.style.display='none';
    open.style.display='inline-block';
    close.style.display='none'
});

if(window.innerWidth < 991){
    window.addEventListener('scroll',()=>{
        navLink.style.display='none';
        open.style.display='inline-block';
        close.style.display='none'
    });
}


// Dynamic Portfolio Project Section.........

window.addEventListener('load',()=>{
    let DynamicPorjects = document.querySelector('.projects');
    DynamicPorjects.innerHTML='';

    projecttt.forEach(projectContent=>{
        let dynamicProject = document.createElement('article');
        dynamicProject.className='project';
        dynamicProject.innerHTML=`
        <img src="${projectContent.img}" alt="">
        <div class="project-shadow">
            <h4>${projectContent.title}</h4>
            <p>${projectContent.des}</p>
            <a href="${projectContent.link}"><i class="fa fa-link"></i></a>
        </div>
        `
        DynamicPorjects.append(dynamicProject);
    })
});

// Swiper Slide.........

let swiper = new Swiper('.mySwiper',{
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


// Theme Mode Dark/Light.........
let darkIcon = document.querySelector('.moon');
let LightIcon = document.querySelector('.sun');

darkIcon.addEventListener('click',()=>{
    darkIcon.style.display='none'
    LightIcon.style.display='inline-block'
    document.querySelector('body').classList.add('dark-mood');
});

LightIcon.addEventListener('click',()=>{
    LightIcon.style.display='none'
    darkIcon.style.display='inline-block'
    document.querySelector('body').classList.remove('dark-mood');
});