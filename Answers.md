1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.filter, Array.map, and Object.assign. Object.create allows you to create a new object while using an existing object as the prototype.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are called from within our app, their functionality is handled by reducers, and the result is posted to the store. The store handles the state of the entire application, instead of each component having its own state, thereby being a single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, Component state is confined to the scope of its own component and anywhere it is passed as props. It's generally advantageous to use Component state in forms and Application state in situations where the state's properties need to be passed between components.

1.  What is middleware?

A middle-man, a traffic control device, that stands between the redux store and the reducers/actions. Capable of redirecting/dispatching different actions based on dev-defined parameters.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

In Redux, reducers are synchronous by default. Thunk is a middleware that provides the ability to handle async operations in our action creators. A thunk is a function that returns another function, without side effects. This allows us to return functions containing our action creators and thus delay their calling simulating/jury-rigging an asynchronous style of operation. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect
