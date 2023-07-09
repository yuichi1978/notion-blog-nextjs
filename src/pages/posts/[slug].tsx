import { getSinglePost, getAllPosts } from "../../../lib/notionAPI";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vsDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from "next/link";

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const Post = ({ post }) => {
  return (
    <section className="container lg:px-4 px-5 h-screen lg:w-2/4 mx-auto mt-20">
      <h2 className="w-full text-2xl font-medium">{post.metadata.title}</h2>
      <div className="border-b-2 w-1/3 mt-1 border-teal-200"></div>
      <span className="text-gray-500">{post.metadata.date}</span>
      <br />
      {post.metadata.tags.map((tag: string, index: number) => (
        <p className="text-white bg-teal-300 rounded-xl font-medium mt-2 px-2 inline-block mr-2" key={index}>
          <Link href={`/posts/tag/${tag}/page/1`}>
            {tag}
          </Link>
        </p>
      ))}
      <div className="mt-10 font-medium">
        <ReactMarkdown 
          children={post.markdown.parent}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={vsDark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        ></ReactMarkdown>
        <Link href="/">
          <button className="shadow-lg rounded-full bg-teal-300 mt-5 px-4 py-3 text-white hover:shadow-sm hover:translate-y-0.5 transform transition">ホームに戻る</button>
        </Link>
      </div>
    </section>
  );
}

export default Post;