function nouvelleQuestionHTML(){
    $.ajax({
        type: "GET",
        url: "/ajax/nouvelle_question_exam_HTML",

        error:function(msg, string){
            console.log( "Error !: " + string );
        },

        success:function(data){
            miseAJourQuestion(data);
        }
    });
    $("h1").text("Examen de HTML");
}
                
function nouvelleQuestionCSS(){
    $.ajax({
        type: "GET",
        url: "/ajax/nouvelle_question_exam_CSS",

        error:function(msg, string){
            console.log( "Error !: " + string );
        },

        success:function(data){
        miseAJourQuestion(data);
        }
    });
    $("h1").text("Examen de CSS");
}
                
function nouvelleQuestionJS(){
    $.ajax({
        type: "GET",
        url: "/ajax/nouvelle_question_exam_JS",

        error:function(msg, string){
            console.log( "Error !: " + string );
        },

        success:function(data){
            miseAJourQuestion(data);
        }
    });
    $("h1").text("Examen de Javascript");
}
            
function nouvelleQuestion(theme, num_question){
    if (theme=="html"){
        nouvelleQuestionHTML();
    }
    else{
        if (theme=="css"){
            nouvelleQuestionCSS();
        }
        else{
            nouvelleQuestionJS();
        }
    }
    $("legend").text("Question " + num_question);
}
            
            
window.onload=function() {
    
    var theme = sessionStorage.getItem("theme");
    var nb_question = sessionStorage.getItem("nb_question");
    var num_question = parseInt(sessionStorage.getItem("nb_repondue") + 1);
    
    mise_A_Jour_Stat();
                    
    nouvelleQuestion(theme, num_question);
                    
                
    $("form").submit(function(event){
        num_question ++;
        if (num_question <= nb_question){
            event.preventDefault();
            nouvelleQuestion(theme, num_question);
            replacerReponse()
        }
    });
}

    $("#abandon-examen a").click(function(){
        sessionStorage.setItem("note_actuelle", 0);
    });
