function Animals(name){
	this.name=name;
}

Animals.prototype.getName=function(){
	return this.name;
}

function Dog(name){
	Animals.apply(this,arguments);
};

Dog.prototype=Object.create(Animals.prototype);

Dog.prototype.constructor=Dog;

Dog.prototype.bark=function(){
	return "Dog "+this.getName()+" is barking";
}

var dog=new Dog("Aban");
console.log(dog.getName()==="Aban");
console.log(dog.bark()==="Dog Aban is barking");