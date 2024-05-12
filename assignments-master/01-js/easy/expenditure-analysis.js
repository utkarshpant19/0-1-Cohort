/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  // First Have an object like
  // {Food: 30, Clothing: 40, Electronics: 30}
  // Then convert it into
  /*
  [{cateogory: Food, totalSpent: 30}, {category: Clothing, }]
  */

  const catergoryTotalSpentObj = {};

  transactions.forEach((transaction)=> {
    if(catergoryTotalSpentObj[transaction.category]){
      catergoryTotalSpentObj[transaction.category] += transaction.price
    }
    else{
      catergoryTotalSpentObj[transaction.category] = transaction.price;
    }
  })


  // Create an array out of this object

  const result = Object.keys(catergoryTotalSpentObj).map((item)=> (
    {category: item, totalPriceSpent: catergoryTotalSpentObj[item]}
  ))
  return result;

}


module.exports = calculateTotalSpentByCategory;
