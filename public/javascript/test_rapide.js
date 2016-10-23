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
                
    nouvelleQuestion();
                
    $("form").submit(function(event){
        event.preventDefault();
        nouvelleQuestion();
        replacerReponse()
    });
}