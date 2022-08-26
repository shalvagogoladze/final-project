
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const nav = ["BAGS", "CLOTHING", "OPTICS", "SHOOTING ACCESSORIES"];
const link = ["bags.html", "clothing.html", "optics.html", "shootingaccessories.html"]
let navlength = nav.length;
let navtext = "<ul>";

for(let i=0; i<navlength; i++){
    navtext += "<li><a href=" + link[i] + ">" + nav[i] + "</a></li>";
}
navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;

function show() {
    document.getElementById("inpute").style.display = "block";
}

