// window.confirm("Am I working?")

// We can create objects using literal or constructor notation
	// literal:
		var andrew = {
			job: "developer", // string
			isAwesome: true // boolean 
			// can also hold objects as well as functions
		};

	// Construtor:  
		//create a function that will allow instances of an object:
		function Person(job,isAwesome) { // What should a person have?
			this.job = job;
			this.isAwesome = isAwesome;
		}
		//create new person:
		var matt = new Person("sales", true); 

// Pick back up adding methods to constructors




var speak = function(saywhat){
	console.log(saywhat);
}


var Dog = function(){
	var name, breed;
}


Dog.prototype.speak= speak;

firstDog = new Dog;
firstDog.name = "Rover";
// firstDog.breed = "Doberman";


firstDog.speak("woof")