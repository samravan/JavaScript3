class Person {
  constructor(firstName, age, location, childerenNum, job, favourite) {
    this.firstName = firstName;
    this.age = age;
    this.location = location;
    this.childerenNum = childerenNum;
    this.job = job;
    this.favourite = favourite;
  }
}

class Animal {
  constructor(species, name, age, color, eat, help, owner) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
    this.eat = eat;
    this.help = help;
    this.owner = owner;
  }
}

const Adbulkareem = new Person('Abdulkareem', 35, 'Riyadh', 3, 'construction worker', ['eat dates', 'smoke water pipe']);
const Adel = new Animal('horse', 'Adel', 15, 'brown', 'grass', 'transport materials', Adbulkareem);