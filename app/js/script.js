var ham = document.getElementById('hamburger');
var navLinks = document.getElementById('navLinks');

ham.addEventListener("click", function () {
	if (navLinks.style.maxHeight) {
		navLinks.style.maxHeight = null;
		ham.style.width = "25px";
	}
	else {
		navLinks.style.maxHeight = navLinks.scrollHeight + "px";
		ham.style.width = "21px";
	}
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			// panel.style.padding = "0px";
			panel.style.maxHeight = null;
		} else {
			// panel.style.padding = "1em";
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}