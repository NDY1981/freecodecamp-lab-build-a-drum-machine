const heater1 = document.getElementById("heater-1");
const heater2 = document.getElementById("heater-2");
const heater3 = document.getElementById("heater-3");
const heater41 = document.getElementById("heater-4_1");
const heater6 = document.getElementById("heater-6");
const dsc0f = document.getElementById("dsc_oh");
const kicknhat = document.getElementById("kick_n_hat");
const rp4kick1 = document.getElementById("rp4_kick_1");
const cevh2 = document.getElementById("cev_h2");

const q = document.getElementById("Q");
const w = document.getElementById("W");
const e = document.getElementById("E");
const a = document.getElementById("A");
const s = document.getElementById("S");
const d = document.getElementById("D");
const z = document.getElementById("Z");
const x = document.getElementById("X");
const c = document.getElementById("C");

const display = document.getElementById("display");

let clearDisplayTimeout = null;

function updateDisplay(text) {
	display.innerText = text;

	if (clearDisplayTimeout) {
		clearTimeout(clearDisplayTimeout);
	}

	clearDisplayTimeout = setTimeout(() => {
		display.innerText = "";
	}, 5000);
};


heater1.addEventListener("click", () => {
	updateDisplay("Heater 1")
	q.play();
});

heater2.addEventListener("click", () => {
	updateDisplay("Heater 2");
	w.play();
});

heater3.addEventListener("click", () => {
	updateDisplay("Heater 3");
	e.play();
});

heater41.addEventListener("click", () => {
	updateDisplay("Heater 4");
	a.play();
});

heater6.addEventListener("click", () => {
	updateDisplay("Clap");
	s.play();
});

dsc0f.addEventListener("click", () => {
	updateDisplay("Open-HH");
	d.play();
});

kicknhat.addEventListener("click", () => {
	updateDisplay("Kick-n'-Hat");
	z.play();
});

rp4kick1.addEventListener("click", () => {
	updateDisplay("Kick");
	x.play();
});

cevh2.addEventListener("click", () => {
	updateDisplay("Closed-HH");
	c.play();
});

document.addEventListener("keydown", (event) => {
	if (event.key == "q" || event.key == "Q") {
		updateDisplay("Heater 1");
		q.play();
	} else if (event.key == "w" || event.key == "W") {
		updateDisplay("Heater 2");
		w.play();
	} else if (event.key == "e" || event.key == "E") {
		updateDisplay("Heater 3");
		e.play();
	} else if (event.key == "a" || event.key == "A") {
		updateDisplay("Heater 4");
		a.play();
	} else if (event.key == "s" || event.key == "S") {
		updateDisplay("Clap");
		s.play();
	} else if (event.key == "d" || event.key == "D") {
		updateDisplay("Open-HH");
		d.play();
	} else if (event.key == "z" || event.key == "Z") {
		updateDisplay("Kick-n'-Hat");
		z.play();
	} else if (event.key == "x" || event.key == "X") {
		updateDisplay("Kick");
		x.play();
	} else if (event.key == "c" || event.key == "C") {
		updateDisplay("Closed-HH");
		c.play();
	}
});