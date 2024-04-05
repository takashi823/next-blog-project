// ブログ一覧ページ（ホーム）
import { getAllPosts } from "../lib/index";
import { BlogList } from "@/components/BlogList/BlogList";
import { NotionPost } from "@/types/NotionPost";

export const revalidate = 60;

export default async function Home() {
  const posts: NotionPost[] = await getAllPosts();

  return (
    <div className="flex flex-col p-8 lg:w-4/6 mx-auto items-center">
      <BlogList notionPosts={posts} />
    </div>
  );
}
