import Link from "next/link";

type Props = {
  tags: string[];
}

const Tag = (props: Props) => {
  const { tags } = props;

  return (
    <div className="mx-4">
      <section className="container lg:w-1/2 mb-8 mx-auto bg-gray-200 rounded-md p-5 shadow-2xl hover:shadow-none hover:translate-y-1 duration-300 transition-all">
        <div className="font-medium mb-4 text-center">タグ検索</div>
        <div className="flex justify-evenly items-center flex-wrap">
          {tags.map((tag: string, index: number ) => (
            <span className="cursor-pointer mb-5 px-2 pb-2 py-2 rounded-xl bg-gray-500 text-white inline-block w-2/5 text-xs md:text-base text-center">
              <Link href={`/posts/tag/${tag}/page/1`} key={index}>
                  {tag}
              </Link>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tag;