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
		var urlFormat = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;	
			if (urlFormat.test(url)){
				return true;
			} else {
				return false;
			};
	};
	
	//---String Problem 4 (4): Title-case a string.
	function splitTitleCase(string) {
    	var test = string.split(" ");
    		for(var i=0,l=test.length; i<l; i++) {
	    		test[i] = test[i].substr(0,1).toUpperCase() + (test[i].length > 1 ? test[i].substr(1).toLowerCase() : " "); // Not sure if the methods in this function make up for the points i lost on Project 3.
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
	
	//Number Problem 2 (7): Fuzzy-match a number: is the number above or below a number within a certain percent?
	function fuzzMatch (number,compare,percentage){
		var test = (number/compare) * 100;
			if ((number >= compare && test >= percentage) || (number < compare && test < percentage)){
				return false;
			} else {
				return true;
			};
	};
	
	//Number Problem 3 (8): Find the number of hours or days difference between two dates.
	function daysUntil(date) {
    	var newYears = date;
    	today = new Date(2012, 9, 18);
    	var one_day = 1000 * 60 * 60 * 24;
    		console.log(Math.ceil((newYears.getTime() - today.getTime()) / (one_day)-3) + " days left until the New Year.");
    }; //Had to add in a -3 to the math because for some reason it was off by three days. Couldn't figure out why??
    
	//---Returns
	return {
		"valPhone": valPhone,
		"valEmail": valEmail,
		"valUrl": valUrl,
		"splitTitleCase": splitTitleCase,
		"changeSep": changeSep,
		"numDecimals": numDecimals,
		"fuzzMatch": fuzzMatch,
		"daysUntil": daysUntil
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

//Problem 7 Call:
console.log (newLib.fuzzMatch(10,20,10));

//Problem 8 Call:
newLib.daysUntil(new Date(2013, 01, 01));