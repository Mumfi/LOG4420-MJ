var examens;
var nb_examen = 0;

function mise_A_Jour_Stat(){  
    
    var moyennes = calcul_Moyenne()
    
    if (isNaN(moyennes.moyenne)){
        $(".moyenne_exam").text("");
    }else{
        $(".moyenne_exam").text(moyennes.moyenne+"%");
    }
    
    if (isNaN(moyennes.moyenneHTML)){
        $(".moyenne_HTML").text("");
    }else{
        $(".moyenne_HTML").text(moyennes.moyenneHTML+"%");
    }
    
    if (isNaN(moyennes.moyenneCSS)){
        $(".moyenne_CSS").text("");
    }else{
        $(".moyenne_CSS").text(moyennes.moyenneCSS+"%");
    }

    if (isNaN(moyennes.moyenneJS)){
        $(".moyenne_JS").text("");
    }else{
        $(".moyenne_JS").text(moyennes.moyenneJS+"%");
    }
}

function calcul_Moyenne(){
    
    var moyenne = 0;
    var moyenneHTML = 0;
    var nbHTML=0;
    var moyenneCSS = 0;
    var nbCSS=0;
    var moyenneJS = 0;
    var nbJS=0;
    
    misAjourExamensFini();            
    
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
    
    return {moyenne : moyenne, moyenneHTML : moyenneHTML, moyenneCSS : moyenneCSS, moyenneJS : moyenneJS}
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

function misAjourExamensFini() {
    $.ajax({
        type: "GET",
        url: "/statistique/examen",
        async: false,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            examens = data;
            nb_examen = data.length;  
            }
        });
}

function getStatistiqueRapide() {
    $.ajax({
        type: "GET",
        url: "/statistique/rapide",
        async: false,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            statRapide = data; 
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

