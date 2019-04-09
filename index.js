
function dwarfRollCall(dwarves){
	var newString = "";
	dwarves.forEach(function(name, index){
		newString += (index+1 + ". " +name+ " ");
	});

	return newString;
}
dwarfRollCall(["Doc", "Dopey", "Bashful", "Grumpy"]);


function summonCaptainPlanet(planeteerCalls){
var newArr = [];
planeteerCalls.forEach(function(calls) {
calls = calls.toUpperCase()+"!";
newArr.push(calls);
});
return newArr;
}
summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);


function longPlaneteerCalls(arrCalls){
	for (var i = 0; i < arrCalls.length; i++){
	if (arrCalls[i].length>4){
		return true;
	}
	}
return false;
}

longPlaneteerCalls(["hello", "goodbye"]);



function findTheCheese(items){

var cheese = ["cheddar", "gouda", "camembert"];

for (var i = 0; i<items.length; i++){
	var cheesePresent = cheese.indexOf(items[i]);
	if(cheesePresent !== -1){
		return items[i];
	}
}
		return "no cheese!";
	}

findTheCheese(["butter", "jam", "camembert", "gouda"]);
