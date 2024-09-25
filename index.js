//----- below is part two practical-----//
let distance = 1500

let speedOne = 55
let mpgOne = 30

let speedTwo = 60
let mpgTwo = 28

let speedThree =75
let mpgThree =23

let budget = 175
let fuelPrice = 3

let speedOneFuelNeed =  distance/mpgOne
let speedTwoFuelNeed = distance/mpgTwo
let speedThreeFuelNeed = distance/mpgThree

let speedOneFuelBudgetNeed = distance/mpgOne*fuelPrice
let speedTwoFuelBudgetNeed = distance/mpgTwo*fuelPrice
let speedThreeFuelBudgetNeed = distance/mpgThree*fuelPrice

let enoughBudgetOne= speedOneFuelBudgetNeed > budget
let enoughBudgetTwo = speedTwoFuelBudgetNeed > budget
let enoughBudgetThree = speedThreeFuelBudgetNeed > budget

let speedOneTimeNeed = distance/speedOne
let speedTwoTimeNeed =  distance/speedTwo
let speedThreeTimeNeed =  distance/speedThree


console.log("when I drive " + speedOne +" miles per hour, I need " + speedOneFuelNeed + " gallons fuel to finish the " +  distance  + " miles long trip.")
console.log("when I drive " + speedTwo + " miles per hour, I need "+ speedTwoFuelNeed + " gallons fuel to finish the " +  distance  + " miles long trip.")
console.log("when I drive " + speedThree + " miles per hour, I need "+ speedThreeFuelNeed +" gallons fuel to finish the " +  distance  + " miles long trip.")

console.log("Is My budget enough to cove the trip? when I drive at speed of " + speedOne + " miles per hour. The anwser is " + enoughBudgetOne +"." )
console.log("Is My budget enough to cove the trip? when I drive at speed of " + speedTwo + " miles per hour. The anwser is " + enoughBudgetTwo +"." )
console.log("Is My budget enough to cove the trip? when I drive at speed of " + speedThree + " miles per hour. The anwser is " + enoughBudgetThree +"." )

console.log( "I need drive up to " + speedOneTimeNeed + " hours to finish the trip at a speed of " + speedOne + " miles per hour.")
console.log( "I need drive up to " + speedTwoTimeNeed + " hours to finish the trip at a speed of " + speedTwo + " miles per hour.")
console.log( "I need drive up to " + speedThreeTimeNeed + " hours to finish the trip at a speed of " + speedThree + " miles per hour.")

//----- above is part two practical-----//


//----- below is part One -----//
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

let isDivideBy5= n1 / 5 && n2 / 5 && n3 / 5 && n4 / 5;
let isLarger = n1 > n4;
let subtra = n2 -n1;
let mulitp = n3 * 2;
let remain = n4 % 5;
const notOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

console.log (`Are all the four numbers divided by 5, answer is ${isDivideBy5}.`);
console.log (`Is number one larger than number four, answer is ${isLarger}.`);
console.log (`The number two subtracts number one, result is ${subtra}.`);
console.log (`The result of multiply number three is ${mulitp}.`);
console.log (`The result of moduled number four is ${remain}.`);


