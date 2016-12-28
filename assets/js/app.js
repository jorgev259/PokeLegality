var pokemon_url = new Array();
var count = 0;
var count_id = 0;
var debug;

$(document).ready(function(){
    poke_start("http://pokeapi.co/api/v2/pokemon");
    
    $('#poke_input').on('input',function() {
        var opt = $('option[value="'+$(this).val()+'"]');
        debug= opt;
        console.log(opt[0].dataset.id);
    });

});

function poke_start(url){    
    $.ajax({
            url:url,
        }).done(function(result){
        if(result.next != null){
            poke_start(result.next);
            var results = result.results;
             results.forEach(function(result){
                 pokemon_url[count] = result;                 
                 execute_async("add_to_list",result);                 
                 count++;
             });
        }else{
            $("#cover_up").hide();
            alert("Finished loading pokemon list");
        }
        }).fail(function(){
        $("#cover_up").hide();
        
    });
}

function pokemon_change(){
    
}

function add_to_list(result){
       $("#pokemon_list").append("<option data-id='" + count_id + "' value='" + result.name + "'>"); 
        count_id++;
}

function execute_async(func_name,args){
    setTimeout(function(){
         window[func_name](args);
    },0);  
}
                