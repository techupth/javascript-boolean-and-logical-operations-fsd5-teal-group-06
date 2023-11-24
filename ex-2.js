// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasNotBoughtProductFromITCategory = false;
let hasNotAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasNotBoughtProductFromITCategory & hasNotAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
