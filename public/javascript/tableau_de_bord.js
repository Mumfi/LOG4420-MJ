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
    $("#nb_question").attr("max",2);
            
    $("form").submit(function(){
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
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
                              

