// function welcome(){
// 	function firstName(f) {
// 		if (f.value == "")
// 			alert("Please type your first name")
// 		else var firstName = $("firstName")
// 			}
// 	function lastName(l) {
// 		if (l.value == "")
// 			alert("please type your last name")
// 		else var lastName = $("lastName")
// 	}
// 	function submitButton() {
// 		document.getElementById().value
// 	}
// }

function alert() {
	document.getElementById("clickMe").innerHTML = "Hello Gorgeous"
}


// this is code to change the circle color
function changeColor() {
	document.getElementById("colorCircle").style.backgroundColor = "chartreuse";
	document.getElementById("colorCircle").style.color = "cornflowerblue";
}

function changeBack() {
	document.getElementById("colorCircle").style.backgroundColor = "cornflowerblue";
	document.getElementById("colorCircle").style.color = "chartreuse";
}

//Playing with fonts
function changeFonts() {
	document.getElementById("randomText").style.fontFamily = "Impact,Charcoal,Pacifico";
}





//this is code to run the AJAX bacon button call
$(document).ready(function() {
	$("#baconButton").click(function() {
		$.ajax({
			method: "GET" ,
			url: "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
		}).done(function(reply) {
			$("#baconOutput").html(reply);
			console.log("Crispy Goodness");
			}
		)
		}
	)
});


//this is code to run the AJAX Vegan button call
$(document).ready(function() {
	$("#veganButton").click(function() {
			$.ajax({
				method: "GET" ,
				url: "https:/http://veggieipsum.com/api/"
			}).done(function(reply) {
					$("#veganOutput").html(reply);
					console.log("Veggie Goodness");
				}
			)
		}
	)
});