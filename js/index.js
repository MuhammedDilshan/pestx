$('.service-slider').slick({
    
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
$('.blog-slider').slick({
    
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });;
  $('#single').slick({
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 3000,
    responsive:[
        {
            breakpoint: 641,
            settings: "unslick"
            }
    ]
  });

  // sticky-header
  window.onscroll = function () {
    headerFunction();
  };
  
  var body = document.body;
  
  function headerFunction() {
    if (window.pageYOffset > 100) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }

// header-nav-active
$("header ul.nav li").click(function () {
    $("header ul.nav li.active").removeClass("active");
    $(this).toggleClass("active");
  });

  // help-view-more
  $("#help .help-center ul li").click(function () {
    $("#help .help-center li.active").removeClass("active");
    $(this).toggleClass("active");
  });

// mobile-menu 
$(".icon").click(function (){
    $("body").toggleClass("active")
})
$(".menu-bar ul li").click(function (){
    $("body").removeClass("active")
})
function hide (){
    $("body").removeClass("active")
}
// pagination
let items = $(".pagination");
var numItems = items.length;
var perPage = 9;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "Prev",
  nextText: "Next",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});
// pre-loader
var loader = document.querySelectorAll(".loader");
$( document ).ready(function() {
    $(".loader").hide();
});

  