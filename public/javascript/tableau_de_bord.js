window.onload=function() {
            
    $("form").submit(function(){
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
    });
    
    $(".statsection a").click(function(e){
        e.preventDefault();
        localStorage.clear();

        localStorage.setItem("nb_examen",0);
        $('#boite-modale table tr').remove();
    });
       
   if(localStorage.length==0){
       localStorage.setItem("nb_examen",0);
   }
    
    var nb_examen = localStorage.getItem("nb_examen");
    var length = $('#boite-modale table tr').length;
    if (nb_examen>length){
        for (i=length+1; i<=nb_examen; i++){
            var info_examen = JSON.parse(localStorage.getItem("Examen."+i));
            $('#boite-modale table').append("<tr><td>Examen " + info_examen.num + " - " + info_examen.theme + "</td><td>"+ info_examen.nb_bonne_rep + "/" + info_examen.nb_reponse + "</td></tr>");
        }
        
    }

    });        
    
    $("#demarrer").on("click", function() {
        sessionStorage.setItem("isExamen", "true");

    });
    
    $("#test-rapide").on("click", function() {
        sessionStorage.setItem("isExamen", "false");
    });              

}
