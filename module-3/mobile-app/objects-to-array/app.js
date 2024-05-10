let scrimbaUsers = {
  "00": "sindre@scrimba.com",
  "01": "per@scrimba.com",
  "02": "frode@scrimba.com",
};

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values

let scrimbaUsersEmails = Object.values(scrimbaUsers);
let scrimbaUsersIDs = Object.keys(scrimbaUsers);
let scrimbaUsersEntries = Object.entries(scrimbaUsers);

console.table(scrimbaUsersEmails, scrimbaUsersIDs, scrimbaUsersEntries);
