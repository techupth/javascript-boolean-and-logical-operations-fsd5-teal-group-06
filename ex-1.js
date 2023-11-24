// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasNoCriminalBlacklist = true;
let isThai = false;

let isAllow = (isOver18 && hasNoCriminalBlacklist) || isThai;
console.log(isAllow);

// Jame
isOver18 = true;
let hasCriminalBlacklist = false;
isAllow = (isOver18 && (!hasCriminalBlacklist)) || isThai;

console.log(isAllow);