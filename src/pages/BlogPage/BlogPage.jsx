import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";
import SingleBlog from "./SingleBlog";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <Helmet>
                <title>Fox | Blogs</title>
            </Helmet>
            <CoverPage title="Blogs Page" link="blog"></CoverPage>
            <div className="row mt-5 ms-lg-5">
                {
                    blogs.map(blog =>
                        <SingleBlog key={blog.id} blog={blog}></SingleBlog>
                    )
                }
            </div>
        </div>
    );
};

export default BlogPage;