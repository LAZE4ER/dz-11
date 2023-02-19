

// сonst logger = time => console.log(`Resolved after ${time}ms`);
// function delay(ms){
//  return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(ms)
//   }, ms);
  
    

// })
// }





delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    resolve(updatedUsers);
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Зараз працює так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Повинно працювати так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
