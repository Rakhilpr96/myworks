document.getElementById("upper-cont").textContent = 0;
function Getnum(x){
    var y = document.getElementById("upper-cont").textContent;
    if (y == 0){
    	document.getElementById("upper-cont").textContent = x;
    }
    else { 
    	document.getElementById("upper-cont").textContent = y + x;
	}
}

function Result(){
    var res = document.getElementById("upper-cont").textContent;
    res = res.replace("×", "*");
    res = res.replace("÷", "/");
    document.getElementById("upper-cont").textContent = eval(res);
}

function clearall() {
	document.getElementById("upper-cont").textContent = 0;
}

function del() {
	var d = document.getElementById("upper-cont").textContent;
	d = d.slice(0,d.length-1);
	if (d == ""){
		document.getElementById("upper-cont").textContent = 0;
	}
	else{
	document.getElementById("upper-cont").textContent = d;
	}
}

function plus_or_minus() {
	var pom = document.getElementById("upper-cont").textContent;
	var new_val =  -pom;
	document.getElementById("upper-cont").textContent = new_val;
}
