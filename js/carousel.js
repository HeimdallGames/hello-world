$( document ).ready(function() {
    $("#shottenSamurai").click(function(){
        var ventana = window.open("https://heimdallgames.github.io/shotenSamurai/index.html");
        if(ventana){
            ventana.focus();
        }else{
            alert("Let pop-ups open just for this!");
        }
      //  window.location = "https://heimdallgames.github.io/shotenSamurai/index.html";
      //  window.location.replace("https://heimdallgames.github.io/shotenSamurai/index.html");
    });
});