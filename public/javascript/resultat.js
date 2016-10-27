window.onload = function () {
    $("#type-examen").text(sessionStorage.getItem("theme"));
    $("#questions-reussis").text(sessionStorage.getItem("note_actuelle"));
    $("#questions-totales").text(sessionStorage.getItem("nb_question"));
    
    var pourcentage = parseInt(sessionStorage.getItem("note_actuelle")) / parseInt(sessionStorage.getItem("nb_question")) * 100;
    
    $("#note-finale").text(Math.floor(pourcentage));
    
    if (pourcentage <= 25) {
        $("#commentaire").text("Faible");
    }
    else if (pourcentage > 25 && pourcentage <= 50) {
        $("#commentaire").text("Moyenne");
    }
    else if (pourcentage > 50 && pourcentage <= 75) {
        $("#commentaire").text("Bon");
    }
    else if (pourcentage > 75) {
        $("#commentaire").text("Très bien");
    }
    
    var nb_examen = Number(localStorage.getItem("nb_examen"))+1;
    var info_exam = JSON.stringify({num : nb_examen,
                     theme : sessionStorage.getItem("theme"),
                     nb_bonne_rep : sessionStorage.getItem("note_actuelle"),
                     nb_reponse :sessionStorage.getItem("nb_question")
                    });
    localStorage.setItem("nb_examen", nb_examen);
    localStorage.setItem("Examen."+nb_examen,info_exam);

}


