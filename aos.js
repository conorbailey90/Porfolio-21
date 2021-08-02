const h1Headers = [...document.querySelectorAll('h1')];
const h2Headers = [...document.querySelectorAll('h2')];
const h3Headers = [...document.querySelectorAll('h3')];
const h4Headers = [...document.querySelectorAll('h4')];
const paragraphs = [...document.querySelectorAll('p')];
const listItems = [...document.querySelectorAll('li')];
const socials = [...document.querySelectorAll('i')];
const bioImage =[...document.querySelectorAll('.bio-image')];
const tech =[...document.querySelectorAll('.tech')];
const svg =[...document.querySelectorAll('svg')];


let elements = [h1Headers, h2Headers, h3Headers,h4Headers, paragraphs, listItems, socials, bioImage, svg, tech]


let options = {
    rootMargin: '0px',
    threshold: .2
  }
  let setItemActive = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }else{
            entry.target.style.opacity = 0;
        }
       
    })
}

let observer = new IntersectionObserver(setItemActive, options);

elements.forEach((list,idx) => {
    list.forEach(item => {
        observer.observe(item)
    })
    
})



