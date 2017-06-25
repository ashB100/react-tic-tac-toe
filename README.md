This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


React has a few different kinds of components.

Your components tell React what you want to render - React will efficiently update and render just the right components
when your data changes.

A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.

The render method returns a React element which is a lightweight description of what to render.

JSX syntax makes it easier to write these structures.

<div /> becomes React.createElement('div') at build time.

You can put any JavaScript expression within braces inside JSX.

Each JSX element is a JavaScript object that you can store in a variable or pass around your program.


You pass data to components through props.

React components can have state by setting this.state in the constructor, which should be considered private to the component.

The components have a method called setState. Whenever this.setState is called, an update to the component is scheduled,
causing React to merge in the passed stateupdate and rerender the component along with its descendants.

When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.

Components that do not keep their own state and receive their value from the parent are called controlled components.


Functional components are components that only consist of a render method. Rather than define a class extending React.Component simply write a function that takes props and returns what should be rendered.
