$(function(){

/************* Methode Rotation ******************************************/
// var $elie = $(".slider img"), degree = 0, timer;
//     rotate();
//     function rotate() {
        
//         $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
//         $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
//         timer = setTimeout(function() {
//         ++degree; rotate();
//         },5);
//     }
/*********** FIN Methode Rotation ****************************************/



var l;//largeur du slider donc du li donc sera la largeur de chaque img
//pour que chaque li fait la largeur du slider
function screenSiz() {
  l = $(".slider").width();
  $(".slider li").width(l);
  //alert(l);
}

screenSiz();

/*redimensionne automatiquement*/
$(window).resize(function() {
  screenSiz();
});

/*pour gerer les vignettes*/
function thumbnail(){
  var srcPrev = $(".slider ul li:last img").attr("src");
  var srcNext = $(".slider ul li:nth-of-type(2) img").attr("src");
  $(".slider figure:nth-of-type(1) img").attr("src",srcPrev);
  $(".slider figure:nth-of-type(2) img").attr("src",srcNext);
}

thumbnail();

function defileRight(){
    //faire animate : ne pas oublier position:relative; sur le ul sinon c marche pas
    $(".slider ul").animate({"left":-l},1000,function(){
      //on cible la derniere image et on y ajoute la 1ere pour le defilement
      $(".slider ul li:last").after($(".slider ul li:first"));
      $(".slider ul").css({"left":0});
      acceptDefil = true;
      legende();
      thumbnail();

    });
    
} 

function defileLeft(){
    
    $(".slider ul").css({"left":-l});
    //on cible la derniere image et on y ajoute la 1ere pour le defilement
    $(".slider ul li:first").before($(".slider ul li:last"));
    $(".slider ul").animate({"left":0},1000, function(){
        acceptDefil = true;
        legende();

        thumbnail();
    });
}

var defilement = setInterval(defileLeft,2000);
var acceptDefil = true;

$(".slider .icon-arrow-circle-left").click(function() {
    clearInterval(defilement);
    if(acceptDefil == true) {
      acceptDefil = false;
      defileLeft();
    }
});


$(".slider .icon-arrow-circle-right").click(function() {
    clearInterval(defilement);
    if(acceptDefil == true) {
      acceptDefil = false;
      defileRight();
    }
});


legende();
/*permet de mettre à jour le paragraphe p legende avec l'attribut alt de l'img en cours*/
function legende(){
 var alt= $(".slider ul li:first").find("img").attr("alt");
 $(".slider p").text(alt);
}







});// ne pas supprimer end function main