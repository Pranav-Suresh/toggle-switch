function colorChange(x,_this) {
	if(_this.checked) {
		x.style.backgroundColor = "green";
	} else {
		x.style.backgroundColor = "red";
		x.style.transition = ".4s";

	}
}