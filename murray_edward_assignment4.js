//alert("JavaScript works!");
/*
Edward M Murray Jr
SDI 1209
Project 4
JavaScript Library
*/


//JavaScript Library
var myLibrary = function(){

	//String Problem 1: Does a string follow a phone number pattern.
	function valPhone(number){
		var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (phoneFormat.test(number)) {
				return true;
			} else {
				return false;
			};
	};
	
	//String Problem 2: Does a string follow a email address pattern.
	function valEmail(email){
		var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (emailFormat.test(email)){
				return true;
			} else {
				return false;
			};
	};
	
	//String Problem 3: Is the string a URL?.
	function valUrl(url){
		var urlFormat = new RegExp('^(https?:\/\/)?'+'((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+'((\d{1,3}\.){3}\d{1,3}))'+'(\:\d+)?(\/[-a-z\d%_.~+]*)*'+'(\?[;&a-z\d%_.~+=-]*)?'+'(\#[-a-z\d_]*)?$','i');	
			if (urlFormat.test(url)){
				return true;
			} else {
				return false;
			};
	};
	
	return {
		"valPhone": valPhone,
		"valEmail": valEmail
	};	
};

var newLib = new myLibrary();

//Problem 1 Call:
console.log (newLib.valPhone("3216524845"));

//Problem 2 Call:
console.log (newLib.valEmail("edward@ampedmedia.com"));