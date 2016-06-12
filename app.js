var i = 0;
var cont = $("#container");
var newGrid = $("#new-grid");
var suggest;
var sty = $(".square-pane");

newGrid.on("click", function(){
    suggest = prompt("Enter a number between 1 - 64");
       var wist = Math.floor(800 / suggest);
    sty.css({"height":wist,"width": wist});
 
    popGrid(suggest*suggest);
})
while (i < 16) {
    cont.append("<div class='square-pane'></div>");
    i++;
}
function popGrid(as) {
    var t = 0;
    while (t < as) {
        cont.append("<div class='square-pane'></div>");
        t++;
    }
}