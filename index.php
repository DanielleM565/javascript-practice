<!DOCTYPE>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<script src="js/script.js"></script>
	<title>Javascript Practice</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<form action="js/script.js" id="welcome">
		<p>First Name:</p>
			<input type="text" class="firstName">
		<p>Last Name:</p>
			<input type="text" class="lastName">
		<button type="submit" onclick="submitButton();">Click Me!</button>
	</form>
	<div id="colorCircle" onmouseover="changeColor();" onmouseout="changeBack();">
		<h2>Hi</h2>
	</div>
	<button id="colorButton">
		I need color
	</button>
	<div class="colorOutput" id="color">
		<!-- call prints stuff here -->
	</div>
</body>
</html>