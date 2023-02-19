import data from "./data.json" assert { type: "json" };
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
var divDisplay = document.getElementsByClassName("mydiv__display");

const newBtn = [...btns];
newBtn.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		console.log(btn, i);
		const newDiv = [...divDisplay];
		newDiv.forEach((div, j) => {
			if (i === j) {
				btn.classList.add("active");
				div.classList.add("mydiv__active"); //
			} else if (i !== j) {
				btn.classList.remove("active");
				div.classList.remove("mydiv__active"); //
			}
		});
		render(divDisplay, i);
	});
});

function render(div, index) {
	//  console.log(data.phase1)
	let liElem;
	if (index === 0) {
		liElem = data.phase1
			.map((items, index) => {
				console.log(items, index);
				return `<li>${items.title}</li>`;
			})
			.join("");
	}

	if (index === 1) {
		liElem = data.phase2
			.map((items, index) => {
				console.log(items, index);
				return `<li>${items.title}</li>`;
			})
			.join("");
	}

	if (index === 2) {
		liElem = data.phase3
			.map((items, index) => {
				console.log(items, index);
				return `<li>${items.title}</li>`;
			})
			.join("");
	}
	if (index === 3) {
		liElem = data.phase4
			.map((items, index) => {
				console.log(items, index);
				return `<li>${items.title}</li>`;
			})
			.join("");
	}

	const newDiv = [...div];
	newDiv.forEach((divItem) => {
		divItem.innerHTML = liElem;
	});
}
const div = document.createElement("div");