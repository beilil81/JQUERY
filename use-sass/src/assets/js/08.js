$(function(){


    $("li").click(function(e) {
      e.stopPropagation();
      alert($(this).html());

    });



});// ne pas supprimer end function main