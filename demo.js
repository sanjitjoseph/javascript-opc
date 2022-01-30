'use strict'; 
(function() {
    
   let person = {
    firstName:'Tara',
    lastName:'Joseph',
    age: 12
    };

  for (let propertyN in person) {
  display(propertyN);
  }
})();