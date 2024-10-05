const { promptOption } = require('./utils/promptUser');
const { sendMessage } = require('./services/sendMessage');
const { readMessages } = require('./services/readMessages');

async function main() {
    console.log('Welcome to NotionMail!');


    console.log('Please select an option:');
    console.log('- send: Send mail to a user.');
    console.log('- read: Check a user\'s mail.');

    while(true){
    const option = promptOption('$ ');  

    if (option === 'send') {
        await sendMessage();
    } else if (option === 'read') {
        await readMessages();
    } else if (option == 'exit'){
        exit()
    }
    else {
        console.log('Invalid option.');
    }
}
}


main();
