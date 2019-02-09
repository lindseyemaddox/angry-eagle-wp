// JavaScript Document

// set initial variables
var $showNav,
	$nav;


// function to set dom vars, etc that will not change
function initVars() {

	$showNav 	= $('nav span#nav');
	$nav 	= $('nav > ul');
}

function showDrop(){
	$('.drop > a').click(function(event){
		if ($(this).next('ul').hasClass('expanded')) {
			$(this).next('ul').removeClass('expanded');
		} else {
			$('.drop ul').removeClass('expanded');
			$(this).next('ul').addClass('expanded');
		}
		event.preventDefault()
	});
}



function showNav(){
	$showNav.click(function(){
			$nav.toggleClass('expanded');
		return false;
	});
}



function firstLoad() {
	initVars();
	showDrop();
	showNav();
	initPlaceholders();
}

$(function() {
	firstLoad();
});
