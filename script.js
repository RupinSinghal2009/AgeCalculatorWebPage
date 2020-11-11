alert("hello");
function agecalculator(){
	var birthyear = prompt("What year were you born in?");
	var today = new Date();
	var currentyear = today.getFullYear();
	var res = ( currentyear - birthyear) * 365;
	var textAnswer = document.createTextNode("You are " + res + "days old");
	var heading = document.createElement('h1');
	heading.setAttribute("id","hid");
	heading.appendChild(textAnswer);
	document.getElementById("flex-box-result").appendChild(heading);
	console.log(textAnswer);
}

function agecalculator2(){
    var DOB = prompt("Please enter your DOB in DD/MM/YYYY");
    var year = DOB.split("/")[2];
    var month = DOB.split("/")[1];
    var day = DOB.split("/")[0];

    var today = new Date();
    var currentyear = today.getFullYear();
    var currentmonth = today.getMonth() + 1;
    // console.log(currentmonth);
    var currentday = today.getDate();


    var birthyear = year;
    var birthmonth = month;
    var birthday = day

    if (birthday > currentday){
    	currentday = currentday+30;
    	currentmonth = currentmonth-1;
    }

    if (birthmonth > currentmonth){
    	currentmonth = currentmonth+12;
    	currentyear = currentyear-1;
    }

    var ageyear = currentyear - birthyear;
    var agemonth = currentmonth - birthmonth;
    var ageday = currentday - birthday;

    var textAnswer = document.createTextNode("You are " + ageyear + " years " + agemonth + " months " + ageday + " days old" );
    var heading = document.createElement('h1');
    heading.setAttribute("id","hid");
	heading.appendChild(textAnswer);
	document.getElementById("flex-box-result").appendChild(heading);
	// console.log(textAnswer);

}

function reset(){
	document.getElementById("hid").remove();
}