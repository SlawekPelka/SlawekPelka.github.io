'use strict';

var app = {} || '';

app = {
	init: function() { 
		$(".submit").on('click', function(e) {
			app.emailCheck();
		});

		$(".emailaddress").on('click', function() {
			app.openEmail();
		});

		$(".menu a").on('click', function() {
			var scrollTo = $(this).attr("scroll");	
			var scroll = $(scrollTo).offset();
				scroll = Math.max(scroll.top - 50);
			app.smootScroll(scroll);
		});

		$(window).scroll( function() {
			app.menuColorize()
		});
	},
	smootScroll: function(scroll) {
		var body = $('body, html');
		body.stop().animate({scrollTop: scroll}, '500');
	},
	menuColorize: function() {
		var addRemClass = $(window).scrollTop() > 0 ? 'addClass' : 'removeClass';
    	$(".menu")[addRemClass]("scroll");
	},
	openEmail: function() {
		var email = $(".emailaddress").text();
		window.location.href = "mailto:" + email;
	},
	emailCheck: function() {
		$("#form").validate({
		  rules: {
		  	email: "required",
		  	name: "required",
		  	message: "required"
		  },
		  submitHandler: function(form) {
		  	var data = $("#form").serialize();
		    $.ajax({
		    	method: 'POST',
		    	url: $("#form").attr('action'),
		    	data: data,
		    	success: function(response) {
		  			$("#name, #email, #message").val('').removeClass('valid');
					$("#form #success span").html(response);
					$("#form #error").hide();
					$("#form #success").fadeIn();
		  		},
		    	error: function(error) {
		    		console.log(error);
		    	}
		    })
		  },	
		  invalidHandler: function(event, validator) {
		    var errors = validator.numberOfInvalids();
		    if (errors) {
		      var message = errors == 1
		        ? 'You missed 1 field. It has been highlighted.'
		        : 'You missed ' + errors + ' fields. They have been highlighted.';
		      $("#form #error span").html(message);
		      $("#form #success").fadeOut();
		      $("#form #name,#form #email, #form #message").addClass("wow shake");
		      $("#form #error").fadeIn();
		    } else {
		      $("#form #error").fadeOut();
		    }
		  }
		});
	}
}

$(document).ready( function() { 
	app.init(); 
});