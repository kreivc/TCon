
var username = localStorage.getItem("name");
document.getElementById("username").innerHTML = username.split(" ")[0]; 

function logout(){
    localStorage.clear();
}


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
            dataConsult.innerHTML = temp;
        }
        initialize();
    }
}

function profileConsultantData(data) {
    return `<a href="detailconsultant.html?userId=${data.userId}"><div class="slide">
                <div class="information">
                    <div class="profile">
                        <img src="assets/anonymus.jpg" alt="">
                    </div>
                    <div class="name">${data.name}</div>
                </div>
                </div>
            </a>
            `;
  }

  var keyword = document.getElementById("keyword");

  keyword.focus()
  
  keyword.addEventListener('keyup', function (e) {
var box = document.getElementById("slider");
box.style.display = "flex";
    const Http = new XMLHttpRequest();
    const url='https://tcon-api.herokuapp.com/consultant/getall';
    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            var consultData = JSON.parse(Http.responseText);
            let temp= ""; 
            console.log(keyword.value.toLowerCase());
            for (var i = 0; i < consultData.consultants.length; i++) {
            
            var search = consultData.consultants[i].name.toLowerCase();
                if(search.includes(keyword.value.toLowerCase())){
                    temp+= profileConsultantData(consultData.consultants[i]);
                    dataConsult.innerHTML = temp;
                    
                }
            }
        initialize();
        }  
        
    }
});
  
function initialize(){
    $('.customer-logos').slick({
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
    });
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