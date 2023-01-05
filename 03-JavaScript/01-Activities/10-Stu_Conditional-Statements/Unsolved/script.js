// Change the values and operators below to test your algorithm meets all conditions
var x = 75;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
if (expression1 && expression2 == true) {
    console.log('True ✅ True ✅');
} else if (expression1 == true && expression2 == false) {
    console.log('True ✅ False ❌');
} else if (expression2 == true){
    console.log('False ❌ True ✅');
} else {
    console.log('False ❌ False ❌');
}

// instructor's code
  //   if(expression1 && expression2) {
   // console.log("True ✅ True ✅");

    // If both conditions are not true, check if expression1 is true
   // } else if (expression1) {
    //    console.log("True ✅ False ❌");
    
    // If expression1 is not true, then check if expression2 is true
   // } else if (expression2) {
    //    console.log("False ❌ True ✅");
    
    // If none of the conditions above evaluate to true, both expressions must be false
   // } else {
     //   console.log("False ❌ False ❌"); //
   // } 
    