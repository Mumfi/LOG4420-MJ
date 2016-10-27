function nouvelleQuestion(){
    
    $.ajax({
        type: "GET",
        url: "/ajax/nouvelle_question_test",

        error:function(msg, string){
            console.log( "Error !: " + string );
        },

        success:function(data){
            miseAJourQuestion(data);
        }
    });
}
            
window.onload=function() {
    
    mise_A_Jour_Stat();
                
    nouvelleQuestion();
                
    $("form").submit(function(event){
        event.preventDefault();
        nouvelleQuestion();
        replacerReponse();
        mise_A_Jour_Stat();
    });
    
    
}