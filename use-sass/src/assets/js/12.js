$(function(){

    // pour chaque champs de type text on affiche le contenu
    // de l'attribut data-default
    $('.form [type="text"]').each(function() {
      $(this).val($(this).attr("data-default"));
    });

    // quand un champs prend le focus, on efface le contenu à condition
    // qu'il n'y ait rien rempli dans ce champs
    $('.form [type="text"]').focus(function() {
      if( $(this).val() == $(this).attr('data-default') ) {
        $(this).val("");
      }
    });


    // // quand un champs perd le focus, si son contenu est vide on remet
    // // data-default
    $('.form [type="text"]').blur(function() {
      if( $(this).val() == "" ) {
        $(this).val( $(this).attr('data-default'));
      }
    });

    // // quand un required perd le focus, si son contenu est vide on remet
    // // data-default avec la classe error
    $('.form [required]').blur(function() {
      if( $(this).val() == $(this).attr('data-default') ) {
        // $(this).val( $(this).attr('data-default'));
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });  


    // envoie du form
    $(".form").submit(function() {
      var valid = true;
      $('.form [required]').each(function() {
        if( $(this).val() == $(this).attr('data-default') ) {
          valid = false;
          $(".form p").text("Veuillez remplir les champs obligatoire");
        } 
      });
      return valid;
    });




});// ne pas supprimer end function main