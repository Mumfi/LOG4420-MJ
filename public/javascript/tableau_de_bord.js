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

window.onload=function() {
    
    mise_A_Jour_Stat(); 
    mise_A_Jour_Nb_Reponse_Possible();
    
    
    if (!examenEnregistre()) {
        $("#continuer").css("display", "none");
        $("#supprimer").css("display", "none");
        $(".indication").text("Pour commencer un examen, veuillez remplir le formulaire ci-dessous :");
    }else{
        $("label").css("display", "none");
        $("#demarrer-examen").css("display", "none");
        $("#theme").css("display", "none");
        $("#nb_question").css("display", "none");
        $(".indication").text("Un examen a été sauvegardé, veuillez choisir une des options suivantes :");
        
    }
    
    
    $("#demarrer-examen").click(function(e) {
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
        sessionStorage.setItem("nb_repondue", 0);
    });
    
    $("#supprimer").click(function(e) {
        e.preventDefault();
        deleteProgres();
        $("label").css("display", "inline");
        $("#demarrer-examen").css("display", "inline");
        $("#theme").css("display", "inline");
        $("#nb_question").css("display", "inline");
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
                              

