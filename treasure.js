    var width = 1900;
	var height = 900;
	var clicks = 0;
	var clickLimit = 30;

	var targetx = getRandomNumber(width),
	targety = getRandomNumber(height);

	document.getElementById("map").addEventListener("click", function (event) {
	clicks++;
	if (clicks > clickLimit) {
        alert("GAME OVER");
        location.reload();
      }

	var distance = getDistance(event, targetx,targety);

	var distanceHint = getDistanceHint(distance);
	
	document.getElementById("distance").innerHTML=distanceHint;

    var elem = document.createElement('div');
    elem.style="position: absolute; top: "+ event.clientY+"; left: "+event.clientX+"; width: 10px; height: 10px; background-color: yellow; border-radius:5px;";
    document.body.insertBefore(elem,document.getElementById('map'));
	
	if (distance < 10) {
		location.reload();
	alert("Found the treasure in " + clicks + " clicks!");
	}
	});


    function getRandomNumber (size) {
        return Math.floor(Math.random() * size);
        };
    
        function getDistance (event, targetx, targety) {
        var diffX = event.offsetX - targetx;
        var diffY = event.offsetY - targety;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
        };

         function getDistanceHint (distance) {
        if (distance < 25) {
        return "BOILING HOT!";
        } else if (distance < 50) {
        return "Really hot";
        } else if (distance < 100) {
        return "Hot";
        } else if (distance < 150) {
        return "Warm";
        } else if (distance < 250) {
        return "Cold";
        } else if (distance < 500) {
        return "Really cold";
        } else {
        return "Freezing!";
        }
    };