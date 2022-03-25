import { Card, Space } from "antd";
import axios from "axios";
import { useState } from "react";

function Blogs() {
  let [blogs, setBlogs] = useState([]);
  function fetchPost() {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((result) => {
      setBlogs(result.data);
    });
  }

  fetchPost();
  return (
    <Space size={10} direction="vertical">
      {blogs.map((blog) => (
        <Card key={blog.id} title={blog.title}>
          {blog.body}
        </Card>
      ))}
      {/* <Card title={blogs[0].title}>
          {blogs[0].body}
      </Card> */}
    </Space>
  );
}

export default Blogs;
