$(function(){

    var max = 20;
    $(".compteur textarea").attr("maxlength",max);
    $(".compteur p").text(max);


    $(".compteur textarea").keyup(function() {
      // .val() est utilisé que pour les champs de formulaire, equivalent .html()
      var decompte = max - ($(this).val().length );

      if(decompte >= 0) {
        $(".compteur p").text(decompte);
        $(".compteur p").removeClass("end");
      }

      if(decompte == 0) {
        //$(".compteur p").css({"color":"red"});
        $(".compteur p").addClass("end");
      }

    });





});// ne pas supprimer end function main