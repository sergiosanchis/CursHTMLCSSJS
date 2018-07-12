var baseUrl = "http://40.118.8.76/pokemons/";
var id = 1;

var init = function() {
	$("#nextButton").click(function(){
		console.log("apretado")
	});
	loadPokemon;
}

var nextPokemon = function(){
	console.log("nextPokemon")
	id++;
	loadPokemon;
}

var loadPokemon = function(){
	$.get(baseUrl + id,
		function(data){
			$("#code").text(data.num);
			$("#normalSprite").attr("src", data.images[0].front);
			$("#shinySprite").attr("src", data.images[1].front_shiny);
			$("#name").text(data.name);
			var type = data.types[0].type.name;
			$(data.types).each(function() {
  				if(this.type.name != type){
  					type += ", " + this.type.name;
  				}
			});
			$("#type").text(type);
			var hm;
			if(data.moves.HM.length == 0) hm = "This pokemon does not have HM";
			else {
				hm = data.moves.HM[0];
				$(data.moves.HM).each(function(){
					if(this != hm){
						hm += ", " + this;
					}
				});
			}
			$("#hm").text(hm);
		}, "json")
		.fail(function(){
			alert("Fail to load Pokemon");
		});
}

$().ready(init);