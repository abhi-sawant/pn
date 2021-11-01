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

// var futureImg = document.getElementById("futureImg1");
// var coco = futureImg.height+4;
// console.log("-" + coco + "px");
// futureImg.style.marginTop = "-" + coco + "px";

console.log(window.innerWidth);
var futureImg = document.getElementsByClassName("future__img");
console.log(futureImg);
var futureHeight = document.getElementById("futureImg1").height;
console.log(futureHeight);

if (window.innerWidth > 639) {
	for (i = 0; i < futureImg.length; i++) {
		futureImg[i].style.marginTop = "-" + futureHeight + "px";
	}
}