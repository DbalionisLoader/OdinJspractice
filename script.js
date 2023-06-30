const string ="the revolution will not be televised";
console.log(string);

const badstring =string;
console.log(string);

//"" '' can be both use for strings so pick one

const bigmouth = "I\"ve got no right to take my place";
console.log(bigmouth);  // escape char \ use to 


//Joining strings
// `` use for template literal to join string


const greeting = `hello`;
const name = "Chris";

const combineGreeting = `Hello, ${name}`;
console.log(combineGreeting);

const twoLetCombine =`${greeting}${name}`;
console.log(twoLetCombine);

//Sting join button action

const button = document.querySelector("button");
//Have to "defer", or place script AFTER the button element in HTML - script can't see the button if its before the HTML element itself 

function greet() {
    const nameTwo = prompt("what is your name?");
    alert(`Hello ${nameTwo}, nice to see you`);

}

button.addEventListener("click", greet);

//Can also use + instead of ${}
console.log(greeting + ", " + name);


//Numbers and strings

const name3 = "Front ";
number = 242; 
console.log(`${name3}${number}`);

//Number() method
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

//conterted string works as in
let number44 = myNum + myNum;
console.log(number);


//tosrtring method
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);


//Expression in template literals
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;

const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


const output2 = `I like ${song}. It sucks, score of ${(highestScore/score) * 100 }%.`;
console.log(output2);

//Template literal respect source code line breaks for writing text or use \n to line break

const output3 = `test ping 
line text doooo
all lines are cool`;

console.log(output3);

const output4 = "test ping line text doooo all lines are cool";

//String methods

//Length method = find length of any string
const browserType = "mozzile";
console.log(browserType.length);



//Finding specifc char from string use [0]
//first char is ALWAYS [0] position

browserType[0];

//For finding last char of any string

browserType[browserType.length-1];


//FINDING SUBSTRING IN STRING = use includes() method, returns true or false

let stringTester2000 = "mozilla";

if (stringTester2000.includes("zilla")){
    console.log("zilla found");
} else {
    console.log("zilla not found");
}


// to find if string end or start with particular string use startWith() or endsWith()


// indexOf() = returns first position of wanted string from sample starting from 0, returns -1 if nothing found

const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

// Use loop and indexOf last string position start to find all string position in a text 
