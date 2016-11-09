var examens;
var nb_examen = 0;

function mise_A_Jour_Stat(){  
    
    var moyennes = calcul_Moyenne()
    
    if (isNaN(moyennes.moyenne)){
        $(".moyenne_exam").text("-");
    }else{
        $(".moyenne_exam").text(moyennes.moyenne+"%");
    }
    
    if (isNaN(moyennes.moyenneHTML)){
        $(".moyenne_HTML").text("-");
    }else{
        $(".moyenne_HTML").text(moyennes.moyenneHTML+"%");
    }
    
    if (isNaN(moyennes.moyenneCSS)){
        $(".moyenne_CSS").text("-");
    }else{
        $(".moyenne_CSS").text(moyennes.moyenneCSS+"%");
    }

    if (isNaN(moyennes.moyenneJS)){
        $(".moyenne_JS").text("-");
    }else{
        $(".moyenne_JS").text(moyennes.moyenneJS+"%");
    }
    
    getStatistiqueRapide();
    
    if (examens == ""){
        $('#boite-modale table').append("<p>Rien à montrer. Bonne chance!</p>");
    } else {
        for (i=0; i<=nb_examen; i++){
            try {
            info_examen = examens[i]; 
                $('#boite-modale table').append("<tr><td>Examen " + (i + 1) + " (" + info_examen.domaine + ")" + " :</td><td>"+ "Note : " + info_examen.bonne_reponse + "/" + info_examen.totale_reponse + "</td></tr>");
            } catch (e) {
                console.log(e);
            }
        }
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
        }catch(err){
            console.log("err",err)
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

        success:function(data){;
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

function getStatistiqueRapide() {
    $.ajax({
        type: "GET",
        url: "/statistique/rapide",
        async: false,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
            if (data[0] == null) {
                $(".moyenne_test_rapide").text("-");
            } else {
                if (data[0].nb_reussie == null) {
                    $(".moyenne_test_rapide").text("0 / " + data[0].nb_totale);
                }else{
                    $(".moyenne_test_rapide").text(data[0].nb_reussie + " / " + data[0].nb_totale);
                } 
            }            
        }
    });
}



function deleteRapides() {
         $.ajax({
            type: "DELETE",
            url: "/statistique/rapide",

            error:function(msg, string){
            },

            success:function(data){
            }
        });
}

function miseAJourQuestionsRapides(type) {
    
    $.ajax({
        type: "POST",
        url: "/statistique/rapide",
        data: {'type': type},

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){}
        });
}

function sauvegardeProgres() {
    
    var nb_reussie = sessionStorage.getItem("note_actuelle");
    var nb_repondue = sessionStorage.getItem("nb_repondue");
    var nb_totale = sessionStorage.getItem("nb_question");
    var domaine = sessionStorage.getItem("theme");

    $.ajax({
        type: "POST",
        url: "/progres",
        data: {'nb_reussie': nb_reussie,
                'nb_repondue': nb_repondue,
                'nb_totale': nb_totale,
                'domaine' : domaine},
        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){}
        });
}

function deleteProgres() {
    sessionStorage.setItem("theme", null);
    sessionStorage.setItem("nb_question", 0);
    sessionStorage.setItem("note_actuelle", 0);
    sessionStorage.setItem("nb_repondue", 0);

     $.ajax({
        type: "DELETE",
        url: "/progres",

        error:function(msg, string){
        },

        success:function(data){
            $("#continuer").css("display", "none");
            $("#supprimer").css("display", "none");
            $("#demarrer-examen").css("display", "block");
        }
    });
}

function continueProgres() {
    $.ajax({
        type: "GET",
        url: "/progres",
        async: false,

        error:function(msg, string){
            console.log(msg);
        },

        success:function(data){
//            sessionStorage.setItem("note_actuelle", data[0].nb_reussie);
//            sessionStorage.setItem("nb_repondue", data[0].nb_repondue);
//            sessionStorage.setItem("nb_question", data[0].nb_totale);
//            sessionStorage.setItem("theme", data[0].domain);
//            
//            console.log("note act: " + sessionStorage.getItem("note_actuelle") + "\n answered:" +  
//            sessionStorage.getItem("nb_repondue") + "\n total: " + sessionStorage.getItem("nb_question") + "\n theme" + 
//            sessionStorage.getItem("theme"));
            }
        });
}


