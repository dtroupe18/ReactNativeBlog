import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  IndexScreen: IndexScreen,
}, {
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    // Wrap the whole in the blog provider
    <BlogProvider>
      <App />
    </BlogProvider> 
  )
};