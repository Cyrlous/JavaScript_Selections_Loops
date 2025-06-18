console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++)
{
  if (i % 2 != 0)
  {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i<=100; i++)
{
  if(i % 3 === 0 && i % 5 === 0)
  {
      console.log(`${i} FIZZBUZZ`);
  }
  else if (i % 3 === 0)
  {  
      console.log(`${i} FIZZ`);    
  }
  else if(i % 5 === 0)
  {
    console.log(`${i} BUZZ`);
  }
  else
  {
    console.log(`${i}`);
  }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let num = 1;

console.log(" ");
console.log("Exercise 1 While Loop");

while(num <= 100)
{
  if (num % 2 != 0)
  {
    console.log(num);
  }

  num ++;
}

num = 0;

console.log(" ");
console.log("Exercise 1 Do-While Loop");

do
{
  if (num % 2 != 0)
  {
    console.log(num);
  }

  num ++;
} while (num <= 100)

console.log(" ");
console.log("Exercise 2 While Loop");

num = 0;

while(num <= 100)
{
  if(num % 3 === 0 && num % 5 === 0)
  {
      console.log(`${num} FIZZBUZZ`);
  }
  else if (num % 3 === 0)
  {  
      console.log(`${num} FIZZ`);    
  }
  else if(num % 5 === 0)
  {
    console.log(`${num} BUZZ`);
  }
  else
  {
    console.log(`${num}`);
  }

  num ++;
}

num = 0;

console.log(" ");
console.log("Exercise 2 Do-While Loop");

do
{
  if(num % 3 === 0 && num % 5 === 0)
  {
      console.log(`${num} FIZZBUZZ`);
  }
  else if (num % 3 === 0)
  {  
      console.log(`${num} FIZZ`);    
  }
  else if(num % 5 === 0)
  {
    console.log(`${num} BUZZ`);
  }
  else
  {
    console.log(`${num}`);
  }

  num ++;
} while (num <= 100)

//Exercise 4 Section
console.log(" ")
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++)
{
  if(i == value)
  {
    console.log(`Found value! ${n}`)

    break;
  }

  if(i == n)
  {
    console.log(`Did not find value ${n}`)
  }
}

//Exercise 5 Section
console.log(" ")
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

console.log(`Numbers: ${fizzDivisor} and ${buzzDivisor}`)
console.log(`Starting with ${start} and ending with ${end}\n-----------------------------------\n`)

for(let i = start; i<=end; i++)
{
  if(i % fizzDivisor === 0 && i % buzzDivisor === 0)
  {
      console.log(`${i} FIZZBUZZ`);
  }
  else if (i % fizzDivisor === 0)
  {  
      console.log(`${i} FIZZ`);    
  }
  else if(i % buzzDivisor === 0)
  {
    console.log(`${i} BUZZ`);
  }
  else
  {
    console.log(`${i}`);
  }
}