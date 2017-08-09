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

// this is code to change the circle color
function changeColor() {
	document.getElementById("colorCircle").style.backgroundColor = "chartreuse";
	document.getElementById("colorCircle").style.color = "cornflowerblue";
}

function changeBack() {
	document.getElementById("colorCircle").style.backgroundColor = "cornflowerblue";
	document.getElementById("colorCircle").style.color = "chartreuse";
}

//this is code to run the AJAX bacon button call
$(document).ready(function() {

	});


$(document).ready(function() {
	$("#colorButton").click(function() {
		$.ajax({
			method: "GET",
			url: " http://thecolorapi.com/id?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html"
		}).done(function(reply) {
			$("#colorButton").html(reply);
			console.log("Here's more color");
		});
	});
});

//http://www.thecolorapi.com/