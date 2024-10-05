const { notion } = require('../config/notionClient');
const { promptUser } = require('../utils/promptUser');

// Read messages for a recipient from an existing entry in an existing database
async function readMessages() {
    const user = promptUser('User: ');

    // Query the Notion database for messages addressed to the user
    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_PAGE_ID,
            filter: {
                property: 'Recipient',
                text: { equals: user },
            },
        });

        const messages = response.results;
        if (messages.length === 0) {
            console.log(`No messages for ${user}.`);
        } else {
            console.log(`Messages (${messages.length}):`);
            messages.forEach((message, index) => {
                console.log(`${index + 1}: From: ${message.properties.Sender.title[0].text.content}`);
                console.log(`${message.properties.Message.rich_text[0].text.content}`);
                console.log(`Sent: ${message.properties.Timestamp.date.start}\n`);
            });
        }
    } catch (error) {
        console.error('Error reading messages:', error);
    }
}

module.exports = {readMessages};
