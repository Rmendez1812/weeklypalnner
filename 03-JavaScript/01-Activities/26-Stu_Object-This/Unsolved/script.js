// What does 'this' refer to? = The window/properties of the console
console.log(this);

// What does 'this' refer to? = The certian Objects window/properties
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// What will this log? = 'THIS' references a variable of the same object which for this example is 'age'
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// What will this log? 'THIS' references a variable of the same object which for this example is 'initialInvestment'
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();

