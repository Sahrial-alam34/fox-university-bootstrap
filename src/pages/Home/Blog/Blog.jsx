
import { useEffect, useState } from 'react';
import './Blog.css'
import SingleBlog from '../../BlogPage/SingleBlog';
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div className="mb-5  text-center ">
                <h1 className='mb-5 mt-5'>Recent Blog</h1>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary <br />  regelialia. It is a paradisematic country</p>
            </div>
            <div className="row  justify-content-between mb-5">
                <div className="row mt-5 ms-lg-5">
                    {
                        blogs.slice(0,3).map(blog =>
                            <SingleBlog key={blog.id} blog={blog}></SingleBlog>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;