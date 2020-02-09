// import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
};

const addBlogPost = () => {
    dispatch({ type: 'add_blogPost'});
};

// Basically we are just creating a React element here
// that takes another element "children" in it's props.
// export const BlogProvider = ({ children }) => {

//     const [blogPosts, dispatch] = useReducer(blogReducer, []);

//     const addBlogPost = () => {
//         dispatch({ type: 'add_blogPost'});
//     };

//     // Pass value to any nested component
//     return (
//         <BlogContext.Provider 
//             value={{ data: blogPosts, addBlogPost }}
//         >
//             {children}
//         </BlogContext.Provider>
//     );
// };

// export default BlogContext;

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost },
    []
);