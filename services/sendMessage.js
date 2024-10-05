const { notion } = require('../config/notionClient');
const { promptUser } = require('../utils/promptUser');

// Send a message to to add a new entry to existing database 
async function sendMessage() {
    const sender = promptUser('Sender: $ ');
    const recipient = promptUser('Recipient: $ ');
    const message = promptUser('Message: $ ');

    // Add a new entry (page) to the existing Notion database
    try {
        await notion.pages.create({
            parent: { database_id: process.env.NOTION_PAGE_ID },
            properties: {
                // 'Title' field for the main name of the entry
                'Message': {
                    title: [
                        {
                            type: 'text',
                            text: {
                                content: message
                            }
                        }
                    ] 
                },
                // Use 'rich_text' for Sender
                'Sender': {
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: sender
                            }
                        }
                    ]
                },
                // Use 'rich_text' for Recipient
                'Recipient': {
                    rich_text: [
                        {
                            type: 'text',
                            text: {
                                content: recipient
                            }
                        }
                    ]
                },
                'Timestamp': {
                    date: {
                        start: new Date().toISOString()
                    }
                }
            },
        });
        console.log('Message sent successfully!');
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

module.exports = {sendMessage};
