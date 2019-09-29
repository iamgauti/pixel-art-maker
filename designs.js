// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.getElementById("butt").addEventListener('click', makeGrid);

function makeGrid() {
	event.preventDefault();
	let colr = document.getElementById("colorPicker").value;
	let hgt = document.getElementById("inputHeight").value;
	let wid = document.getElementById("inputWeight").value;
	let pc = document.getElementById("pixelCanvas");
	var rows = new Array(hgt);
	var cols = new Array(hgt * wid);
	let mouseLeftPressed = false;
	pc.onmousedown = function (e) {
		if (e.which === 1)
			mouseLeftPressed = true;
	};
	pc.onmouseup = function (e) {
		if (e.which === 1)
			mouseLeftPressed = false;
	};
	for (let i = 0; i < hgt; i++) {
		rows[i] = document.createElement('tr');
		for (let j = 0; j < wid; j++) {
			cols[i * wid + j] = document.createElement('td');
			cols[i * wid + j].addEventListener('click', function (e) {
				cols[i * wid + j].style.backgroundColor = colr;
			});
			cols[i * wid + j].addEventListener('mouseover', function (e) 			{
              if(mouseLeftPressed)
                  cols[i * wid + j].style.backgroundColor = colr;
			});
			rows[i].appendChild(cols[i * wid + j]);
		}
		pc.appendChild(rows[i]);
	}
}