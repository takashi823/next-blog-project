//  ブログ情報(title、author、createDate、file、ID)を取得
import { notion } from "./notion/notionClient";

interface NotionPostInfo {
  title: string;
  date: string;
  author: string;
}

/**
 * 指定されたページIDのブログ情報を取得する非同期関数。
 * 
 * @param {string} pageId 取得するブログのページのID。
 * @returns {Promise<NotionPostInfo>} 指定されたページIDのブログ情報を含むPromiseオブジェクト。
 */
export async function getBlogInfo(pageId: string): Promise<NotionPostInfo> {
  const response = await notion.pages.retrieve({ page_id: pageId });
  const pageInfo = response.properties;

  const title = pageInfo.title.title[0]?.plain_text;
  const date = pageInfo.createDate.date?.start;
  const author = pageInfo.author.select?.name;
  return { title, date, author };
}
