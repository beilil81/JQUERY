$(function(){


	$("button:nth-of-type(1)").click(function() {
	    $('ul').before("<p> paragraphe ajouté avec before </p>");	    
	});

  $("button:nth-of-type(2)").click(function() {
      $('ul').after('<p> paragraphe ajouté avec after </p>');     
  });

  $("button:nth-of-type(3)").click(function() {
      $('ul').prepend("<li>item0</li>");     
  });

 $("button:nth-of-type(4)").click(function() {
      $('ul').append("<li>item beaucoup</li>");     
  });





});// ne pas supprimer end function main