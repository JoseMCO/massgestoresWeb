// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var fullpage = require('fullpage.js');

var colors = ['','rgba(155, 153, 147 , 0.5)','rgba(191, 191, 191, 0.5)','rgba(155, 153, 147 , 0.5)','rgba(252, 129, 74, 0.5)'];
$('#fullpage').fullpage({
	scrollingSpeed: 1000,
  onLeave: function(index, nextIndex, direction){
    var leavingSection = $(this);
    $('.section').css("background-color",colors[nextIndex]);
    $('.section-'+nextIndex+' .content').hide();
    $('.section-'+nextIndex+' .content').fadeIn(1500);
    $('.section-'+index+' .content').fadeOut(300);


  	$('#mask').fadeOut(500, function(){
	    if (nextIndex % 2) {
	  		$('#mask').css('background-image', "url('https://template58793.motopreview.com/mt-demo/58700/58793/mt-content/uploads/2016/05/mt-0438-home-parallax01.jpg')");	
	    }
	  	else {
	  		$('#mask').css('background-image', "url('https://template58793.motopreview.com/mt-demo/58700/58793/mt-content/uploads/2016/05/mt-0438-home-parallax02.jpg')");	
	    }
			$('#mask').fadeIn(600);
	  });

	  if(nextIndex == 4){
	  	$('#scroll').hide();
	  }
	  else if (index == 4 && nextIndex==3) {
	  	$('#scroll').show();
	  }
		
    console.log(nextIndex);
  }
});

$(document).on('click', '#scroll', function(){
  $.fn.fullpage.moveSectionDown();
});

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
