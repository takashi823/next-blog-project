// ブログページの表示コンテンツ
import ReactMarkdown from "react-markdown";

import { BackButton } from "../BackButton";
import { NotionPostInfo } from "@/types/NotionPostInfo";

type Props = {
  pageInfo: NotionPostInfo;
  pageContents: any;
};

export function BlogContent({ pageInfo, pageContents }: Props) {
  return (
    <>
      <BackButton />
      <h1 className="text-center text-5xl font-bold">{pageInfo.title}</h1>
      <div className="text-right px-20 text-gray-500">
        <p>{pageInfo.date}</p>
      </div>
      <div className="text-right px-20 text-gray-500">
        <p>{pageInfo.author}</p>
      </div>
      <div className="py-10 p-10 px-20">
        {pageContents.map((content: any, index: any) => {
          const formattedMarkdown = content.parent.replace(/\n/g, "  \n");
          return (
            <div className="pt-3 list-decimal" key={index}>
              <ReactMarkdown components={MarkdownComponents}>
                {formattedMarkdown}
              </ReactMarkdown>
            </div>
          );
        })}
      </div>
    </>
  );
}

type DivProps = React.ComponentProps<"div">;
type H1Props = React.ComponentProps<"h1">;
type H2Props = React.ComponentProps<"h2">;

const MarkdownComponents = {
  div: ({ ...props }: DivProps) => (
    <div className="list-decimal list-inside pb-2" {...props} />
  ),
  h1: ({ ...props }: H1Props) => <h1 className="text-3xl" {...props} />,
  h2: ({ ...props }: H2Props) => <h2 className="text-2xl" {...props} />,
};
