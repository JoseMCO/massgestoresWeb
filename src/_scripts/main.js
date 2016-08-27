// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var fullpage = require('fullpage.js');

// var colors = ['','rgba(62, 61, 59, 0.7)','rgba(146, 112, 96, 0.7)','rgba(148, 84, 56, 0.7)','rgba(62, 61, 59, 0.7)'];
// var images = ['',"images/bg1.jpg","images/bg2.jpg","images/bg3.jpg","images/bg4.jpg"];
var colors = ['','rgba(62, 61, 59, 0.7)','rgba(62, 61, 59, 0.7)'];
var images = ['',"images/bg1.jpg","images/bg4.jpg"];
$(images).each(function(){
    $('<img/>')[0].src = this;
    // Alternatively you could use:
    // (new Image()).src = this;
});
$('#fullpage').fullpage({
	scrollingSpeed: 1000,
  onLeave: function(index, nextIndex, direction){
    var leavingSection = $(this);
    $('.section').css("background-color",colors[nextIndex]);
    $('.section-'+nextIndex+' .content').hide();
    $('.section-'+nextIndex+' .content').fadeIn(1500);
    $('.section-'+index+' .content').fadeOut(300);

  	$('#mask').fadeOut(500, function(){
  		$('#mask').css('background-image', "url('"+images[nextIndex]+"')");	
			$('#mask').fadeIn(600);
	  });

	  if(nextIndex == 2){
	  	$('#scroll').addClass('up');
	  }
	  else if (index == 2 && nextIndex < 2) {
	  	$('#scroll').removeClass('up');
	  }
  }
});

$("#sendMessage").on("click", function() {
    $.ajax({
        url: "//formspree.io/contacto@massgestores.cl", 
        method: "POST",
        data: {
        	mensaje: $('textarea[name="mensaje"]').val(),
        	email: $('input[name="email"]').val(),
        	// telefono: $('input[name="telefono"]').val(),
        	nombre: $('input[name="nombre"]').val()
        },
        dataType: "json"
    }).done(function(){
    	$('textarea, input').val('');    	
    });
    return false;
});

$('.fixed-footer').on('click', '#scroll', function(){
	if ($(this).hasClass('up')) {
	  $.fn.fullpage.moveTo(1);
	}
	else {
	  $.fn.fullpage.moveSectionDown();
	}
});

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
