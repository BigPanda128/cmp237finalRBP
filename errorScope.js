//Ryan Postma
//CMP237 final exam
//question 1 error scope

var x = 30;//regular global scope

var z = "You're and idiot";//global scope of z to show your an idiot

function idiot() {//this runs if you call z properly
	var z = 69;
	return z;
}

//testing code
print('print out variable x: ' + x);
print('printing out variable z from a fucntion: ' + idiot());
print('printing out variable z in general: ' + z);

