//alert("JavaScript works!");
/*
Edward M Murray Jr
SDI 1209
Project 4
JavaScript Library
*/


//JavaScript Library
var myLibrary = function(){

	//---String Problem 1 (1): Does a string follow a phone number pattern.
	function valPhone(number){
		var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			if (phoneFormat.test(number)) {
				return true;
			} else {
				return false;
			};
	};
	
	//---String Problem 2 (2): Does a string follow a email address pattern.
	function valEmail(email){
		var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (emailFormat.test(email)){
				return true;
			} else {
				return false;
			};
	};
	
	//---String Problem 3 (3): Is the string a URL?.
	function valUrl(url){
		var urlFormat = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;	
			if (urlFormat.test(url)){
				return true;
			} else {
				return false;
			};
	};
	
	//---String Problem 4 (4): Title-case a string.
	function splitTitleCase(string) {
    	var test = string.split(/\s|_/);
    		for(var i=0,l=test.length; i<l; i++) {
	    		test[i] = test[i].substr(0,1).toUpperCase() + (test[i].length > 1 ? test[i].substr(1).toLowerCase() : "");
            };
            return test.join("");
    };
	
	//---String Problem 5 (5): Change seperator.
	function changeSep (seperator){
		var test = seperator;
		var newStr = test.replace (",", "/");
		return newStr;
	};// Can't get function to replace all seperators.
	
	//---Number Problem 1 (6): Specific number of decimal places
	function numDecimals (currency){
		var test = currency.toFixed(2);
		return test;
	};
	
	//---Returns
	return {
		"valPhone": valPhone,
		"valEmail": valEmail,
		"valUrl": valUrl,
		"splitTitleCase": splitTitleCase,
		"changeSep": changeSep,
		"numDecimals": numDecimals
	};	
};

var newLib = new myLibrary();

//Problem 1 Call:
console.log (newLib.valPhone("3216524845"));

//Problem 2 Call:
console.log (newLib.valEmail("edward@ampedmedia.com"));

//Problem 3 Call:
console.log (newLib.valUrl("http://www.test@test.com"));

//Problem 4 Call:
console.log (newLib.splitTitleCase("scalable data infrastructures"));

//Problem 5 Call:
console.log (newLib.changeSep("a,b,c"));

//Problem 6 Call:
console.log (newLib.numDecimals(2.1));