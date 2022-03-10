class Person {
    constructor(firtsName, lastName, age) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.age = age;
    }

    static question1() {
        return (
            console.log("Qual é o seu nome?")
        );
    }

    getFullName() {
        return (
            console.log(`Meu nome é ${this.firtsName} ${this.lastName}.`)
        );
    }

    question2() {
        return (
            console.log(`Qual é a sua idade ${this.firtsName} ${this.lastName}?`)
        );
    }

    getMyAge() {
        return (
            console.log(`Tenho ${this.age} anos de idade`)
        );
    }
}


class softSkills {
    constructor(skills) {
        this.skills = skills;
    }

    mySoftSkills() {
        return (
            console.log(`${this.skills}.`)
        );
    }
}

class hardSkills extends softSkills {
    constructor(skills) {
        super(skills);
    }

    myHardSKills() {
        return (
            console.log(`${this.skills}.`)
        );
    }
}

const person = new Person("Nilso", "Junior", 24);

const soft = new softSkills("Organizado, Estudioso e Dedicado");
const hard = new hardSkills("POO, JavaScript e NodeJS");

Person.question1();
person.getFullName();
person.question2();
person.getMyAge();

console.log(`Quais são as suas SoftSkills?`);
soft.mySoftSkills();
console.log("E as suas HardSkills?");
hard.myHardSKills();