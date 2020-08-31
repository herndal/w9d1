Function.prototype.inherits = function(superClass) {
    function Surrogate() {}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function Animal(name) {
    this.name = name;
}

Animal.prototype.eats = function(food) {
    console.log(`Yum, ${this.name} ate ${food}`);
}

Cat.inherits(Animal);

function Cat(name) {
    Animal.call(this, name);
}

Cat.prototype.meow = function() {
    console.log(`${this.name} says meow`);
}

lion = new Animal("growler");
lion.eats("antelope");

plush = new Cat("bad guy");
plush.eats("fish");
plush.meow();

lion.meow();