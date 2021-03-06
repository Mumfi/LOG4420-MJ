var id;

function miseAJourQuestion(data){
    $('.question').html(data.question);
     $(".reponses").empty();
    for (i=0;i<data.reponses.length;i++)
    {
        var num = i+1;
        $(".reponses").append("<div id =\"" + num + "\" draggable=\"true\" ondragstart=\"event.dataTransfer.setData('text/plain',null)\">"+ data.reponses[i] + "</div>");
    }
    id = data.id;
}

function replacerReponse(){
    $('.dropzone div').css("background-color","lightgrey")
    $(".reponses").append($('.dropzone div'));
    $('[draggable=false]').attr("draggable","true");
    $(".aide").css("display","block");
}

function testerReponse(id_reponse){
    var bonne_reponse;
    $.ajax({
        type: "GET",
        url: "/questions/"+id,
        async: false,

        error:function(msg, string){
        },

        success:function(data){
            bonne_reponse = data;
        }
    });
    return (id_reponse==bonne_reponse);
}


var dragged;


  document.addEventListener(
      "drag", 
      function(event) {}, 
      false
  );

  document.addEventListener(
      "dragstart", 
      function(event) {
          dragged = event.target;
          event.target.style.opacity = .5;
      }, 
      false
  );

  document.addEventListener(
      "dragend", 
      function(event) {
          event.target.style.opacity = "";
      }, 
      false
  );

  document.addEventListener(
      "dragover", 
      function(event) {
        event.preventDefault();
      }, 
      false
  );

  document.addEventListener(
      "dragenter", 
      function(event) {
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "#e8e8e8";
              $(".aide").css("display","none");
          }
      }, 
      false
  );

  document.addEventListener(
      "dragleave", 
      function(event) {
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "";
          }
      }, 
      false
  );

  document.addEventListener(
      "drop", 
      function(event) {
          event.preventDefault();
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "";
              dragged.parentNode.removeChild( dragged );
              event.target.appendChild( dragged );
              
              if(testerReponse($(dragged).attr("id"))){
                  $(".dropzone div").css("background-color", "#95e66d");
                  miseAJourNoteActuelle();
                  if ($(".test-content").length != 0) {
                      miseAJourQuestionsRapides("nb_reussie");
                  }
              }else{
                  $(".dropzone div").css("background-color", "#f55f2b");
                  if ($(".test-content").length != 0) {
                      miseAJourQuestionsRapides("nb_totale");
                  }
              } 
              $('[draggable=true]').attr("draggable","false");
              if ($(".test-content").length != 0){
                   getStatistiqueRapide();
              } else {
                  
                var nb_repondue = parseInt(sessionStorage.getItem("nb_repondue")) + 1;
                sessionStorage.setItem("nb_repondue", nb_repondue);
                sauvegardeProgres();
              }
          }
      }, 
      false
  );

function miseAJourNoteActuelle() {
    var note_actuelle = parseInt(sessionStorage.getItem("note_actuelle")) + 1;
    sessionStorage.setItem("note_actuelle", note_actuelle);
    $("#note-actuelle").text(sessionStorage.getItem("note_actuelle"));
}
