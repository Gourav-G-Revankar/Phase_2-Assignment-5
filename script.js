$(document).ready(function() {
    var table = $("<table>");
     /*----------row----------*/
    for (var i = 1; i <= 8; i++) {
      var tr = $("<tr>");
      /*----------col----------*/
      for (var j = 1; j <= 8; j++) {
        var td = $("<td>");
  
        if (i % 2 == j % 2) {
            /*---if equal(0==0 or 1==1) ==> WHITE ---*/
          $(td).addClass("white");
        } else {
            /*---if not equal(0==1 or 1==0) ==> BLACK ---*/
          $(td).addClass("black");
        }
        tr.append(td);
      }
      $(table).append(tr);
    }
    $("body").append(table);
  });
