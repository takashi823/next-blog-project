//  ブログの記事（コンテンツ）を取得
import { notion } from "./notion/notionClient";
import { NotionToMarkdown } from "notion-to-md";

const n2m = new NotionToMarkdown({ notionClient: notion });

/**
 * 指定されたページIDのブログコンテンツを取得する非同期関数。
 * 
 * @param {string} pageId 取得するブログのコンテンツのページのID。
 * @returns {Promise<any>} 指定されたページIDのブログコンテンツを含むPromiseオブジェクト。
 */
export async function getBlogContents(pageId: string) {
  const markdownBlocks = await n2m.pageToMarkdown(pageId, 2);

  return markdownBlocks;
}