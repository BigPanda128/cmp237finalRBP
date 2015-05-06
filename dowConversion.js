//Ryan Postma
//CMP237
//question 7 dowConversion

//array of days of week so that monday is 1 and sunday is 7
var names = ["", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday", "Sunday"];

//function for conversion
function dayConvert(day) {
	if(day % 1 === 0) {//if you are looking for a number
		return names[day];
	}else{//else you typed a day
		return names.indexOf(day);
	}
}

//test code
print('looking for monday: ' + dayConvert("Monday"));

print('looking for day 4: ' + dayConvert(4));
