// Wow initial
new WOW().init();


//custom select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



/*========================= sticky header start ================*/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");
var banner = document.getElementById('banner');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-top");
    // banner.classList.add('banner-top');
  } else {
    header.classList.remove("sticky-top");
    // banner.classList.remove('banner-top')
  }
}
/*========================= sticky header end ================*/


/*======================== testimonial slider start =================*/

$('.testimonial-slider').owlCarousel({
  responsiveClass:true,
  loop:true,
  nav:false,
  dots: true,
  autoplay: true,
  smartSpeed: 1800,
  autoplayHoverPause: true,
  margin: 20,
  responsive:{
      0:{
          items:1,
          nav:false,
          autoplay: false,
          margin: 15
      },
      450:{
        items:2,
        autoplay: true,
    },
      767:{
          items:1,
          autoplay: true,
      },
      1100:{
        items:2
      },
      1450:{
          items:2,
          margin: 30
      }
  }
});

/*======================== testimonial slider end =================*/

$(function() {
  return $(".modal").on("show.bs.modal", function() {
    var curModal;
    curModal = this;
    $(".modal").each(function() {
      if (this !== curModal) {
        $(this).modal("hide");
      }
    });
  });
});


// Menu toggle

let menu = document.getElementById('toggleMenu');
let navBar = document.getElementById('navbar');
let backDrop = document.getElementById('backdrop');
menu.addEventListener('click', function(){
  navBar.classList.add('active');
  backDrop.classList.add('active');
});
backDrop.addEventListener('click', function(){
  navBar.classList.remove('active');
  backDrop.classList.remove('active');
});


//Dropdown
let hasMenu = document.querySelector('.has-menu');
let dropDown = document.querySelector('.drop-down');
let dropDownarrow = document.querySelector('.drop-down-arrow');
hasMenu.addEventListener('click', function(){
  dropDown.classList.toggle('active');
  dropDownarrow.classList.toggle('rotate');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.has-menu')) {
    var dropdowns = document.getElementsByClassName("drop-down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
        dropDownarrow.classList.remove('rotate');
      }
    }
  }
}

// slider 

 
    $('#customerSlider').owlCarousel({
        loop:true,
        dots:false,
        nav:true,
        margin: 30,
        autoplay: false,
        // responsiveClass:true,
        slideSpeed : 4000,
        autoplaySpeed:4000,
        autoplayHoverPause:true,
        // pagePadding: 50,
        stagePadding: 16,
        responsive:{
            0:{
                items: 1,
                margin: 20,
                stagePadding: 0
            },
            480:{
                items: 1,
                stagePadding: 15
            },
            767:{
                items: 1,
            },
            900:{
                items: 2,
            },
            1200:{
                items: 3,
            },
            2000:{
                items: 3,
            }
        }
    });


    $('.tabPackageslider').owlCarousel({
      loop:true,
      dots:false,
      nav:true,
      margin: 30,
      autoplay: false,
      // responsiveClass:true,
      slideSpeed : 4000,
      autoplaySpeed:4000,
      autoplayHoverPause:true,
      // pagePadding: 50,
      navText: ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"],
      stagePadding: 16,
      responsive:{
          0:{
              items: 1,
              margin: 20,
          },
          480:{
              items: 1,
              stagePadding: 15
          },
          767:{
              items: 2,
          },
          1000:{
              items: 3,
          },
          1200:{
              items: 3,
          },
          2000:{
              items: 3,
          }
      }
  });
 