//Ryan Postma
//CMP237 final exam
//question 0 scope.js

var x = 30;//global variable

function hello() {//local variable function
	var x = 69;
	return x;
}

//test code
print('printing out variable x: ' + x);
print('printing out variable x hiddin in a function: ' + hello());

