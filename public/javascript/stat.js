function mise_A_Jour_Stat(){
    
    if (localStorage.getItem("moyenne_examen") == null){
        $(".moyenne_exam").text("");
    }else{
        $(".moyenne_exam").text(localStorage.getItem("moyenne_examen")+"%");
    }
    
    if (localStorage.getItem("moyenne_HTML") == null || localStorage.getItem("moyenne_HTML") == "NaN"){
        $(".moyenne_HTML").text("");
    }else{
        $(".moyenne_HTML").text(localStorage.getItem("moyenne_HTML")+"%");
    }
    
    if (localStorage.getItem("moyenne_CSS") == null || localStorage.getItem("moyenne_CSS") == "NaN"){
        $(".moyenne_CSS").text("");
    }else{
        $(".moyenne_CSS").text(localStorage.getItem("moyenne_CSS")+"%");
    }
    
    if (localStorage.getItem("moyenne_JS") == null || localStorage.getItem("moyenne_JS") == "NaN"){
        $(".moyenne_JS").text("");
    }else{
        $(".moyenne_JS").text(localStorage.getItem("moyenne_JS")+"%");
    }
    
    $(".moyenne_test_rapide").text(localStorage.getItem("nb_question_rapide_reussie") + "/" + localStorage.getItem("nb_question_rapide"));

    
    
}

function calcul_Moyenne(){
    var nb_examen = localStorage.getItem("nb_examen");
    var moyenne = 0;
    var moyenneHTML = 0;
    var nbHTML=0;
    var moyenneCSS = 0;
    var nbCSS=0;
    var moyenneJS = 0;
    var nbJS=0;
    for (i=1;i<=nb_examen;i++){
        var info_examen = JSON.parse(localStorage.getItem("Examen."+i));

        moyenne = moyenne + (info_examen.nb_bonne_rep/info_examen.nb_reponse*100);
        if (info_examen.theme == "html"){
            moyenneHTML = moyenneHTML + (info_examen.nb_bonne_rep/info_examen.nb_reponse*100);
            nbHTML++;
            console.log("html");
        }
        if (info_examen.theme == "css"){
            moyenneCSS = moyenneCSS + (info_examen.nb_bonne_rep/info_examen.nb_reponse*100);
            nbCSS++;
        }
        if (info_examen.theme == "javascript"){
            moyenneJS = moyenneJS + (info_examen.nb_bonne_rep/info_examen.nb_reponse*100);
            nbJS++;
        }
    }
    moyenne = moyenne / nb_examen;
    moyenneHTML = moyenneHTML/nbHTML;
    moyenneCSS = moyenneCSS/nbCSS;
    moyenneJS = moyenneJS/nbJS;
    
    localStorage.setItem("moyenne_examen", Math.floor(moyenne));
    localStorage.setItem("moyenne_HTML", Math.floor(moyenneHTML));
    localStorage.setItem("moyenne_CSS", Math.floor(moyenneCSS));
    localStorage.setItem("moyenne_JS", Math.floor(moyenneJS));
}