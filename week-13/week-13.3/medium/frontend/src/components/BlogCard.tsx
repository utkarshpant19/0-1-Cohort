import { Avatar } from "./Avatar";

interface BlogCardProps {
  authorName: string;
  publishedDate: string;
  title: string;
  description: string;
}

export const BlogCard = ({
  authorName,
  publishedDate,
  title,
  description,
}: BlogCardProps) => {
  return (
    <div className="w-full my-6">
      <section className="max-w-1/2 mx-auto my-3">
        <article className="m-3">
          <div className="author flex gap-1 items-center">
            <Avatar authorName={authorName} size={6} textSize="xs" />

            <label className="font-normal">{authorName} .</label>
            <span className="text-gray-500 text-sm">{publishedDate}</span>
          </div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p>
            {description.length > 200
              ? description.slice(0, 200) + " ..."
              : description}
          </p>
        </article>

        <div className="description m-3">
          <span>{Math.ceil(description.length / 100)} mins read</span>
        </div>

        <div className="bg-slate-200 h-[1px] mt-4"></div>
      </section>
    </div>
  );
};
