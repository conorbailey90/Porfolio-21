const scrollable = document.querySelector('.scrollable');
const heroSection = document.getElementById('hero');
const projectsSection = document.getElementById('projects');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const portfolioDate = document.querySelector('.portfolio-date');
const domProjectsList = document.querySelector('.projects-list');
const projectsImage = document.querySelector('.projects-image');

function clickLink(idx){
    if(idx === 0){
        window.scrollTo(0, heroSection.offsetTop)
    }else if(idx === 1){
        window.scrollTo(0, projectsSection.offsetTop)
    }else if(idx === 2){
        window.scrollTo(0, aboutSection.offsetTop)
    }else if(idx === 3){
        window.scrollTo(0, contactSection.offsetTop)
    }
}

portfolioDate.innerText = `Portfolio ${new Date().getFullYear().toString().substring(2,4)}`;


// Project image on hover settings
domProjectsList.addEventListener('mouseenter', displayImage);
domProjectsList.addEventListener('mouseleave', displayImage);

function displayImage(e){
    if(e.type === 'mouseenter'){
        projectsImage.style.opacity = 1;
    }else{
        projectsImage.style.opacity = 0;
    }
}

// Append projects to list in Projects section.
projectsList.forEach(project => {
    let li = document.createElement('li');
    let projectName = document.createElement('h3');
    let liLinks = document.createElement('div');
    liLinks.classList.add('li-link')
   
    let a = document.createElement('a');
    a.innerText = 'View'
    a.setAttribute('href', project.link);
    a.setAttribute('target', '_blank');

    let aGithub = document.createElement('a');
    aGithub.innerText = 'GitHub';
    aGithub.setAttribute('href', project.github);
    aGithub.setAttribute('target', '_blank');

    liLinks.appendChild(a);
    liLinks.appendChild(aGithub);
    
    projectName.innerText = project.name;
    li.addEventListener('mouseenter', () => {
        projectsImage.style.backgroundImage = `url(${project.image})`;
    });
 
    li.appendChild(projectName);
    li.appendChild(liLinks)
    domProjectsList.appendChild(li)
})


function lerp(start, end, t){
    return start * (1 - t) + end * t;
};

function setDimensions(){

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Projects image variables
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

window.addEventListener('mousemove', (e) => {
    targetX =e.clientX;
    targetY = e.clientY;
})

function moveImage(){

    // projects image
    currentX = lerp(currentX, targetX, 0.055).toFixed(2);
    currentY = lerp(currentY, targetY, 0.055).toFixed(2);

    projectsImage.style.transform = `translate3d(${currentX - 125}px, ${currentY - 75}px, 0)`;

    requestAnimationFrame(moveImage)
}




setDimensions();
window.addEventListener('resize', setDimensions);
moveImage();



