// jQuery(document).ready(function(){});
// $(document).ready(function(){});

$(function(){
	// $("selecteurs css").methode("0 ou plusieurs args");
	// $("selecteurs css").evenement(function(){
	// 	$("selecteurs css").methode("0 ou plusieurs args");
	// });

	
	$("button:nth-of-type(1)").click(function() {
		$("#bleu").animate({"left":"1000px","top":"500px"},3000);
		$("#bleu").animate({"top":"200px"},1000);
		$("#bleu").animate({"left":"0"},3000);
		$("#bleu").animate({"top":"0"},1000);

		$("#rouge").animate({"left":"1000px"},2000);
		$("#vert").animate({"left":"1000px"},1400);
		$("#violet").animate({"left":"1000px"},3500);

	});

	$("button:nth-of-type(2)").click(function() {
		$("#bleu").delay((Math.random() * 3000)).animate({"left":"1000px"},2000);
		$("#rouge").delay((Math.random() * 3000)).animate({"left":"1000px"},2000);
		$("#vert").delay((Math.random() * 3000)).animate({"left":"1000px"},2000);
		$("#violet").delay((Math.random() * 3000)).animate({"left":"1000px"},2000);

	});


		$("button:nth-of-type(3)").click(function() {
		var i = $("#bleu");
		i.animate({
			left:"250px",
			height: "+=100px",
			width : "+=100px"
		},3000);

	});


		$("button:nth-of-type(4)").click(function() {
			var i = $("#bleu");
		i.animate({"left":"1000px","top":"200px"},2000);
		i.animate({"left":"0","top":"200px"},2000);
		i.animate({"left":"0","top":"400px"},2000);
		i.animate({"left":"0","top":"0"},2000);


	});


/************************POUR FAIRE UNE ROTATION ************************************/
var $elie = $("#rouge"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
/********************************************************************/    
  
/************test*****************/
$("#droite").click(function() {
	var i = $("#bleu");
	i.animate({
			left:"+=100px",
		},100);

});

$("#gauche").click(function() {
	var i = $("#bleu");
	i.animate({
			left:"-=100px",
		},100);

});

$("#bas").click(function() {
	var i = $("#bleu");
	i.animate({
			top:"+=100px",
		},100);

});

$("#haut").click(function() {
	var i = $("#bleu");
	i.animate({
			top:"-=100px",
		},100);

});

/*******************************/




	
});