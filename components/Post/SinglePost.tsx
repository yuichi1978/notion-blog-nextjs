import Link from "next/link";

type Props = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  isPagenationPage: boolean;
};

const SinglePost = (props: Props) => {
  const { title, description, date, tags, slug, isPagenationPage } = props;

  return (
    <>
    {isPagenationPage ? (
      <section className="bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-2 transition-all duration-300">
        <div className="flex items-center">
          <h2 className="text-white text-2xl font-medium mb-2">
            <Link href={`/posts/${slug}`}>
              {title}
            </Link>
          </h2>
          <div className="text-white ml-2">{date}</div>
        </div>
        {tags.map((tag, index: number) => (
          <Link href={`/posts/tag/${tag}/page/1`}>
            <span className="text-white bg-gray-500 rounded-xl px-2 pb-1 text-xs md:text-lg font-medium mr-1" key={index}>
              {tag}
            </span>
          </Link>
        ))}
        <p className="text-gray-400">{description}</p>
      </section>
      ) : (
        <section className="lg:w-1/2 bg-teal-300 mb-8 mx-auto rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-2 transition-all duration-300">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-2xl font-medium mb-2">
              <Link href={`/posts/${slug}`}>
                {title}
              </Link>
            </h2>
            <div className="text-white">{date}</div>
          </div>
          {tags.map((tag: string, index: number) => (
            <Link href={`/posts/tag/${tag}/page/1`}>
              <span className="text-white bg-gray-500 rounded-xl px-2 pb-1 text-xs md:text-lg font-medium mr-1" key={index}>
                {tag}
              </span>
            </Link>
          ))}
          <p className="text-gray-400">{description}</p>
        </section>
      )}
    </>
  );
};

export default SinglePost;