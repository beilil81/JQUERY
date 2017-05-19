$(function(){

    var index;
    var nbImg;

    //le nombre d'image
    nbImg = $(".galerie img").length;


    //quand on clique sur une image
    $(".galerie img").click(function() {

      //recuperer attribut src de l'image cliqué
      var src = $(this).attr('src');
      //recupere attr alt de l'img cliqué
      var alt = $(this).attr('alt');

      //modifier attr src de .lightbox img
      $(".lightbox img").attr('src',src);
      //recuper index de l'img cliqué
      index = $(".galerie img").index( $(this));
      //console.log(index);

      // /*open lightbox*/
      $(".lightbox").fadeIn();
    });

        //close lightbox
    $(".lightbox .icon-times-circle").click(function() {
      $(".lightbox").fadeOut(); /*permet de faire passer le display:none en display:block*/
    });


    function channgeImg(){
      //recuperer attr src de img qui correspond à l'index
      var newSrc = $(".galerie img").eq(index).attr('src');
      //recuperer attr alt de img qui correspond à l'index
      var newAlt = $(".galerie img").eq(index).attr('alt');
      //modifier attr src de .lightbox img
       $(".lightbox img").attr('src',newSrc);
       //modifier attr alt de .lightbox img
       $(".lightbox img").attr('alt',newAlt);
    }

    //click button left
    $(".lightbox .icon-arrow-circle-left").click(function() {
      index = (index-1 + nbImg)%nbImg;
      channgeImg();
    });

     //click button right
    $(".lightbox .icon-arrow-circle-right").click(function() {
        index = (index+1)%nbImg;
        channgeImg();
    });
    


});// ne pas supprimer end function main