// STEP 1: Create a Coffee object constructor
function Coffee(size, decaf, cream, sugar) {
    this.size = size;
    this.decaf = decaf;
    this.cream = cream;
    this.sugar = sugar;
}

Coffee.prototype = {
    decaffeinated: function() {
        return this.decaf ? "Decaffeinated" : "Regular";
    },
    description: function() {
        return `${this.size} ${this.decaffeinated()} coffee with ${this.cream} cream and ${this.sugar} sugar.`;
    }
};

// STEP 2: Instantiate a coffee
let priyanshCoffee = new Coffee("Medium", false, "2 shots", "1 spoon");

// STEP 3: Explore object members
console.log(Object.keys(priyanshCoffee));

// STEP 4: Access valueOf() method
console.log(priyanshCoffee.valueOf());

// STEP 5a: Access prototype via '__proto__'
console.log(priyanshCoffee.__proto__.__proto__);

// STEP 5b: Access prototype using Object.getPrototypeOf()
console.log(Object.getPrototypeOf(priyanshCoffee));

// STEP 5c: Access prototype of Coffee and Object
console.log(Coffee.prototype);
console.log(Object.prototype);

// STEP 6a: Create a new object based on priyanshCoffee
let robertCoffee = Object.create(priyanshCoffee);

// STEP 6b: Access prototype chain
console.log(robertCoffee.__proto__);

// STEP 7a: Access constructors
console.log(priyanshCoffee.constructor);
console.log(robertCoffee.constructor);

// STEP 7b: Create object instance using constructor
let meganCoffee = new priyanshCoffee.constructor("Large", true, "No cream", "2 spoons");

// STEP 7c: Access properties of new instance
console.log(meganCoffee.size);
console.log(meganCoffee.decaf);

// STEP 7d: Check access to description() method
console.log(meganCoffee.description());

// STEP 7e: Access constructor name
console.log(meganCoffee.constructor.name);

// STEP 8a: Modify prototype property of Coffee
Coffee.prototype.extra = function() {
    return "Extra method!";
};

// STEP 8b: Call new method on Coffee instances
console.log(priyanshCoffee.extra());
console.log(robertCoffee.extra());
console.log(meganCoffee.extra());
