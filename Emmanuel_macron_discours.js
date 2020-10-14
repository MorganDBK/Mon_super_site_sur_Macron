document.getElementById('link-1').addEventListener("click", function () {
	document.getElementById('sous-titre-1').style.display = 'block';
	document.getElementById('sous-titre-2').style.display = 'none';
})
document.getElementById('link-2').addEventListener("click", function () {
	document.getElementById('sous-titre-1').style.display = 'none';
	document.getElementById('sous-titre-2').style.display = 'block';
})