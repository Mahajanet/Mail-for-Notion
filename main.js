const { promptOption } = require('./utils/promptUser');
const { sendMessage } = require('./services/sendMessage');
const { readMessages } = require('./services/readMessages');


async function main() {
    //Start the CLI app 
    console.log('Welcome to NotionMail!');
    console.log('Please select an option:');
    console.log('- send: Send mail to a user.');
    console.log('- read: Check a user\'s mail.');

    //To ensure ulimited prompts for user
    let running = true 
    while(running){
    const option = promptOption('$ ');  
    
    if (option === 'send') {
        await sendMessage();
    } else if (option === 'read') {
        await readMessages();
    } else if (option == 'exit'){
        running = false;
    }
    else {
        console.log('Invalid option.');
    }
}
}


main();
