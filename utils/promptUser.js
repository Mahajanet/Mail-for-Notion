const readline = require('readline-sync');

// Function to prompt user for input
function promptUser(query) {
    return readline.question(query);
}

// Function to prompt user for an option
function promptOption(query) {
    return readline.question(query);
}

module.exports = {promptUser,promptOption};
