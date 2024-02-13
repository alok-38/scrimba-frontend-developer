let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
};

// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values
let scrimbaUsersEmails = Object.values(scrimbaUsers);

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys
let scrimbaUsersIDs = Object.keys(scrimbaUsers);

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with both the keys and values
let scrimbaUsersEntries = Object.entries(scrimbaUsers);

console.log(scrimbaUsersEmails); // Output: ["sindre@scrimba.com", "per@scrimba.com", "frode@scrimba.com"]
console.log(scrimbaUsersIDs); // Output: ["00", "01", "02"]
console.log(scrimbaUsersEntries); // Output: [["00", "sindre@scrimba.com"], ["01", "per@scrimba.com"], ["02", "frode@scrimba.com"]]
