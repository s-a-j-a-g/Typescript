// class Player {
//   health: number;
//   speed: number;

//   greet() {
//     console.log("Hello World");
//   }
// }

// const mario = new Player();
// mario.health = 10;
// mario.speed = 1;

// mario.greet();

class Player {
  name: string;
  health: number;
  isInvincible: boolean;
  crush: Player;

  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }

  displayCrush() {
    console.log(`${this.name}: My crush is ${this.crush.name}.`);
  }
}

const mario = new Player();
mario.name = "Mario";
mario.health = 10;
mario.isInvincible = true;

const peach = new Player();
peach.name = "Peach";
peach.health = 8;
peach.isInvincible = true;

mario.greet();
peach.greet();

mario.crush = peach;
mario.displayCrush();

console.log("Mario's crush health: ", mario.crush.health);
