// Simple class exercise demonstrating inheritance, getters/setters, and static methods

class Animal {
	constructor(name) {
		this._name = name;
	}

	speak() {
		return `${this._name} makes a sound.`;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	static kingdom() {
		return 'Animalia';
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	speak() {
		return `${this.name} the ${this.breed} barks.`;
	}

	fetch(item) {
		return `${this.name} fetched the ${item}.`;
	}
}

// Usage examples
console.log('Static:', Animal.kingdom());

const a = new Animal('Creature');
console.log(a.speak());

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());
console.log(dog.fetch('ball'));

dog.name = 'Buddy';
console.log('Renamed:', dog.name);

console.log('Instanceof checks:', dog instanceof Dog, dog instanceof Animal);

// Demonstrate prototype method override
Animal.prototype.info = function () {
	return `This is ${this.name}`;
};
console.log('Prototype info:', dog.info());

console.log('--- End of class exercise ---');
