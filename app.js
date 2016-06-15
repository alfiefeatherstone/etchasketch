var i = 0;
var cont = $("#container");
var newGrid = $("#new-grid");
var reset = $("#reset");
var shading = $("#shading");
var rand = $("#colourChange");


function colour() {
    return Math.floor((Math.random()*255));
}
function rgba(){
    return "rgb(" + colour() + "," + colour() + "," + colour() + ")";
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


newGrid.on("click", function(){
    var suggest = prompt("Enter a number between 1 - 64");
    var dub = suggest*suggest;
    var wist = 800 / suggest;
    popGrid(dub, wist)
    $("div").on("mouseenter mouseleave", function(){
        $(event.target).css({"background-color": "blue"})
});
})
reset.on("click", function(){
    $("div").css("background-color", "rgb(255,255,255)");
})
rand.on("click", function(){
    $("div").on("mouseenter mouseleave", function(){
        var t = rgba();
        $(event.target).css("background-color", t);
    })
})







// colourChange.on("click", function(){
//    $("div").mouseover(function(){
//        $(event.target).css({"background-color": rgba()})
//});
//})
