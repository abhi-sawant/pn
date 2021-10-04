var ham = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

ham.addEventListener("click", function () {
	if (navLinks.style.maxHeight) {
		navLinks.style.maxHeight = null;
		ham.style.width = "25px";
	}
	else {
		navLinks.style.maxHeight = navLinks.scrollHeight + "px";
		ham.style.width = "20px";
	}
})