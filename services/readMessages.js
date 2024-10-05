const { notion } = require('../config/notionClient');
const { promptUser } = require('../utils/promptUser');

async function readMessages() {
    const user = promptUser('User: $ ');

    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_PAGE_ID,
            filter: {
                property: 'Recipient',
                rich_text: {
                    equals: user,
                },
            },
        });

        const messages = response.results;
        if (messages.length === 0) {
            console.log(`No messages for ${user}.`);
        } else {
            console.log(`Messages (${messages.length}):`);
            messages.forEach((message, index) => {
                const sender = message.properties.Sender?.rich_text?.[0]?.text?.content || 'Unknown Sender';
                const content = message.properties.Message?.title?.[0]?.text?.content || 'No message content';
                const timestamp = message.properties.Timestamp?.date?.start || 'No timestamp';

                console.log(`${index + 1}: From: ${sender}`);
                console.log(content);
                console.log(`Sent: ${timestamp}\n`);
            });
        }
    } catch (error) {
        console.error('Error reading messages:', error);
    }
}

module.exports = {readMessages};
