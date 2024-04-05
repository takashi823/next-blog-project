// ブログ一覧の表示
import Link from "next/link";
import Image from "next/image";
import { NotionPost } from "@/types/NotionPost";

type blogProps = {
  notionPosts: NotionPost[];
};

export function BlogList({ notionPosts }: blogProps) {
  return (
    <>
      <h1 className="text-md md:text-xl font-bold mb-6">ブログ一覧</h1>
      <div className="grid gap-8 p-3 md:p-10 pt-5 md:grid-cols-2 lg:grid-cols-3">
        {notionPosts.map((post, index) => (
          <div key={index}>
            <Link
              href={`/blog/${post.id}`}
              className="border rounded-lg p-10 shadow-lg transition-shadow hover:shadow-xl block"
            >
              <h2 className="text-sm sm:text-md md:text-lg font-semibold mb-2">
                {post.title}
              </h2>
              <p className="mb-2 text-gray-600">{post.date}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.types.map((type, typeIndex) => (
                    <span
                      key={typeIndex}
                      className="mr-2 bg-gray-800 px-2 py-1 rounded-2xl text-xs hidden sm:block text-white"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                {post.files.map((file, fileIndex) => (
                  <Image
                    key={fileIndex}
                    src={file}
                    alt="Post image"
                    width={960}
                    height={540}
                    className="w-full mb-2"
                  />
                ))}
              </div>
              <p>author: {post.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
