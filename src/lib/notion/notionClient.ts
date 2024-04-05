// notionにアクセスするためのclientを定義
const { Client } = require("@notionhq/client");

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});