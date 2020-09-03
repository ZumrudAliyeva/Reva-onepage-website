$(document).ready(function () {


    $(".c-hambrgr").hide();
 
$(document).on("click", ".o-hambrgr", function () {
    $(".c-hambrgr").toggle();
    $(this).toggle();
    $(".navbar").css("display", "block");
})
$(document).on("click", ".c-hambrgr", function () {
    $(".o-hambrgr").toggle();
    $(this).toggle();
    $(".navbar").css("display", "none");
})




    // Navbar actions
    let navItem = document.querySelectorAll(".nav-item");
    let navItemLink = document.querySelectorAll(".nav-item a");
    $(".section:not('.section:first')").hide();
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", function () {
            for (let z = 0; z < navItem.length; z++) {
                navItemLink[z].classList.remove("active-nav-item");

                let activePage = $(navItemLink[z]).attr("href");
                $(activePage).hide();
            }
            navItemLink[i].classList.add("active-nav-item");
            let activePage = $(navItemLink[i]).attr("href");

            $(activePage).show();

        });
    }

    $(".right").hide();
    $(document).on("click", ".closed-menu", function () {
        $(".navbar").toggleClass("small-nav-bar");
        $(".section").toggleClass("close-menu");
        $(".section").addClass("active2");
        $(".nav-span").toggle();
        $(".social-media").toggle();
        $('.closed-menu').toggle();
        $(".right").toggle();




    })

    $(document).on("click", ".right", function () {
        $(".navbar").toggleClass("small-nav-bar");
        $(".section").toggleClass("close-menu");
        $(".nav-span").toggle();
        $(".social-media").toggle();
        $('.closed-menu').toggle();
        $(".right").toggle();
        $(".section").removeClass("active2");

    })
    // end of Navbar actions
  


    //contact action
    $('.o-map').addClass('map-active')
    $(document).on("click", ".open-map", function () {


        $(".maps").toggleClass('open');
        $('.c-map').toggleClass('map-active')
        $('.o-map').toggleClass('map-active')

    })
 


    $(document).on('click', ".hire", function () {
        let contact = $(".hire a").attr('href')
        let about = $(".about").attr('href')
        $(contact).show();
        $(about).hide();
        $(".contact").toggleClass("avtive-nav-item")
        $(".about").toggleClass("avtive-nav-item")
    })
    // end of contact action
    //about action
    $(document).on("click", "#about", function () {
        $(" .about .about-img").addClass("show-img-abt")

    })

    let aboutItem = $(".nav-items");
    let aboutLink = $(".nav-link");
    let aboutPane = $(".tab-about-content .tab-pane");
    $(".tab-pane:not('.tab-pane:first')").hide();

    for (let i = 0; i < aboutItem.length; i++) {
        aboutItem[i].addEventListener("click", function () {
            for (let z = 0; z < aboutItem.length; z++) {
                aboutLink[z].classList.remove("active-nav-item");


            }
            aboutLink[i].classList.add("active-nav-item");

        });
    }
    for (let i = 0; i < aboutItem.length; i++) {
        aboutItem[i].addEventListener("click", function () {
            for (let z = 0; z < aboutItem.length; z++) {
                let activePane = aboutPane[z];
                $(activePane).hide();


            }
            let activePane = aboutPane[i];
            $(activePane).show();


        });

    }
    //End of about action
    //Modal Iframe
    let ModalIframe = $(".iframe-modal-container");
    $(document).on("click", ".play", function () {
        $(ModalIframe).css("visibility", "visible");
    })


    $(document).on("click", ".modal-close", function () {
        $(ModalIframe).css("visibility", "hidden");
    })
    $(document).on("click", ".iframe-modal-container", function () {
        $(ModalIframe).css("visibility", "hidden");
    })
    // End of Iframe Modal 


    // Start Portfolio action
    let ulItem = $(".list-unstyled");
    let liItem = $(".item");

    for (let i = 0; i < liItem.length; i++) {
        liItem[i].addEventListener("click", function () {
            for (let z = 0; z < liItem.length; z++) {
                liItem[z].classList.remove("active-li");


            }
            liItem[i].classList.add("active-li");

        });
    }
    $(document).on("click", ".web1", function () {

        $(".graphic").addClass("none")
        $(".marketing").addClass("none")
        $(".web").removeClass("none")

    })
    $(document).on("click", ".graphic1", function () {

        $(".web").addClass("none")
        $(".marketing").addClass("none")
        $(".graphic").removeClass("none")

    })
    $(document).on("click", ".marketing1", function () {
        $(".graphic").addClass("none")
        $(".web").addClass("none")
        $(".marketing").removeClass("none")

    })
    $(document).on("click", ".all", function () {
        $(".graphic").removeClass("none")
        $(".web").removeClass("none")
        $(".marketing").removeClass("none")

    })
    //End of Portfolio action
    $(document).on('click', ".button", function () {
        let portfolio = $(".button a").attr('href')
        let home = $(".home").attr('href')
        $(portfolio).show();
        $(home).hide();
        $(".portfolio").toggleClass("avtive-nav-item")
        $(".home").toggleClass("avtive-nav-item")
    })
   // Home slider
   let sliderCount = 0;
 
   $(document).on("click", ".slider-arrow-right", function () {
       if(sliderCount == ($(".slick-slide").length - 1)){
           sliderCount = 0;
       }
       else{
           sliderCount++;
       }
       $(".slick-slide.active").removeClass("active");
       $(".slick-slide").eq(sliderCount).addClass("active");
   });
   $(document).on("click", ".slider-arrow-left", function () {
       if(sliderCount == 0){
           sliderCount = $(".slick-slide").length - 1;
       }
       else{
           sliderCount--;
       }
       $(".slick-slide.active").removeClass("active");
       $(".slick-slide").eq(sliderCount).addClass("active");
       

   });
       // End of Home slider
    // Testimonials
let testimLis = document.querySelectorAll(".testimli");
let testimDetails = document.querySelectorAll(".tabPane");
for (let i = 0; i < testimLis.length; i++) {
    testimLis[i].addEventListener("click", function () {
        for (let z = 0; z < testimLis.length; z++) {
            testimDetails[z].classList.remove("activeTab");
        }
        testimDetails[i].classList.add("activeTab");
    });
}
// Testimonials
$(document).on("click",".image",function () {
    $(".modal-portfolio-content img").attr("src",$(this).parent().next().attr("src"))
    
    $(".modal-portfolio").css("visibility", "visible");
});
$(document).on("click",".modal-portfolio-close",".modal-portfolio",function () {
    $(".modal-portfolio").css("visibility", "hidden");
    
})

//Timer 

let slides = document.querySelectorAll('.slick-slide');
var currentSlide = 0;
sliderCount = 0;
var slideInterval = setInterval(nextSlide,8000);

function nextSlide() {
    if(sliderCount == ($(".slick-slide").length - 1)){
        sliderCount = 0;
    }
    else{
        sliderCount++;
    }
    slides[currentSlide].classList.toggle('active')
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.toggle('active')
}

// TypeWriting
let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
    setTimeout(function() {
    that.tick();
    }, delta);
};
window.onload = function() {
    let elements = document.getElementsByClassName('type');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
// End of Typewriting


})