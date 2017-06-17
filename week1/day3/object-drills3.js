//Object Initializers and methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100
  }
}
console.log(loaf.flour);
console.log(loaf.water);


console.log(loaf.hydration());

// Iterating over an objects properties

const object = {
  foo: 5,
  bar: 6,
  fum: 10,
  quux: 15,
  spam: 0,
}

for (key in object) {
  console.log(`${key} ${object[key]}`)
}

// Arrays in objects

const anything = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(anything.meals[3]);

// Arrays of objects & Properties that aren't there

const batman = {
  name: "Brucey Bruce",
  job_title: "rich dude"
}

const spiderman = {
  name: 'peter parker',
  job_title: `defender of hell's kitchen`,
  boss: batman.name
}

const johnWick = {
  name: 'john wick',
  job_title: 'contract killer',
  boss: batman.name
}

const wonderWoman = {
  name: 'gal gadot',
  job_title: 'princess warrior',
  boss: batman.name
}

const coolPeople = [batman, spiderman, johnWick, wonderWoman];

coolPeople.forEach(
  function(element) {
    // console.log(element.name);
    // console.log(element.job_title);

    if (element.boss !== undefined) {
      console.log(`${element.job_title} ${element.name} reports to ${element.boss}`);
    }
    else {
      console.log(`${element.job_title} ${element.name} doesn't report to anybody`);
    }
  }
);


// Cracking the code

// make cipher project
const message = 'craft block argon meter bells brown croon droop';
const letterCipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
}
// turn string into array
// loop through array and:
//   check if first letter of word is in cipher
//   if true, replace word with character ind. by cipher
// after loop:
// collapse array into string

function decode(string, cipher) {
  const results = [];
  const array = string.split(' ');
  const cipherKeys = Object.keys(cipher);
  let firstLetter, letterInCipher, desiredLetter;
  for (let i = 0; i < array.length; i++) {
    firstLetter = array[i][0];
    letterInCipher = cipherKeys.indexOf(firstLetter) > - 1;

    if (letterInCipher) {
      desiredLetter = cipher[firstLetter] - 1
      results.push(array[i][desiredLetter]);
    } else {
      results.push(' ');
    }
  }

  return results.join('');
}

// factory function LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${name} is a ${race} from ${origin}`);
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;

      if (x <= 0) { x = 0; }

      if (y <= 0) { y = 0; }

      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
    }
  }
}

const characters = [
  createCharacter('gandalf the white', 'gandalf', 'wizard', 'middle earth', 10, 6),
  createCharacter('bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1),
  createCharacter('frodo baggins', 'frodo', 'hobbit', 'the shire', 3, 2),
  createCharacter('aragorn son of arathorn', 'aragorn', 'man', 'dunnedain', 6, 8),
  createCharacter('legolas', 'legolas', 'elf', 'woodland realm', 8, 5)
];

characters.push(
  createCharacter('arwen undomiel', 'arwen', 'half-elf', 'rivendell', 2, 15)
);

const aragornFind = characters.find(
  function(element) {
    return element.nickname === 'aragorn';
  });

aragornFind.describe();

const onlyHobbits = characters.filter(
  function(character) {
    return character.race === 'hobbit';
  }
);

const violentFolks = characters.filter(
  function(character) {
    return character.attack > 5;
  }
);

// To equip a weapon to each of the characters, I would add a weapon parameter to the
// factory function. I would update the methods' string interpolating to reflect
// the changes.
