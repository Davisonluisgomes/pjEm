$( document ).ready(function() {
/*slide */

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

imgs.style.transform = `translateX(${-idx * 500}px)`;

}
setInterval(carrossel, 1800);


// scrool 

let navBtn = $('.nav-item');

let bannerSection = $('mainSlider');


//  MAP

let h2 = document.querySelector('h4');
            
function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
   

    var map = L.map('mapId').setView([-3.055966, -60.052124], 17);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-3.055966, -60.052124]).addTo(map)
        .bindPopup('I m here ')
        .openPopup();
}

function error(err){
    console.log(err);
}

var watchId =  navigator.geolocation.watchPosition(success, error, {
enableHighAccuracy: true,
timeout: 5000
});



// navbar scrolls

let navtn = $('.nav-item');

let bannerection = $('#mainSlider');
let freature = $('#freature');
let aboutA = $('#about-area');
let contactSection = $('#contact-area');
let teamSection = $('#team-area');
let aboutSection = $('#cop');

let scrollTo = '';

$(navBtn).click(function() {

  let btnId = $(this).attr('id');

  if(btnId == 'home-menu') {
    scrollTo = bannerection;
  }else if(btnId == 'about-menu') {
    scrollTo = freature;
  }else if(btnId == 'services-menu'){
    scrollTo = aboutA;
  }else if(btnId == 'team-menu') {
    scrollTo = teamSection;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  }else if(btnId == 'portfolio-menu'){
     scrollTo = aboutSection;
  } else {
    scrollTo = bannerSection;
  }

  $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
  }, 1100);
});

});

// MODAL

const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const fade = document.querySelector("#fade");
const Modal = document.querySelector("#modal");


const toggleModal = () => {

    [modal, fade].forEach((el) => el.classList.toggle("hide"));

    };
  
[openModal, closeModal, fade].forEach((el) => {
el.addEventListener("click", () => toggleModal());
});

// card2


var modalBtn = document.querySelector(".modal-btn");
var modalLg = document.querySelector(".maod-lg");
var modalC = document.querySelector(".close-modal");

modalBtn.addEventListener('click', function(){
modalLg.classList.add('bg-active');
});
modalC.addEventListener('click', function(){
    modalLg.classList.remove('bg-active');
});