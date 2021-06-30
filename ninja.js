class Ninja {
    constructor (name) {
        this.name = name;
        this.health = 75;
        this.speed = 30;
        this.strength = 30;
    }

    sayName (){
        console.log(this.name);
    }

    showStats (){
        console.log("Name: ", this.name);
        console.log("Health", this.health);
        console.log("Speed", this.speed);
        console.log("Strength", this.strength);
    }
    
    drinkWhiskey (){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super (name)
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("Whether you're right or wrong, go with your instincts.");
    }

    drinkTea() {
        this.health += 30;
        this.strength += 30;
    }
}

const wsupMyNinja = new Ninja("Dillen");
wsupMyNinja.sayName();
console.log();
wsupMyNinja.showStats();
console.log();
wsupMyNinja.drinkWhiskey();
wsupMyNinja.showStats();

const superSensei = new Sensei("Nganga Tolo Naa");
superSensei.speakWisdom();
console.log();
superSensei.showStats();
superSensei.drinkWhiskey();
superSensei.showStats();
superSensei.drinkTea();
superSensei.showStats();