import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [blogs]);

  async function fetchBlogs() {
    // axios
    //   .get(`${BACKEND_URL}/api/v1/blog/bulk `, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*", // Allow requests from any origin
    //       "Content-Type": "application/json",
    //       Authorization: localStorage.getItem("authToken"),
    //     },

    //   })
    //   .then((res) => {
    //     console.log("Blogs ", res);
    //     setBlogs(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log(err));

    fetch(`${BACKEND_URL}/api/v1/blog/bulk`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("authToken") ?? "",
      },
    })
      .then(async (res) => {
        const blogs = await res.json();
        setLoading(false);
        console.log("Blogs ", blogs);

        console.log(setBlogs(blogs));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return {
    loading,
    blogs,
  };
};

export interface BlogsReturnType {
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blogs: any[];
}
