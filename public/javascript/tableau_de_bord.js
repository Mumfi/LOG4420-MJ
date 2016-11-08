function mise_A_Jour_Nb_Reponse_Possible(){
     var theme = $("#theme").val();
        $.ajax({
            type: "POST",
            url: "/questions",
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
            
    $("form").submit(function(){
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
    });
    
    $(".statsection a").click(function(e){
        
//        e.preventDefault();
         deleteExamens();
        
        $('#boite-modale table tr').remove();
        mise_A_Jour_Stat();
    });
    
    
    var nb_examen = localStorage.getItem("nb_examen");
    var length = $('#boite-modale table tr').length;
    if (nb_examen>length){
        for (i=length+1; i<=nb_examen; i++){
            var info_examen = JSON.parse(localStorage.getItem("Examen."+i));
            $('#boite-modale table').append("<tr><td>Examen " + info_examen.num + " - " + info_examen.theme + " :</td><td>"+ info_examen.nb_bonne_rep + "/" + info_examen.nb_reponse + "</td></tr>");
        }
    }
    
    $("select[id=theme]").on('input', function() { 
       mise_A_Jour_Nb_Reponse_Possible();
    });

}
                              

