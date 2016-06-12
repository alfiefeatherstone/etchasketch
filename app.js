var i = 0;
var cont = $("#container");
var newGrid = $("#new-grid");
var suggest;
var sty = $(".square-pane");
var colourChange = $("#randColour");

$("div").mouseover(function(){
    $(event.target).css("background-color", "blue")
});
newGrid.on("click", function(){
    suggest = prompt("Enter a number between 1 - 64");
    var dub = suggest*suggest;
    var wist = 800 / suggest;
    console.log(wist);
    popGrid(dub, wist);
})
while (i < 256) {
    cont.append("<div class='square-pane'></div>");
    i++;
}
function popGrid(as, pf) {
    var t = 0;
    cont.empty();
    while (t < as) {
        $("<div></div>", {
            "class": "square-pane"
        }).width(pf).height(pf).appendTo(cont);
        t++;
    }
}
function colour() {
    return Math.floor((Math.random()*255));
}

function rgba(){
    return "rgb(" + colour() + "," + colour() + "," + colour() + ");";
}

colourChange.on("click", function(){
    $("div").mouseover(function(){
        $(event.target).css("background-color", rgba())
});
})
