const { notion } = require('../config/notionClient');
const { promptUser } = require('../utils/promptUser');

async function readMessages() {
    const user = promptUser('User: $ ');

    try {
        //quering for responses
        const response = await notion.databases.query({
            database_id: process.env.NOTION_PAGE_ID,
            filter: {
                property: 'Recipient',
                rich_text: {
                    equals: user,
                },
            },
        });

        //storing messages
        const messages = response.results;
        //if empty message
        if (messages.length === 0) {
            console.log(`No messages for ${user}.`);
        } else {
            console.log(`Messages (${messages.length}):`);
            messages.forEach((message, index) => {
                //if no property found, return backup 
                const sender = message.properties.Sender?.rich_text?.[0]?.text?.content || 'Unknown Sender';
                const content = message.properties.Message?.title?.[0]?.text?.content || 'No message content';
                const timestamp = message.properties.Timestamp?.date?.start || 'No timestamp';

                console.log(`${index + 1}: From: ${sender}`);
                console.log(content);
                console.log(`Sent: ${timestamp}\n`);
            });
        }
    //error handling
    } catch (error) {
        console.error('Error reading messages:', error);
    }
}

module.exports = {readMessages};
