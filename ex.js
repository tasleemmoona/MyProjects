function book(id){
    var p = document.getElementById(id).parentNode;
    var c = document.getElementById(p.id).childNodes;
    var str = c[1].innerHTML;
    var i = str.indexOf('<');
    var i1 = str.indexOf('0');
    var val = str.substring(0, i);
    var val1 = str.substring(i1-1,);
    document.getElementById('inp1').value = val;
    document.getElementById('amt').value = Number(val1);
}

function myfun(id) {
	if(id == "btn1"){
		if(document.getElementById("btn1").disabled == false){
			var p2 = document.getElementById("p2");
			if (p2.style.display === "none") {
	    		p2.style.display = "block";
	  		} 
	  		var p3 = document.getElementById("p3");
			if (p3.style.display === "none") {
	    		p3.style.display = "block";
	  		} 
	  		var p5 = document.getElementById("p5");
			if (p5.style.display === "none") {
	    		p5.style.display = "block";
	  		} 
			var p1 = document.getElementById("p1");
			if (p1.style.display != "none") {
	    		p1.style.display = "none";
	  		}
	  		var p4 = document.getElementById("p4");
			if (p4.style.display != "none") {
	    		p4.style.display = "none";
	  		} 
			document.getElementById("btn1").disabled=true;
			document.getElementById("btn4").disabled=false;
		}
	}
	else if(id == "btn2"){
		var p2 = document.getElementById("p2");
		if (p2.style.display === "none") {
    		p2.style.display = "block";
  		} 
  		var p3 = document.getElementById("p3");
		if (p3.style.display === "none") {
    		p3.style.display = "block";
  		} 
  		var p5 = document.getElementById("p5");
		if (p5.style.display === "none") {
    		p5.style.display = "block";
  		} 
		var p1 = document.getElementById("p1");
		if (p1.style.display != "none") {
    		p1.style.display = "none";
  		}
  		var p4 = document.getElementById("p4");
		if (p4.style.display != "none") {
    		p4.style.display = "none";
  		} 
		document.getElementById("btn1").disabled=true;
		document.getElementById("btn4").disabled=false;
	}
	else if(id == "btn3"){
		var p1 = document.getElementById("p1");
		if (p1.style.display === "none") {
    		p1.style.display = "block";
  		} 
  		var p4 = document.getElementById("p4");
		if (p4.style.display === "none") {
    		p4.style.display = "block";
  		} 
  		var p2 = document.getElementById("p2");
		if (p2.style.display != "none") {
    		p2.style.display = "none";
  		}
		var p3 = document.getElementById("p3");
		if (p3.style.display != "none") {
    		p3.style.display = "none";
  		}
  		var p5 = document.getElementById("p5");
		if (p5.style.display != "none") {
    		p5.style.display = "none";
  		}
  		document.getElementById("btn4").disabled=true;
		document.getElementById("btn1").disabled=false;
	}
	else if(id == "btn4"){
		if(document.getElementById("btn4").disabled == false){
			var p1 = document.getElementById("p1");
			if (p1.style.display === "none") {
	    		p1.style.display = "block";
	  		} 
	  		var p4 = document.getElementById("p4");
			if (p4.style.display === "none") {
	    		p4.style.display = "block";
	  		} 
	  		var p2 = document.getElementById("p2");
			if (p2.style.display != "none") {
	    		p2.style.display = "none";
	  		}
			var p3 = document.getElementById("p3");
			if (p3.style.display != "none") {
	    		p3.style.display = "none";
	  		}
	  		var p5 = document.getElementById("p5");
			if (p5.style.display != "none") {
	    		p5.style.display = "none";
	  		}
	  		document.getElementById("btn4").disabled=true;
			document.getElementById("btn1").disabled=false;
		}
	}
}

function confirm(){
	var mob = document.getElementById("num");
	var x = document.getElementById("email");
	var c1 = 0;
	var c2 = 0;
	if (!mob.checkValidity()) {
		document.getElementById("demo").style.display = "block";
    	document.getElementById("demo").innerHTML = "Please enter mobile number correctly";
    	c1 = 1;
  	}
  	if (!email.checkValidity()) {
		document.getElementById("demo1").style.display = "block";
    	document.getElementById("demo1").innerHTML = "Please enter email address correctly";
  		 c2 = 1;
  	}  
	if (mob.value != '' && email.value != ''){
		if(c1 == 0 && c2 == 0){
			document.getElementById("msg").style.display = "block";
			document.getElementById("inp1").value = '';
			document.getElementById("amt").value = '';
			mob.value = '';
			x.value = ''
			document.getElementById("demo").style.display = "none";
			document.getElementById("demo1").style.display = "none";
	    }
	}
		

}
