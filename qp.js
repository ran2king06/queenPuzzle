let app = document.getElementById('app');


var queenNotBeKill = function (result, points, n, index) {
	for (var i = index; i < n; i++) {

		if (points.length !== i) { 

			return;
		}
		
		for (var j = 0; j < n; j++) {
			if (queenSafe(points, [i, j])) {
				
				points.push([i, j]);
				queenNotBeKill(result, points, n, i + 1);
				
				if (points.length === n) {
					result.push(showPuzzle(points));
				
				}
				points.pop();
			}
		}
	}
};

var showPuzzle = function (points) {
	var result = [];
	var n = points.length;

	for (var i = 0; i < n; i++) {
		result[i] = '';
		for (var j = 0; j < n; j++) {
			result[i] += (points[i][1] === j ? 'Q' : '.');
		}
	}
	return result;
};

var queenSafe = function ( lastStep , newStep) {

	for (var i = 0; i < lastStep.length; i++) {

		if (lastStep[i][0] === newStep[0] || lastStep[i][1] === newStep[1]) {
			return false;
		}

		if (Math.abs((lastStep[i][0] - newStep[0]) / (lastStep[i][1] - newStep[1])) === 1) {
			return false;
		}

	}
	
	return true;
};


// Queen Puzzle Solution
var queenPuzzle = function (n) {

	var result = [];
	if (n === 1 || n >= 4) {
		queenNotBeKill(result, [], n, 0);
		// return result;

		let ansLength = result.length;
		let str = "";

		for (let i = 0; i < ansLength; i++) {
			console.log(result[i]);
			var content = `
			<div class="puzzle-box">` + 
			`<h6>Solution` + ((parseInt(i)) + 1) + 
			`</h6>` +
			`<div class="puzzle">` + result[i] + `</div>` +
			`</div>`;
			str += content.replaceAll(',', '</br>');
		}

		app.innerHTML = 
		`<div class="puzzle-container"> ` +
		str +
		`</div>`;
	}
};
