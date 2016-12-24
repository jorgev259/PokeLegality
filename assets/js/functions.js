//These are some functions for making simple effects

function show_card_action(item){
    //this is a function for opening and closing cards
    var data=item.id.split("_");
    var elmnt=data[1]+"_card";
    var state=document.getElementById(elmnt).style.display;
    if (state=="none"){
        document.getElementById(elmnt).style.display="block";
    }else{
        document.getElementById(elmnt).style.display="none";
    }   
}