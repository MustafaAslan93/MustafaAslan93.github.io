function and(a,b) {
    return(a && b);
}
function not(a){
    return !a;
}
function nand(a,b){
    return
}
function simor(a,b){
    return not(nand(nand))
}
function orwithands(a,b) {
                if(!a && !b)
                    return false;
                return true;
            }
            var elemID="#res"
/* 
 * Waiting for the html page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function(){
var r=orwithands(false,false);
            $('#res').append("0,0 -> " + r +"</br>");
            var r=orwithands(false,true);
            $('#res').append("0,1 -> " + r +"</br>");
            var r=orwithands(true,false);
            $('#res').append("1,0 -> " + r +"</br>");
            var r=orwithands(true,true);
            $('#res').append("1,1 -> " + r +"</br>");
        });

