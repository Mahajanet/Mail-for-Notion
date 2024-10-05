require('dotenv').config();
const { Client } = require('@notionhq/client');

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_KEY });

module.exports = { notion };
