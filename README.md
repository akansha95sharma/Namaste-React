# Namaste React


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs 
- Tree Shaking - remove unused code
- Different dev and prod bundles


//JSX (transpiled before it reaches the JS) - PARCEL - Babel
// JSX =>Babel transpiles it to React.createElement => ReactElement-JS Object = HTMLElement(render)

// If a javascript function is returning a react element is called as functional component.
///Component Composition

- Default Export/Import
export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

#React Hooks
(Normal JS UTILITY FUNCTIONS)
-useState() - Superpowerful state variables 
-useEffect()

Whenever state variable changes react will rerender the component.

React is doing afficiant DOM Manipulation using virtual dom that's why react is good.
React find difference between two virtual dom and then update the UI.
React uses Reconciliation  Algoritham (React Fiber) React 16 new Algoritham is come into picture  ////acdlite/react-fiber-architecture

res-container   =>   res-container
    7 ResCards          3 ResCards
Virtual DOM is a representation of actual DOM.
Virtual dom is normal javascript object
<div><div></div></div>---Actual DOM

#react use Diff Algo

#Monolith:- 
MicroServices:-

# 2 types Routing in web apps
- Client side Routing
- Server Side Routing

#Link tag is enclose the anchor tag link tag does not visible in dom.
with link tag it doesn't refresh whole page that's why SPA works. 

When you hit the add button it dispatches an action and that action calls a function known as reducer to add that in cart.

To read data from store we use selector(subscribing to the store).

Add--->dispatch(action)--->reducer(fn())--->store(slice)--->selector(subscribed)---->update

#Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

#Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End testing - e2e testing


# Setting up testing in our app
- Install react testing library
- Installed jest
- Installed babel dependencies
- Configure Babel
- Configure parcel config file to disable default babel transpilation
- Jest configuration
Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom