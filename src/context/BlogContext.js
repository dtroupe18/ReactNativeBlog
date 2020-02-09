import React, {useState } from 'react';

const BlogContext = React.createContext();

// Basically we are just creating a React element here
// that takes another element "children" in it's props.
export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([ ...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    }

    // Pass value to any nested component
    return (
        <BlogContext.Provider 
            value={{ data: blogPosts, addBlogPost: addBlogPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;