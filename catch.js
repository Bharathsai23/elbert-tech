function greet(name) {
    return `Hello, ${name}!`;
  }
console.log(greet("MrNBT 123"));



 const greet = function(name) {
  return `Hello, ${name}!`;
};

 console.log(greet("FE: MrNBT")); 




 const greet = (name) => `Hello, ${name}!`;
 console.log(greet("Balaji")); 



(function() {
    console.log("This runs right away!");
  })();




 const greetFn = (name) => {
    console.log(`Hello, ${name}!`);
 }

function processName(callback) {
  const name = "Mr NBT";
  callback(name);
 }

 processName(greetFn); 

