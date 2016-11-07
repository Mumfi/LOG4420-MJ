function envoiQuestion(donnees){
    
    $.ajax({
        type: "POST",
        url: "/questions",
        data : donnees,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            $("form").css("display","none");
            $(".message_retour").css("display","block");
            $(".texte-id").text("ID : " + data.id);
            $(".texte-domaine").text("Domaine : " + data.domaine);
            $(".texte-question").text("Question : " + data.question);
            $(".texte-bonne-rep").text("Numéro de la bonne réponse : " + data.bonne_reponse);
            for (j=0;j<data.reponses.length;j++){
                var num = j+1;
                $(".texte-rep ul").append("<li> Réponse " + num + " : " + data.reponses[j] + "</li>")
            }
        }
    });
}



window.onload=function() {
    $(".texte-rep ul").empty;
    $(".message_retour").css("display","none");
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
    });   
}