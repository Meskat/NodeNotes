const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let user = os.userInfo();

const onError = (err) => {
  if (!err) return;
  console.log('Sorry, we were not able to create that note! See why -->', err);
};
fs.appendFile('greet-user.txt', `Hello ${user.username}, you are ${notes.age} \n `, onError);
