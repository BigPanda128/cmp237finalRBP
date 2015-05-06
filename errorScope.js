//Ryan Postma
//CMP237 final exam
//question 1 error scope

var x = 30;

var z = "You're and idiot";

function idiot() {
	var z = 69;
	return z;
}

print('print out variable x: ' + x);
print('printing out variable z from a fucntion: ' + idiot());
print('printing out variable z in general: ' + z);

