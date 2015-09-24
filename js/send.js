$(document).ready(function() {

	//form submission:
	$("#submit").click(function(){
		return false;
	});
	
	$("#submit").click(function(){					   				   
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		
		var fnameVal = $("#firstName").val();
		var lnameVal = $("#lastName").val();
		var emailVal = $("#email").val();
		var extVal = $("#extension").val();
		var deptVal = $("#department").val();
		var yearsVal = $("#yearsAtFGL").val();
		var fitnessVal = $("#fitnessLevel").val();
		
		// console.log(fitnessVal);
		//validation
		if(fnameVal == '') {
			$("#label-first").css('color', '#c00');
			$("#registration-header").after('<p class="error">Please enter your first name.</p>');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(lnameVal == '') {
			$("#label-last").css('color', '#c00');
			$("#registration-header").after('<p class="error">Please enter your last name.</p>');
			hasError = true;
			$(window).scrollTop(0);
		}

		if(emailVal == '') {
			$("#label-last").css('color', '#c00');
			$("#registration-header").after('<p class="error">Please enter your email.</p>');
			hasError = true;
			$(window).scrollTop(0);
		}
		else if(!emailReg.test(emailVal)) {	
			$("#registration-header").after('<p class="error">Please enter a valid email address.</p>');
			hasError = true;
		}	
		// if(extVal == '') {
		// 	$("#label-last").css('color', '#c00');
		// 	hasError = true;
		// 	$(window).scrollTop(0);
		// }	
		
		if(deptVal == '') {
			$("#label-last").css('color', '#c00');
			$("#registration-header").after('<p class="error">Please enter your department.</p>');
			hasError = true;
			$(window).scrollTop(0);
		}	

		if(yearsVal == '') {
			$("#label-last").css('color', '#c00');
			$("#registration-header").after("<p class='error'>Please tell us how long you've been at FGL.</p>");
			hasError = true;
			$(window).scrollTop(0);
		}

		if(fitnessVal == '') {
			$("#label-last").css('color', '#c00');
			$("#registration-header").after('<p class="error">Please select a fitness level.</p>');
			hasError = true;
			$(window).scrollTop(0);
		}

					
		if(hasError == false) {
			//$(this).hide();
			//$("#sendEmail li.buttons").append('<img src="img/loading.gif" alt="Loading" id="loading" />');
			$(this).hide();
			$("#sendemail").append('<img style="height: 15px; width: 128px;" src="/images/ajax-loader.gif" alt="Sending" id="sending" />');

			$.post("process.php",
   				{ firstname: fnameVal,
   				  lastname: lnameVal,
   				  email : emailVal, 
   				  extension: extVal,
   				  department: deptVal,
   				  yearsAtFGL: yearsVal,
   				  fitnessLevel: fitnessVal
   				  
   				},
   					function(data){
						$("#regform").slideUp("normal", function() {				  						
							$("#registration-title").hide();											
							$("#regform").before("<h4>Thank You</h4><br /><p>Your registration has been received, we'll see you at the party!</p><br />");											
						});
   					}
				 );
		}			
		
		return false;
	});

});	