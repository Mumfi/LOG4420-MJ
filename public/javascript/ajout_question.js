window.onload=function() {
    $("[name=nb_reponse]").on('input', function() { 
        $("#reponses").empty();
        var nb_rep = $(this).val();
        for (i=0; i<nb_rep; i++){
            $("#reponses").append("<div><label> Réponse " + Number(i+1) + "</label><input name=\"reponses\"[] required><br></div>");
        }
        $("[name=bonne_reponse]").attr("max",nb_rep);
    });
   
}