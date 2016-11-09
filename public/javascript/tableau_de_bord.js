function mise_A_Jour_Nb_Reponse_Possible(){
     var theme = $("#theme").val();
        $.ajax({
            type: "POST",
            url: "/ajax/demande_nb_question",
            data : 'theme=' + theme,

            error:function(msg, string){
            },

            success:function(data){
                $("#nb_question").attr("max",data);
            }
        });
}

function continueExamen() {
    
}

window.onload=function() {
    
    mise_A_Jour_Stat(); 
    mise_A_Jour_Nb_Reponse_Possible();
            
    if (sessionStorage.getItem("nb_question") == 0 || sessionStorage.getItem("nb_question") == null) {
        $("#continuer").css("display", "none");
        $("#supprimer").css("display", "none");
    }else{
        $("#demarrer-examen").css("display", "none");
    }
    
//    $("form").submit(function(){
//        sessionStorage.setItem("theme", $("#theme").val());
//        sessionStorage.setItem("nb_question", $("#nb_question").val());
//        sessionStorage.setItem("note_actuelle", 0);
//    });
    
    $("#demarrer-examen").click(function(e) {
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
        sessionStorage.setItem("nb_repondue", 0);
    });
    
    $("#supprimer").click(function(e) {
        e.preventDefault();
        deleteProgres();

    });
    
    $("#continuer").click(function(e) {
        continueProgres();
    });
    
    $(".statsection a").click(function(e){
        e.preventDefault();
        deleteExamens();
        deleteRapides();
        
        $('#boite-modale table tr').remove();
        mise_A_Jour_Stat();
    });
    
    $("select[id=theme]").on('input', function() { 
       mise_A_Jour_Nb_Reponse_Possible();
    });

}
                              

