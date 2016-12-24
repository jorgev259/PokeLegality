var pokemon_moves = new Array();
var count = 0;

$(document).ready(function(){
        pokedata("http://pokeapi.co/api/v2/pokemon");
});

function pokedata(url){
    $.ajax({
            url:url,
        }).done(function(result){
        if(result.next != null){
            pokedata(result.next);
            data_arrangement(result.results)  
        }
        });
}

function data_arrangement(results){
    //console.log(results);
    results.forEach(function(result){
        //console.log(result);
        count++;
        
        //Asign name
        pokemon_moves[count] = [];
        pokemon_moves[count].name = result.name;
        
        //Asign ID
        var ID = results.
        
        console.log(pokemon_moves[count]);
    })
}