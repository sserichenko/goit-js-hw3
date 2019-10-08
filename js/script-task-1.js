'use strict';
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };
  user.mood = 'happy';
  user.hobby = 'javascript';
  user['premium'] = false;
  const arr = Object.keys(user);
  console.log('arr :', arr);
  for(let key of arr){
    console.log('key :', key, user[key]);
  }