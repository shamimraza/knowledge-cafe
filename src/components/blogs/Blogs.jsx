import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleButton, handleReadTime }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3 items-center mx-auto">
            <h2>blogs {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id}
                        handleButton={handleButton}
                        handleReadTime={handleReadTime}
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleButton: PropTypes.func,
    handleReadTime: PropTypes.func

}

export default Blogs;