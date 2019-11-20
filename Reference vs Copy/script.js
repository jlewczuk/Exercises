const players = ["Jack", "Jones", "Jack", "Tom"];
const team = players;
console.log(players, team);
team[3] = 'Fred';
console.log(players, team);

// and we want to make a copy of it.
// You might think we can just do something like this:
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players);

// now when we update it, the original one isn't changed


// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: "My name",
  age: 80
};

// and think we make a copy:
//const captain = person;
//captain.number = 99;
//console.log(captain);

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 99, age: 12});
console.log(captain2);
console.log(person);

// We will hopefully soon see the object ...spread
//const captain3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const me = {
    name: 'Jack',
    age: 78,
    social: {
        fb: 'something',
        instagram: '@else',
    }
};

console.clear();
console.log(me);

const dev = Object.assign({}, me);
dev.name = 'Jackson';
console.log(dev);

dev.social.fb = '@omething new';
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(me));
dev2.social.fb = 'Somethin newest';
console.log(dev);
console.log(dev2);