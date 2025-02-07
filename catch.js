function greet(name) {
    return `Hello, ${name}!`;
  }
console.log(greet("bharath"));



 const greet = function(name) {
  return `Hello, ${name}!`;
};

 console.log(greet("chandu")); 




 const greet = (name) => `Hello, ${name}!`;
 console.log(greet("sai")); 



(function() {
    console.log("i am form suryapet");
  })();




 const greetFn = (name) => {
    console.log(`Hello, ${name}!`);
 }

function processName(callback) {
  const name = "Mr NBT";
  callback(name);
 }

 processName(greetFn); 

