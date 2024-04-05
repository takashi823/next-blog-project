// ブログページ
import { getBlogContents, getBlogInfo } from "../../../lib/index";
import { BlogContent } from "@/components/BLogContent/BlogContent";

export default async function Page({ params }: { params: { id: string } }) {
  const pageContents: any = await getBlogContents(params.id);
  const pageInfo = await getBlogInfo(params.id);

  return (
    <div className="container mx-auto p-20">
      <BlogContent pageContents={pageContents} pageInfo={pageInfo} />
    </div>
  );
}
