// <!-- ==========================START CHANGE BACKGROUND HEADER ON SCROLL========================== -->
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 250) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
// <!-- ==========================END CHANGE BACKGROUND HEADER ON SCROLL========================== -->


// <!-- ==========================START TYPING ANIMATION IN LANDING SECTION========================== -->
let typed = new Typed (".auto-type" , {
    strings:["Deveolper" , "Designer" , "Programmer"],
    typeSpeed:70,
    backSpeed:150,
    loop:true
})
// <!-- ==========================END TYPING ANIMATION IN LANDING SECTION========================== -->


// <!-- ==========================START BACK BUTTON TO THE FIREST PAGE========================== -->
function upBoutton (){
    let span = document.querySelector(".up");
    if(this.scrollY >=797){
        span.classList.add("show");
    }else{
        span.classList.remove("show");
    }
}
window.addEventListener('scroll', upBoutton)
// <!-- ==========================END BACK BUTTON TO THE FIREST PAGE========================== -->


// <!-- ==========================START FILL THE PART IN SECTION PLAY %========================== -->
let section = document.querySelector(".play");
let spans = document.querySelectorAll(".game span");
window.onscroll = function () {
    if(window.scrollY >= section.offsetTop -250){
        spans.forEach((span) =>{
            span.style.width = span.dataset.width;
        })
    }
}
// <!-- ==========================END FILL THE PART IN SECTION PLAY %========================== -->


// <!-- ==========================START SCROLLREVEAL========================== -->
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:100,
    // reset:true
})
sr.reveal(`.home_title , .text-new , .text , .gallery , .myslider`)
sr.reveal(`.home_discraption`,{delay:250})
sr.reveal(`.home_bou` , {delay:350})
sr.reveal(`.icon-bar` , { origin:'left'})
sr.reveal(`.packeg` , {interval:100})
sr.reveal(`.box`,{delay:300})
sr.reveal(`.imag__play` , {origin:'left'} )
sr.reveal(`.games` , {origin:'right'} )
sr.reveal(`.price-one-left` , {origin:'left'} )
sr.reveal(`.price-one-right` , {origin:'right'} )
sr.reveal(`.imge-addres` , {origin:'left'} )
sr.reveal(`.text-about` )
sr.reveal(`.title-design`,{delay:350})
sr.reveal(`.discraption-design`,{delay:400})
sr.reveal(`.bout-design` , {delay:500})
sr.reveal(`.contact`)
sr.reveal(`footer`)
// <!-- ==========================END SCROLLREVEAL========================== -->


// <!-- ==========================START SLIDER========================== -->
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
}
// <!-- ==========================END SLIDER========================== -->


// <!-- ==========================START LOGIN & SIGNUP CANCEL========================== -->
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// <!-- ==========================END LOGIN & SIGNUP CANCEL========================== -->







// const myJsonObjectFromServr = '{"name":"mostafa","Age":"20"}'
// console.log(myJsonObjectFromServr);


// const myJsonObject = JSON.parse(myJsonObjectFromServr);
// console.log( myJsonObject);


// myJsonObject.name= "barakat";
// myJsonObject.age= 30;
// console.log( myJsonObject);


// const myJsonObjectFromWeb = JSON.stringify(myJsonObject);
// console.log(myJsonObjectFromWeb);


// console.log("#".repeat(30));


// let myRequset = new XMLHttpRequest();
// myRequset.open("GET" , "file.json");
// myRequset.send();
// console.log(myRequset);

// myRequset.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let jsData = JSON.parse(this.responseText);
//         console.log(jsData );
//     }
// }

