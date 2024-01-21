// Declare and initialize variables
var myNum = 5;
var loopCounter = 1;
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
var text = "";

// Display if the number is even/odd using a for loop
for (i = 0; i <= 10; i++) {
    // If there is no remainder after dividing by 2, the number is even. Else it is odd.
    if (i % 2 === 0)
        document.write("count " + i + " is even. <br>");
    else
        document.write("count " + i + " is odd. <br>");
}
document.write("<br>")

// Prompt user for input and use the input as the number of iterations for the do-while loop.
myNum = prompt("Enter a number between 5 and 20");
do {
    document.write("Number of times do while has looped is: " + loopCounter + ".<br>");
    loopCounter++;
} while (loopCounter < myNum);

// Display subject in the subject array using forEach.
subjects.forEach(displaySubjects);

// Adds each subject to variable text seperated by commas.
function displaySubjects(ivalue, index) {
    text += ivalue + ", ";
}

// Display the concatenated subjects stored in the variable text.
document.write("<br>" + text);