/*
	Author: Jacob Becker
	Date: 12/7/2019
*/
"use strict"
// initializing variables
var num1 = document.getElementById("input1").value;
var num2 = document.getElementById("input2").value;
var operand = document.getElementById("operand").value;
var result;
//validation function
function validate(){
	var errorMessage;
	errorMessage = document.getElementById("errorText");
	errorMessage.innerHTML = "";
	try {
		if (num2 == 0 && operand == "Divide") throw "You cannot divide by zero";
		
	}
	catch(err) {
		document.write(err);
		alert(err);
	}
	if (errorMessage == "") {
	calculate();
	}
}

//calculate function
function calculate(){
	alert("Submission made!");
	if(operand == "Add"){
		result = num1 + num2;
	}else if(operand == "Subtract"){
		result = num1 - num2;
	}else if(operand == "Multiply"){
		result = num1 * num2;
	}else if(operand == "Divide"){
		result = num1 / num2;
	}
	document.getElementById("result").style.display = "block";
	document.getElementById("total").innerHTML = result;
}
//hide result area
if(result == ""){
	document.getElementById("result").style.display = "none";
}
// create event listeners  
var button = document.getElementById("calc");
if (button.addEventListener) {
   button.addEventListener("click", calculate, false);
} else if (button.attachEvent) {
   button.attachEvent("onclick", calculate);
}