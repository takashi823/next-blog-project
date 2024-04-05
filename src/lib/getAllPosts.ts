// 投稿されているブログを全て取得する関数
import { notion } from "./notion/notionClient";
import { NotionPost } from "@/types/NotionPost";


/**
 * Notionテーブル上のすべての投稿を取得する非同期関数。
 * 
 * @returns {Promise<NotionPost[]>} Notionテーブル上のすべての投稿の配列を含むPromiseオブジェクト。
 */
export async function getAllPosts(): Promise<NotionPost[]> {
  
  // notionClientを使用し、notionのテーブルからデータを取得
  // https://developers.notion.com/reference/post-database-query-sort
  const response = await notion.databases.query({
    database_id: process.env.TABLE_ID,
    sorts: [
      {
        //createDateカラムの値で降順に並べる
        property: "createDate",
        direction: "descending",
      },
    ],
  });
  const posts = response.results;
  const postsProperties = posts.map((post: any) => {

    // 各レコードの値を取得
    // jsonデータの形式は、下記参考
    // https://developers.notion.com/reference/page-property-values
    const id = post.id;
    const title = post.properties.title.title[0]?.plain_text;
    const date = post.properties.createDate.date?.start;
    const types = post.properties.types.multi_select.map(
      (item: any) => item.name
    );
    const files = post.properties.file.files.map((file: any) => file.file.url);
    const author = post.properties.author.select?.name;
    return { id, title, date, types, files, author };
  });
  return postsProperties;
}
