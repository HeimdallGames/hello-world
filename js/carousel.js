$( document ).ready(function() {

    $(".shotenSamurai").click(function(){
        var ventana = window.open("https://heimdallgames.github.io/shotenSamurai/index.html");
        if(ventana){
            ventana.focus();
        }else{
            alert("Let pop-ups open just for this!");
        }
    });
    $("#shotenGithub").click(function(){
        var ventana = window.open("https://github.com/HeimdallGames/shotenSamurai");
        if(ventana){
            ventana.focus();
        }else{
            alert("Let pop-ups open just for this!");
        }
    });

    $( '.navbar-nav a' ).on( 'click', function () {
        $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });

    $('.carousel').on('slide.bs.carousel', function (ev) {
        var id = ev.relatedTarget.id;
        switch (id) {
          case "1":
          $('#video').prop('src', "https://www.youtube.com/embed/BfOdWSiyWoc?rel=0");
            break;
          case "2":
          
          $('#video').prop('src', "https://www.youtube.com/embed/txTqtm58AqM?rel=0");
            break;
          default:
          
            //the id is none of the above
        }
      })
});