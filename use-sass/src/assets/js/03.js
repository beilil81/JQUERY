// jQuery(document).ready(function(){});
// $(document).ready(function(){});

$(function(){
	// $("selecteurs css").methode("0 ou plusieurs args");
	// $("selecteurs css").evenement(function(){
	// 	$("selecteurs css").methode("0 ou plusieurs args");
	// });

	$("button:nth-of-type(1)").click(function() {
		$("#action").text("vous avez bien cliqué bravo !");
	});

	$("button:nth-of-type(2)").dblclick(function() {
		$("#action").text("vous avez bien <strong>double cliqué</strong> bravo !");
	});

	$("button:nth-of-type(3)").mouseenter(function() {
		$("#action").html("vous avez bien <strong>mouse entré</strong> bravo !");
	});

	$("button:nth-of-type(4)").mouseleave(function() {
		$("#action").html("vous avez bien <strong>mouse quitté</strong> bravo !");
	});

	$("button:nth-of-type(5)").mousedown(function() {
		$("#action").html("vous avez bien <strong>enfoncé</strong> bravo !");
	});

	$("button:nth-of-type(6)").mouseup(function() {
		$("#action").html("vous avez bien <strong>relaché le bouton</strong> bravo !");
	});

	$("button:nth-of-type(7)").hover(
		function() {$("#action").html("ce qui se passe pour le mouseenter!");},	
		function() {$("#action").html("ce qui se passe pour le mouseleave!");}
		);

	//quand un input prend le focus
	$('[type="text"]').focus(function() {
		// $(this).css('background':'#ccc')
		$(this).css({'background':'#ccc', 'border':'1px solid red'})
	});

		//quand un input perd le focus
	$('[type="text"]').blur(function() {
		// $(this).css('background':'#ccc')
		$(this).css({'background':'#fff', 'border':'1px solid #ccc'})
	});
	
});