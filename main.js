const { promptOption } = require('./utils/promptUser');
const { sendMessage } = require('./services/sendMessage');
const { readMessages } = require('./services/readMessages');

function main() {
    console.log('Welcome to NotionMail!');
    console.log('Please select an option:');
    console.log('- send: Send mail to a user.');
    console.log('- read: Check a user\'s mail.');

    const option = promptOption('> ');

    if (option === 'send') {
        sendMessage();
    } else if (option === 'read') {
        readMessages();
    } else {
        console.log('Invalid option.');
    }
}

main();
