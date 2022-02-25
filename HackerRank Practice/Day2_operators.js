var meal_cost = 12 ;
var tip_percent = 20 ;
var tax_percent = 8  ;

var tip= meal_cost/100 * tip_percent
var tax = meal_cost/100 * tax_percent

var total_cost= Math.round(meal_cost+tip+tax)
console.log(total_cost)