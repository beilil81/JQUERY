// jQuery(document).ready(function(){});
// $(document).ready(function(){});

$(function(){
	// $("selecteurs css").methode("0 ou plusieurs args");
	// $("selecteurs css").evenement(function(){
	// 	$("selecteurs css").methode("0 ou plusieurs args");
	// });

	// avec callback
	$("button:nth-of-type(1)").click(function() {
		$(".slide").slideDown(1000, function(){
			alert("panno déplié");
		});
	});

	// sans callback
		$("button:nth-of-type(2)").click(function() {
		$(".slide").slideUp(1000);
		alert("panno replié");
	});

	$("button:nth-of-type(3)").click(function() {
		$(".slide").slideToggle(1000);
	});

	
});