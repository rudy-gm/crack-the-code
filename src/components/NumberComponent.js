import React from "react";

// helper function to get random index
function randomIndex(length){
  return Math.floor(Math.random() * length)
}

let gameNumber; 
let differentNum; 
let fillOut;
let results

function randomThreeDigits(maxInteger){
  // create array of number from 0 - maxInteger
  const numbers = Array.from(Array(maxInteger).keys())
  
  // save random number to variable and remove it from the array so you don't repeat it again
  const one = numbers.splice(randomIndex(numbers.length), 1)
  const two = numbers.splice(randomIndex(numbers.length), 1)
  const three = numbers.splice(randomIndex(numbers.length), 1)
  const nOne = numbers.splice(randomIndex(numbers.length),1)
  const nTwo = numbers.splice(randomIndex(numbers.length),1)
  const nThree = numbers.splice(randomIndex(numbers.length),1)
  const fOne = numbers.splice(randomIndex(numbers.length),1)
  const fTwo = numbers.splice(randomIndex(numbers.length),1)
  const fThree = numbers.splice(randomIndex(numbers.length),1)
  
  

 
  
  gameNumber =  [...one, ...two, ...three].join('')
  differentNum = [...nOne, ...nTwo, ...nThree].join('')
  fillOut =[...fOne,...fTwo,...fThree].join('')

  results = [gameNumber,differentNum, fillOut]

  return results;
}


export default randomThreeDigits;

