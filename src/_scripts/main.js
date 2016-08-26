// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var fullpage = require('fullpage.js');

var colors = ['','rgba(62, 61, 59, 0.7)','rgba(146, 112, 96, 0.7)','rgba(148, 84, 56, 0.7)','rgba(146, 50, 8, 0.7)'];
$('#fullpage').fullpage({
	scrollingSpeed: 1000,
  onLeave: function(index, nextIndex, direction){
    var leavingSection = $(this);
    $('.section').css("background-color",colors[nextIndex]);
    $('.section-'+nextIndex+' .content').hide();
    $('.section-'+nextIndex+' .content').fadeIn(1500);
    $('.section-'+index+' .content').fadeOut(300);

  	$('#mask').fadeOut(500, function(){
  		$('#mask').css('background-image', "url('images/bg"+ nextIndex +".jpg')");	
  		console.log($('#mask').css('background-image') );
			$('#mask').fadeIn(600);
	  });

	  if(nextIndex == 4){
	  	$('#scroll').addClass('up');
	  }
	  else if (index == 4 && nextIndex < 4) {
	  	$('#scroll').removeClass('up');
	  }
		
    console.log(nextIndex);
  }
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
