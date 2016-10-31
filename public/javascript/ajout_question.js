function envoiQuestion(donnees){
    
    $.ajax({
        type: "POST",
        url: "/ajax/submit_question",
        data : donnees,

        error:function(msg, string){
            $(".message_retour").text("Il y a eu une erreur lors de la soumission de la question");
        },

        success:function(data){
            $(".message_retour").text(data);
            $("input:not([type=\"submit\"])").removeAttr("required");
            $("input:not([type=\"submit\"])").val("");
            //$("input:not([type=\"submit\"])").attr("required","true");
        }
    });
}



window.onload=function() {
    $("[name=nb_reponse]").on('input', function() { 
        $("#reponses").empty();
        var nb_rep = $(this).val();
        for (i=0; i<nb_rep; i++){
            $("#reponses").append("<div><label> Réponse " + Number(i+1) + "</label><input name=\"reponses\"[] required><br></div>");
        }
        $("[name=bonne_reponse]").attr("max",nb_rep);
    });
    
    $("form").submit(function(event){
        event.preventDefault();
        var donnees = $(this).serialize();
        envoiQuestion(donnees);
        $("input:not([type=\"submit\"])").attr("required","true");
    });
   
}