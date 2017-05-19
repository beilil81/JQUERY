$(function(){


    $("button:nth-of-type(1)").click(function() {
      $("ul").append("<li>item 4</li>");
    });

    $("button:nth-of-type(2)").click(function() {
      var txt = $("ul li:nth-child(4)").html();
      alert(txt);
    });

    $("ul li:nth-child(4)").click(function() {
      var txt2 = $(this).html();
      alert(txt2);
    });

    //pour obliger à reparcourir le dom
    $(document).on('click', 'ul li:nth-child(4)', function() {
      alert($(this).html());
    });


});// ne pas supprimer end function main