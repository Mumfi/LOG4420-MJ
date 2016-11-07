var bonne_reponse;
var note_actuelle = 0;
var questions_totale = 0;
var old;
var update;

function miseAJourQuestion(data){
    $('.question').html(data.question);
     $(".reponses").empty();
    for (i=0;i<data.reponses.length;i++)
    {
        var num = i+1;
        $(".reponses").append("<div id =\"" + num + "\" draggable=\"true\" ondragstart=\"event.dataTransfer.setData('text/plain',null)\">"+ data.reponses[i] + "</div>");
    }
    bonne_reponse = data.bonne_reponse;
}

function replacerReponse(){
    $('.dropzone div').css("background-color","lightgrey")
    $(".reponses").append($('.dropzone div'));
    $('[draggable=false]').attr("draggable","true");
    $(".aide").css("display","block");
}

function testerReponse(id_reponse){
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
              }else{
                  $(".dropzone div").css("background-color", "#f55f2b");
              } 
              $('[draggable=true]').attr("draggable","false");
              if ($(".test-content").length != 0){
                    var nb_question = Number(localStorage.getItem("nb_question_rapide")) + 1;
                    var nb = {
                        nb_question_rapide : nb_question
                    }
                   miseAJourQuestionsRapides(nb); //{localStorage.setItem("nb_question_rapide//",nb_question);
              }
          }
      }, 
      false
  );

function incrementRapide() {
    $.ajax({
        type: "POST",
        url: "/statistiques/rapide",
        data : nombre,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            alert("sd");}
        });
}

function miseAJourNoteActuelle() {
    note_actuelle++;
    sessionStorage.setItem("note_actuelle", note_actuelle);
    $("#note-actuelle").text(note_actuelle);
    if($(".test-content").length != 0){
        var nb_reussie = Number(localStorage.getItem("nb_question_rapide_reussie")) + 1;
        var nb = {
                        nb_question_rapide_reussie : nb_reussie
                    }
        miseAJourQuestionsRapides(nb);
 //localStorage.setItem("nb_question_rapide//_reussie",nb_reussie);
    }
}

function miseAJourQuestionsRapides(nombre) {
    $.ajax({
        type: "POST",
        url: "/statistiques/rapide",
        data : nombre,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            alert("sd");}
        });
}


    
