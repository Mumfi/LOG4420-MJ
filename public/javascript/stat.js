var examens;
var nb_examen = 0;

//TODO 
//Adjust to database
//show nothing if database empty for each type
function mise_A_Jour_Stat(){    
    $(".moyenne_exam").text(moyenne+"%");
    $(".moyenne_HTML").text(moyenneHTML+"%");
    $(".moyenne_CSS").text(moyenneCSS+"%");
    $(".moyenne_JS").text(moyenneJS+"%");

        
//    $(".moyenne_test_rapide").text(localStorage.getItem("nb_question_rapide_reussie") + "/" + localStorage.getItem("nb_question_rapide"));
    
//    if (localStorage.getItem("moyenne_examen") == null){
//        $(".moyenne_exam").text("");
//    }else{
//        $(".moyenne_exam").text(localStorage.getItem("moyenne_examen")+"%");
//    }
//    
//    if (localStorage.getItem("moyenne_HTML") == null || localStorage.getItem("moyenne_HTML") == "NaN"){
//        $(".moyenne_HTML").text("");
//    }else{
//        $(".moyenne_HTML").text(localStorage.getItem("moyenne_HTML")+"%");
//    }
//    
//    if (localStorage.getItem("moyenne_CSS") == null || localStorage.getItem("moyenne_CSS") == "NaN"){
//        $(".moyenne_CSS").text("");
//    }else{
//        $(".moyenne_CSS").text(localStorage.getItem("moyenne_CSS")+"%");
//    }
//    
//    if (localStorage.getItem("moyenne_JS") == null || localStorage.getItem("moyenne_JS") == "NaN"){
//        $(".moyenne_JS").text("");
//    }else{
//        $(".moyenne_JS").text(localStorage.getItem("moyenne_JS")+"%");
//    }
//    
//    $(".moyenne_test_rapide").text(localStorage.getItem("nb_question_rapide_reussie") + "/" + localStorage.getItem("nb_question_rapide"));
}

function calcul_Moyenne(){

    var moyenne = 0;
    var moyenneHTML = 0;
    var nbHTML=0;
    var moyenneCSS = 0;
    var nbCSS=0;
    var moyenneJS = 0;
    var nbJS=0;
        
    //TODO Doesn't include most recent examination made.
    for (i=0;i<=nb_examen;i++){
        
         try{
            moyenne = moyenne + (examens[i].bonne_reponse / examens[i].totale_reponse * 100);
            if (examens[i].domaine == "html"){
                moyenneHTML = moyenneHTML + (examens[i].bonne_reponse / examens[i].totale_reponse * 100);
                nbHTML++;
            }
            if (examens[i].domaine == "css"){
                moyenneCSS = moyenneCSS + (examens[i].bonne_reponse / examens[i].totale_reponse * 100);
                nbCSS++;
            }
            if (examens[i].domaine == "javascript"){
                moyenneJS = moyenneJS + (examens[i].bonne_reponse / examens[i].totale_reponse * 100);
                nbJS++;
            }
                     
        }catch(e){
            console.log("err",e)
        }
    }
        moyenne = Math.floor(moyenne / nb_examen);
        moyenneHTML = Math.floor(moyenneHTML/nbHTML);
        moyenneCSS = Math.floor(moyenneCSS/nbCSS);
        moyenneJS = Math.floor(moyenneJS/nbJS);
}

function ajouteExamenFini(donnees) {
    $.ajax({
        type: "POST",
        url: "/statistique/examen",
        data : donnees,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            }
        });
}

function getExamensFini() {
    $.ajax({
        type: "GET",
        url: "/statistique/examen",

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            examens = data;
            nb_examen = data.length;
            calcul_Moyenne();
            }
        });
}

function deleteExamens() {
         $.ajax({
            type: "DELETE",
            url: "/statistique/examen",

            error:function(msg, string){
            },

            success:function(data){
            }
        });
}

