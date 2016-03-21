var timer ;
var elemID="#disp";
var id=0;
/* 
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function(){
    var top;
    var left;
    for (var i=0; i<10; i++) {
        left= Math.floor((Math.random()*1000)+1);
        top= Math.floor((Math.random()*800)+1);
        $(elemID).append(
                "<div id='" + i + "' class='b' style='top:"
         + top + "px; left:" + left + "px;'>"
         + i + "</div>");
    }
    timer= setInterval(function(){
        for (var i=0; i<10; i++) {
        left= Math.floor((Math.random()*1000)+1);
        top= Math.floor((Math.random()*800)+1);
        $("#" + i).css("left",left+"px");
        $("#" + i).css("top",top+"px");
        $("#" + i).html(id++);
    }
    },2000);
    });