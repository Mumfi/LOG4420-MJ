var bonne_reponse;
var note_actuelle = 0;

function miseAJourQuestion(data){
    $('.question').html(data.question);
    $('#1').text(data.reponses[0]);
    $('#2').text(data.reponses[1]);
    $('#3').text(data.reponses[2]);
    $('#4').text(data.reponses[3]);
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
              
          }
      }, 
      false
  );

function miseAJourNoteActuelle() {
    note_actuelle++;
    sessionStorage.setItem("note_actuelle", note_actuelle);
    $("#note-actuelle").text(note_actuelle);
}

