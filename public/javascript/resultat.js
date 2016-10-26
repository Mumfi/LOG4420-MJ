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
}



$("#retour-au-tdb").on("click", function() {
    localStorage.setItem("resultat_" + sessionStorage.getItem("theme"), parseInt(sessionStorage.getItem("note_actuelle")) + parseInt(localStorage.getItem("resultat_html")));
                         
                         
    console.log(localStorage.getItem("resultat_html"));
});