# Tic Tac Toe Game

This game is built following the [Intro To React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html#easier-undoredo-and-time-travel) and the project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I have included a summary of my learning from this tutorial.

## Usage

* Clone the repository 
* Run yarn 
* Run yarn start 

## React Intro - what I learnt

### React Components
React has a few different kinds of components.

Your components tell React what you want to render - React will efficiently update and render just the right components when your data changes.

### Props
A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.

### render method
The render method returns a React element which is a lightweight description of what to render.

### JSX Syntax
JSX syntax makes it easier to write these structures.

<div /> becomes React.createElement('div') at build time.

You can put any JavaScript expression within braces inside JSX.

Each JSX element is a JavaScript object that you can store in a variable or pass around your program.

### this.state

React components can have state by setting this.state in the constructor, which should be considered private to the component.

### setState

The components have a method called setState. Whenever this.setState is called, an update to the component is scheduled,causing React to merge in the passed stateupdate and rerender the component along with its descendants.

### To aggregate data from multiple children or child components to communicate to each other keep state in the parent component and pass data to children as props

When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.

### Controlled components

Components that do not keep their own state and receive their value from the parent are called controlled components.

### Functional components

Functional components are components that only consist of a render method. Rather than define a class extending React.Component simply write a function that takes props and returns what should be rendered.
