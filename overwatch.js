var numOfNames = 1;
var nameNumber = 1;

document.getElementById("addName").onclick = function () {
	if (numOfNames < 12) {
		var newdiv = document.createElement('div');
      	newdiv.innerHTML = "Name " + (numOfNames + 1) + " <br><input type='text' class='textBox' name='humanNames[]'>";
      	document.getElementById("nameContainer").appendChild(newdiv);
		numOfNames = numOfNames + 1;
	}
};


var removeName = function () {
	if (numOfNames > 1) {
		for (var num = 0; num < 1; ++num) {
			var toBeRemoved = document.getElementById("nameContainer").lastChild;
			if (toBeRemoved.id) {
				return;
			}
			toBeRemoved.remove();
			numOfNames = numOfNames - 1;
		}
	}
}

var createTeam = function () {

	var inputs, index;
	var positions = ["Support", "Support", "Tank", "Tank", "DPS", "DPS"];
	var listOfNames = [];
	var team1 = [];
	var team2 = [];

	inputs = document.getElementsByTagName('input');
	for (index = 0; index < inputs.length; ++index) {
 		listOfNames.push(inputs[index].value);

	}

	var amountOfPlayers = listOfNames.length;

	// shuffle names
	listOfNames = shuffle(listOfNames);
	
	// Team 1 or Team 2 creation
	for (var i = 0; i < listOfNames.length; ++i) {
		if (listOfNames.length / 2 <= i) {
			team1.push(listOfNames[i]);
		} else {
			team2.push(listOfNames[i]);
		}
	}

	// Position Assignment
	// Uncomment the below if you want to shuffle positions as well
	// positions = shuffle(positions);
	for (var p = 0; p < team1.length; ++p) {
		team1[p] = team1[p] + " " + positions[p];
	}
	for (var p = 0; p < team2.length; ++p) {
		team2[p] = team2[p] + " " + positions[p];
	}

	// Show the Tables with Information!!!
	tablePopulate("team1", team1);
	tablePopulate("team2", team2);
};

var tablePopulate = function (team, players) {
	var elmtTable = document.getElementById(team);
	var tableRows = elmtTable.getElementsByTagName('tr');
	var rowCount = tableRows.length;

	for (var x=rowCount-1; x>0; x--) {
	   elmtTable.removeChild(tableRows[x]);
	}

	var table = document.getElementById(team);

	for (var i = 0; i < players.length; ++i) {
		var player = players[i];

		var row = document.createElement('tr');

		var properties = ['name'];

		for (var j = 0; j < properties.length; ++j) {
		  var cell = document.createElement('td');

		  cell.innerHTML = player;

		  row.appendChild(cell);
		}

		table.appendChild(row);
	}
}

var shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}