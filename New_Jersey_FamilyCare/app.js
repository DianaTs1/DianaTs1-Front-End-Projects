// Navbar Animation

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		//Toggle Nav
		nav.classList.toggle("nav-active");
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.3s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
		burger.classList.toggle("toggle");
	});
};

navSlide();

// prettier-ignore
// Calculate Aligibility
const aligibilityCalculator = () => {
	let closeButton = document.getElementById("close-button");
	let seeResultsButton = document.getElementById("see-results-button");
	// let backgroundOpacity = document.querySelector(".pop-up-opacity");
	let answer = document.getElementById("answer");
	let answerWrapper = document.querySelector(".answer-wrapper");
	let buttonThatChanges = document.getElementById("button-that-changes");

	seeResultsButton.onclick = function () {
		let age = document.getElementById("age").value;
		let salary = document.getElementById("salary").value;
		let household = document.getElementById("household").value;
		let reside = document.getElementById("reside").value;

		// ASK FOR HELP FOR THIS ONE
		//!!!!!
		if (
			age === "0" ||
			salary === "0" ||
			household === "0" ||
			reside === "0"
		) { answer.innerHTML = "Please answer all the questions to find out about your aligibility";
			buttonThatChanges.innerHTML = "Try Again";
			buttonThatChanges.onclick = function () {
				answerWrapper.style.display = "none";
				location.reload()
			};

		} else if (
			age === "15-21" ||
			salary === "40000+" ||
			household === "1" ||
			reside === "No"
			) {
				answer.innerHTML = "Accourding to your responds you might not be aligible for New Jersey Family Care";
				buttonThatChanges.innerHTML = "Find Out Why";
		} else {
			answer.innerHTML = "Accourding to your responds you might be aligible for New Jersey Family Care";
			buttonThatChanges.innerHTML = "Apply Now";
		}
		// backgroundOpacity.style.display = "block";
		answerWrapper.style.display = "flex";

		console.log("d");
		console.log(age);
		console.log(salary);
		console.log(household);
		console.log(reside);
		console.log(answer);
	};

	// Close pop-up answer
	closeButton.onclick = function () {
		// backgroundOpacity.style.display = "none";
		answerWrapper.style.display = "none";
	};
};

aligibilityCalculator();
