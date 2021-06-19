$(document).ready(function(){
  initializeSlick();
});


const dataConsult = document.querySelector(".slider");
const Http = new XMLHttpRequest();
const url='https://tcon-api.herokuapp.com/consultant/getall';
Http.open('GET', url);
Http.send();
Http.onreadystatechange = () => {
    if (Http.readyState == 4 && Http.status == 200) {
        var consultData = JSON.parse(Http.responseText);
        let temp= "";
        for (var i = 0; i < consultData.consultants.length; i++) {
            temp += profileConsultantData(consultData.consultants[i]);
            // console.log(temp);
            dataConsult.innerHTML = temp;
        }
        initializeSlick(false);
    }
}

function profileConsultantData(data) {
    return `<a href=""><div class="slide">
                <div class="information">
                    <div class="profile">
                        <img src="assets/anonymus.jpg" alt="">
                    </div>
                    <div class="name">#${data.name}</div>
                </div>
                </div>
            </a>`;
  }

  
const SLICK_SLIDER_SETTINGS = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3600,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }]
}

function initializeSlick(init = true){
    const slickSection = '.customer-logos'
    if (init) {
        $(slickSection).slick(SLICK_SLIDER_SETTINGS);
        return
    }
    $(slickSection).slick('unslick'); 
    $(slickSection).slick(SLICK_SLIDER_SETTINGS);
}

