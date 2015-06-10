//Animated CSS
function animateSlide (slide){
    switch (slide) {
        case 0:
            $(".anIntro01").addClass('animated bounce');
            setTimeout(function(){$(".anText1").addClass('animated pulse');}, 1000);
            setTimeout(function(){$(".next").addClass('animated shake');}, 2500);

            setTimeout(function(){ cleanStyles(0); }, 3500);
            break;
        case 1:
            $(".anContextAware01").addClass('animated rubberBand');
            setTimeout(function(){$(".anText2").addClass('animated pulse');}, 1000);

            setTimeout(function(){ cleanStyles(1); }, 3500);
            break;
        case 2:
            $('.anCommunication01').addClass('animated swing');
            setTimeout(function(){$(".anText3").addClass('animated pulse');}, 1000);
            setTimeout(function(){$(".anCommunication02").addClass('animated pulse');}, 2000);
            setTimeout(function(){$(".anCommunication03").addClass('animated pulse');}, 2250);
            setTimeout(function(){$(".anCommunication04").addClass('animated pulse');}, 2500);
            setTimeout(function(){$(".anCommunication05").addClass('animated pulse');}, 2750);
            setTimeout(function(){$(".anCommunication06").addClass('animated pulse');}, 3000);

            setTimeout(function(){ cleanStyles(2); }, 4000);
            break;
        case 3:
            $(".anProActive01").addClass('animated flip');
            setTimeout(function(){$(".anText4").addClass('animated pulse');}, 1200);

            setTimeout(function(){ cleanStyles(3); }, 3500);
            break;
        case 4:
            $('.anMultiDevice01').addClass('animated swing');
            setTimeout(function(){$(".anMultiDevice02").addClass('animated shake');}, 250);
            setTimeout(function(){$(".anMultiDevice03").addClass('animated shake');}, 500);
            setTimeout(function(){$(".anText5").addClass('animated pulse');}, 1500);

            setTimeout(function(){ cleanStyles(4); }, 2500);
            break;
    }
}




//Animated CSS: remove styles for repeating
function cleanStyles (slide)
{
    switch (slide) {
        case 0:
            // clean slide 0 styles
            $(".anIntro01").removeClass('animated bounce');
            $(".anText1").removeClass('animated pulse');
            break;
        case 1:
            // clean slide 1 styles
            $(".anContextAware01").removeClass('animated rubberBand');
            $(".anText2").removeClass('animated pulse');
            break;
        case 2:
            // clean slide 2 styles
            $('.anCommunication01').removeClass('animated swing');
            $(".anText3").removeClass('animated pulse');
            $(".anCommunication02").removeClass('animated pulse');
            $(".anCommunication03").removeClass('animated pulse');
            $(".anCommunication04").removeClass('animated pulse');
            $(".anCommunication05").removeClass('animated pulse');
            $(".anCommunication06").removeClass('animated pulse');
            break;
        case 3:
            // clean slide 3 styles
            $(".anProActive01").removeClass('animated flip');
            $(".anText4").removeClass('animated pulse');
            break;
        case 4:
            // clean slide 4 styles
            $('.anMultiDevice01').removeClass('animated swing');
            $(".anMultiDevice02").removeClass('animated shake');
            $(".anMultiDevice03").removeClass('animated shake');
            $(".text5").removeClass('animated pulse');
          break;
    }
}





//FullPage JS initialization
setTimeout(function () { animateSlide(0); }, 500);

$(document).ready(function() {
    if ( $(window).width() >= 768 ) { $( '.mobileView' ).empty().detach(); }

    var pepe = $.fn.fullpage({
        "verticalCentered" : true,
        'resize' : true,
        'scrollingSpeed': 700,
        'easing': 'easeInQuart',
        'navigation': true,
        'navigationPosition': 'left',
        'navigationColor': '#000',
        'navigationTooltips': [],
        'slidesNavigation': false,
        'slidesNavPosition': 'bottom',
        'controlArrowColor': '#fff',
        'loopBottom': false,
        'loopTop': false,
        'loopHorizontal': false,
        'autoScrolling': true,
        'scrollOverflow': false,
        'css3': true,
        'paddingTop': 0,
        'paddingBottom': 0,
        'fixedElements': '#menu, #jobsToggle, #jobArea, #footer, #cookieMessage',
        'normalScrollElements': null,
        'keyboardScrolling': true,
        'touchSensitivity': 20,
        'continuousVertical': false,
        'animateAnchor': true,
        slidesColor: ['#a5eaf5', '#000', '#000'],
        anchors: ['platform', 'products', 'cases'],
        menu: '#menu',

        afterLoad: function(anchorLink, index){

          // console.log('afterLoad', anchorLink, index);

            function resetMenucolors() {
                $('#menu li a').removeClass('active');
            }

            if(anchorLink == 'products'){
                resetMenucolors();
                $('#menuProducts').addClass('active');
            } else {
                resetMenucolors();
            }

            ga('send', 'event', 'navigate', anchorLink, index);
        },

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex)
        {
          // console.log('afterSlideLoad', anchorLink, index, slideAnchor, slideIndex);

            if (index == 1)
            {
                switch (slideIndex)
                {
                    case 0: animateSlide(0); break;
                    case 1: animateSlide(1); break;
                    case 2: animateSlide(2); break;
                    case 3: animateSlide(3); break;
                    case 4: animateSlide(4); break;
                }
            }

            console.log('index ->', index);
        }
    });

});


//Show and hide JobArea
$( "#jobsToggle" ).click(function() {
  $('#jobArea').removeClass('hide rotateOutUpLeft').addClass('animated rotateInDownLeft');
});

$( "#closeJobs" ).click(function() {
  $('#jobArea').removeClass('rotateInDownLeft').addClass('animated rotateOutUpLeft');
});



//Animate communication channels
$(".comIcon").hover(function() {
  $(this).addClass('animated pulse');
},
  function(){
    var self = this;
    setTimeout(function() {
      $(self).removeClass('pulse');
    },600);
  });

$(".comChannel").mouseenter(function() {
    $('.comLabel', this).removeClass('hide flipOutY').addClass('animated flipInY');
  });

$(".comChannel").mouseleave(function() {
  $('.comLabel', this).removeClass('flipInY').addClass('animated flipOutY');
});




/*//Show and hide JobArea
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#testBlock').addClass('animated fadeOut');
});*/



/*
$('#testBlock').scroll(function(){

    var opac = $('#testBlock').scrollTop() / ($('#testBlock').height() - 300);

    $('#testBlock').css({'background': '-webkit-linear-gradient(rgba(255,255,255,' + opac + '),rgba(255,255,255,' + opac + ')), url(new-york.jpg)'});

    $('#testBlock').css({'background': 'linear-gradient(rgba(255,255,255,' + opac + '),rgba(255,255,255,' + opac + ')), url(new-york.jpg)','background-repeat':'no-repeat','background-size':'contain'});

});*/
