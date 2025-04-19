import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { Loader } from "../components/Loader";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  console.log("Blogs ", blogs);

  return loading === true ? (
    <Loader />
  ) : (
    <>
      <AppBar />
      <BlogCard
        authorName="Utkarsh Pant"
        publishedDate="Dec 3,2024"
        title="Google has finally dethroned ChatGPT"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"
      />
      <BlogCard
        authorName="Utkarsh Pant"
        publishedDate="Dec 3,2024"
        title="Google has finally dethroned ChatGPT"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"
      />
      <BlogCard
        authorName="Utkarsh Pant"
        publishedDate="Dec 3,2024"
        title="Google has finally dethroned ChatGPT"
        description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"
      />
    </>
  );
};
