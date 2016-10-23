function miseAJourQuestion(data){
                    $('.question').html(data.question);
                    $('#1').text(data.reponses[0]);
                    $('#2').text(data.reponses[1]);
                    $('#3').text(data.reponses[2]);
                    $('#4').text(data.reponses[3]);
}



document.addEventListener("dragstart",
    function(e) {
        $(e.target).css("color","grey");
    }, 
    false);

document.addEventListener("dragenter",
    function(e) {
        $(e.target).addClass("over");
    }, 
    false);
document.addEventListener("dragover",
    function(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect='move';
        return false;
    }, 
    false);
document.addEventListener("dragleave",
    function(e) {
        $(e.target).removeClass("over");
    }, 
    false);

document.addEventListener("drop",
    function(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); 
        }
        return false;
    }, 
    false);

document.addEventListener("dragend",
    function(e) {
        $(".reponses p").removeClass("over");
    }, 
    false);


