var pokemon_url = new Array();
var count = 0;

$(document).ready(function(){
        poke_start("http://pokeapi.co/api/v2/pokemon");
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
                 execute_async("add_to_list",result.name);
                 
                 count++;
             });
            console.log(pokemon_url);
        }else{
            alert("Finished loading pokemon list");
        }
        });
}

function add_to_list(name){
       $("#pokemon_list").append("<option value='" + name + "'>"); 
}

function execute_async(func_name,args){
    setTimeout(function(){
         window[func_name](args);
    },0);  
}
                