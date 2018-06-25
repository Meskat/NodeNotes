console.log('Start');

const fs = require('fs');
const onError = (err) => {
  if (!err) return;
  console.log('Sorry, we were not able to create that note! See why -->', err);
}

fs.appendFile('shoppingList.txt', 'butter and milk', onError);
