$(function(){



$("button:nth-of-type(1)").click(function() {

    var firstText = $("li:first").text();
    firstText = firstText.substr(-1);
    var firstNumber = parseInt(firstText,10);//parser en int en base 10

    var ul = $("ul");
    if(firstNumber>1) {
      firstNumber--;
      ul.prepend("<li>item "+firstNumber+"</li>");
    } else {
      alert("TU PEUX PAS, ON FAIT RIEN EN-DESSOUS DE 1 !!!");
    }
  });


var lastText = $("li:last").text();
lastText = lastText.substr(-1);
var lastNumber = parseInt(lastText,10);//parser en int en base 10*

$("button:nth-of-type(2)").click(function() {
    var ul = $("ul");
    if(lastNumber<10) {
      lastNumber++;
      ul.append("<li>item "+lastNumber+"</li>");
    } else{
      alert('C FINI, ON FAIT RIEN APRES 10');
    }
  });



});// ne pas supprimer end function main