$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});

$(document).ready(function () {  
  var top = $('#main_nav').offset().top - parseFloat($('#main_nav').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#main_nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#main_nav').removeClass('fixed');
    }
  });
});



$(document).ready(function () {
var bluebuttonbottom = $('#blue_block_bottom').offset().top - $('#main_nav').height() -  parseFloat($('#blue_link').css('marginBottom').replace(/auto/, 0));
    
  var bluebutton = $('#blue_link').offset().top - parseFloat($('#blue_link').css('marginBottom').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= bluebutton) {
      // if so, ad the fixed class
      $('.home_nav').addClass('blue_selected');
    } else {
      // otherwise remove it
      $('.home_nav').removeClass('blue_selected');
    }
      
    // whether that's below the form
    if (y >= bluebuttonbottom) {
      // otherwise remove it
      $('.home_nav').removeClass('blue_selected');
    }
      
  });
});

$(document).ready(function () {
var redbuttonbottom = $('#red_block_bottom').offset().top - $('#main_nav').height() -  parseFloat($('#red_link').css('marginBottom').replace(/auto/, 0));
    
  var redbutton = $('#red_link').offset().top - parseFloat($('#red_link').css('marginBottom').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= redbutton) {
      // if so, ad the fixed class
      $('.about_nav').addClass('red_selected');
    } else {
      // otherwise remove it
      $('.about_nav').removeClass('red_selected');
    }
      
    // whether that's below the form
    if (y >= redbuttonbottom) {
      // otherwise remove it
      $('.about_nav').removeClass('red_selected');
    }
      
  });
});

$(document).ready(function () {
var purplebuttonbottom = $('#purple_block_bottom').offset().top - $('#main_nav').height() -  parseFloat($('#purple_link').css('marginBottom').replace(/auto/, 0));
    
  var purplebutton = $('#purple_link').offset().top - parseFloat($('#purple_link').css('marginBottom').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= purplebutton) {
      // if so, ad the fixed class
      $('.pricing_nav').addClass('purple_selected');
    } else {
      // otherwise remove it
      $('.pricing_nav').removeClass('purple_selected');
    }
      
    // whether that's below the form
    if (y >= purplebuttonbottom) {
      // otherwise remove it
      $('.pricing_nav').removeClass('purple_selected');
    }
      
  });
});

$(document).ready(function () {
var greenbuttonbottom = $('#green_block_bottom').offset().top - $('#main_nav').height() -  parseFloat($('#green_link').css('marginBottom').replace(/auto/, 0));
    
  var greenbutton = $('#green_link').offset().top - parseFloat($('#green_link').css('marginBottom').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= greenbutton) {
      // if so, ad the fixed class
      $('.testimonial_nav').addClass('green_selected');
    } else {
      // otherwise remove it
      $('.testimonial_nav').removeClass('green_selected');
    }
      
    // whether that's below the form
    if (y >= greenbuttonbottom) {
      // otherwise remove it
      $('.testimonial_nav').removeClass('green_selected');
    }
      
  });
});

$(document).ready(function () {
var orangebuttonbottom = $('#orange_block_bottom').offset().top - $('#main_nav').height() -  parseFloat($('#orange_link').css('marginBottom').replace(/auto/, 0));
    
  var orangebutton = $('#orange_link').offset().top - parseFloat($('#orange_link').css('marginBottom').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= orangebutton) {
      // if so, ad the fixed class
      $('.contact_nav').addClass('orange_selected');
    } else {
      // otherwise remove it
      $('.contact_nav').removeClass('orange_selected');
    }
      
    // whether that's below the form
    if (y >= orangebuttonbottom) {
      // otherwise remove it
      $('.contact_nav').removeClass('orange_selected');
    }
      
  });
});



