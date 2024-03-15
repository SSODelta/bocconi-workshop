var a_open = 0;

function htmlDecode(input) {
  	var doc = new DOMParser().parseFromString(input, "text/html");
  	return doc.documentElement.textContent;
}

function abstract(x){
	var arrow = document.getElementById("arrow_"+x);
	var body = document.getElementById("body_"+x);
	if(arrow.innerHTML == htmlDecode("&#9654;")){
		body.innerHTML = abstracts.get(x);
		arrow.innerHTML = "&#9660;";
		a_open += 1;
	} else {
		arrow.innerHTML = "&#9654;";
		body.innerHTML = "";
		a_open -= 1;
	}
	MathJax.typeset();
	time();
}

function time(){
	var l = document.getElementById('line');
	var d = new Date(), dref = new Date();
	dref.setHours(22,0,0,0);
	if(d.getHours() >= 9 && d.getHours() < 22 && a_open == 0){
		var slots = (dref - d)/1000/60/60*2;
		l.style.top = "-"+(Math.round(slots*84.1))+"px";
		l.style.display="block";
	} else {
		l.style.display="none";
	}
}