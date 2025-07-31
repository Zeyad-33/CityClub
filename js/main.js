// up
let up = document.getElementById("up")

up.addEventListener("click",  function(){ 

    window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
} )

// clubs view

var clubs = document.getElementsByClassName("clubView")
var clubbtn = document.getElementsByClassName("clubbox")

for (let i=1 ; i <5 ; i++ ) {
    clubs[i].style.display = "none";
}
// shk
clubbtn[0].addEventListener("click", function(){
    
    for (let i=0 ; i <5 ; i++ ) {
        clubs[i].style.display = "none";
    }
    
    clubs[0].style.display = "flex";

})
// bnh
clubbtn[1].addEventListener("click", function(){
    
    for (let i=0 ; i <5 ; i++ ) {
        clubs[i].style.display = "none";
    }
    
    clubs[1].style.display = "flex";
})
clubbtn[2].addEventListener("click", function(){
    
    for (let i=0 ; i <5 ; i++ ) {
        clubs[i].style.display = "none";
    }
    
    clubs[2].style.display = "flex";
})
clubbtn[3].addEventListener("click", function(){
    
    for (let i=0 ; i <5 ; i++ ) {
        clubs[i].style.display = "none";
    }
    
    clubs[3].style.display = "flex";
})
clubbtn[4].addEventListener("click", function(){
    
    for (let i=0 ; i <5 ; i++ ) {
        clubs[i].style.display = "none";
    }
    
    clubs[4].style.display = "flex";
})


let address0 = document.getElementById('address0')
let address1 = document.getElementById('address1')
let add2 = document.getElementById('add2')
let add3 = document.getElementById('add3')
let add4 = document.getElementById('add4')



address0.addEventListener('click', function(){

    window.location.href = "https://maps.app.goo.gl/EgQziPgQ79W64Tf3A";
})
address1.addEventListener('click', function(){

    window.location.href = "https://maps.app.goo.gl/EgQziPgQ79W64Tf3A";
})
add2.addEventListener('click', function(){

    window.location.href = "https://maps.app.goo.gl/EgQziPgQ79W64Tf3A";
})
add3.addEventListener('click', function(){
 window.location.href = "https://maps.app.goo.gl/EgQziPgQ79W64Tf3A";
})
add4.addEventListener('click', function(){
 window.location.href = "https://maps.app.goo.gl/EgQziPgQ79W64Tf3A";
})


let detailsBtns = document.getElementsByClassName("details")

for (let i=0 ; i<= detailsBtns.length ; i++){
    detailsBtns[i].addEventListener("click",function(){
            window.location.href = "https://zeyad-33.github.io/CityClub/pages/club.html";
    })
}
