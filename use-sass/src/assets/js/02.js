// jQuery(document).ready(function(){});
// $(document).ready(function(){});

$(function(){
	// $("selecteurs css").methode("0 ou plusieurs args");
	// $("selecteurs css").evenement(function(){
	// 	$("selecteurs css").methode("0 ou plusieurs args");
	// });

	$("button:nth-of-type(1)").click(function() {
		$("p").hide();
	});

	$("button:nth-of-type(2)").click(function() {
		$("p").show();
			
	});

	$("button:nth-of-type(3)").click(function() {
		$(this).hide();
			
	});

		$("button:nth-of-type(4)").click(function() {
		$("li:first").hide();
			
	});

		$("button:nth-of-type(5)").click(function() {
		$('[id="paragraphe"]').hide();
			
	});
	
});