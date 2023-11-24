// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasNotBoughtProductFromITCategory = true;
let hasNotAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion = ((lastMonthPaidMoreThan4000 && isWeekday && hasNotAttendedDiscountEvent && hasNotBoughtProductFromITCategory) || isPlatinum);

console.log(hasPromotion);

// John
lastMonthPaidMoreThan4000 = true;
isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
isPlatinum = false;

hasPromotion = ((lastMonthPaidMoreThan4000 && isWeekday && !hasAttendedDiscountEvent && !hasBoughtProductFromITCategory) || isPlatinum);

console.log(hasPromotion);