var i = 0;
var cont = $("#container");
var newGrid = $("#new-grid");
var reset = $("#reset");
var shading = $("#shading")

newGrid.on("click", function(){
    var suggest = prompt("Enter a number between 1 - 64");
    var dub = suggest*suggest;
    var wist = 800 / suggest;
    popGrid(dub, wist)
    $("div").hover(function(){
        $(event.target).css({"background-color": "green"})
});
})
reset.on("click", function(){
    $("div").css("background-color", "white");
})
shading.on("click", function(){
    $("div").hover(function(){
        $(this).css("background-colour", "green")});
});






function colour() {
    return Math.floor((Math.random()*255));
}

function rgba(){
    return "rgb(" + colour() + "," + colour() + "," + colour() + ");";
}
function popGrid(as, pf) {
    var t = 0;
    cont.empty();
    while (t < as) {
        $("<div></div>", {
            "class": "square-pane" }).width(pf).height(pf).appendTo(cont)
        t++;
    }
}


// colourChange.on("click", function(){
//    $("div").mouseover(function(){
//        $(event.target).css({"background-color": rgba()})
//});
//})
