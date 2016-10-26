window.onload=function() {
            
    $("form").submit(function(){
        sessionStorage.setItem("theme", $("#theme").val());
        sessionStorage.setItem("nb_question", $("#nb_question").val());
        sessionStorage.setItem("note_actuelle", 0);
    });
    
    $(".statsection a").click(function(e){
        e.preventDefault();
        localStorage.clear();
    });
                        
}
