# Jotai DI

In the ongoing war between frontend frameworks, one of the most contentious topics is project organization. React developers feel unnecessarily constrained and boxed-in when working in Angular, and Angular developers feel that React leaves too much up to the developer; thereby increasing overhead and slowing development time. Both have some truth to them, so in this article I'll try and find common ground where both sides can meet in peace. Clearly, the opinionated organizational system of Angular has many benefits, so why not take a page out of that book and see what can be done when we bring it into the world of React.

### Goals

Dependency injection is at the core of enabling Angular's strict organizational style, as it gives us a natural way to break code into logical units. Building a whole module system is a bit out of the scope of this article, but let's set a goal to create a system that allows for clear boundaries between four layers:
API <-> Adapter <-> State <-> Service <-> View

This should look somewhat familiar, but here's a quick rundown of what each should do:
- API: Logic for sending and receiving network requests
- Adapter: Convert data to and from it's server-side representation
- State: Store data in its various shapes and sizes
- Service: Provide an api to the view layer for working with data in state
- View: Render UI using components and functionality/data from services

### Dependency Injection in React

In the context of React, what does dependency injection even look like? We're not using class-based components so constructor injection is out of the picture. Passing dependencies as props sounds like an all-around bad idea, so that leaves us with one option: Hooks.

```
function ExampleComponent() {
  const service = useService(ExampleService);
  const data = service.exampleData;
  return <div>{data}</div>;
}
```

The implementation of `useService` isn't altogether important at the moment, but it does beg the question: What is a service in React? Asynchronous updates to the View layer are one of the main functions of the frontend framework, so our service must be tied into some kind of state that forces a rerender when it changes. This is exactly what Jotai allows us to do!

```
const ExampleService = createService(get => ({
  exampleData: get(exampleDataAtom),
}))
```

Every time we call `get` (which comes from Jotai), we are adding a dependency to our service; which means that if the dependency updates, so will our service, and so will any other services or components that depend on it. One important caveat here is that we can quite easily create performance issues by unwisely adding too many dependencies or adding methods that depend on non-overlapping parts of state, therefore forcing unnecessary re-renders. That sounds a bit like building a bridge and not putting any guardrails on it, but let me remind you that the whole purpose of this exercise is to force better organization into our React project. Structure your code well, or suffer the consequences of unoptimized re-renders, muahaha!

### More Layers!

So far we've looked at the first two layers, so let's flesh it out just to have a clear picture of everything.

State:
`const exampleDataAtom = atom(null); // Nothing there initially`

Adaptor:
`const exampleAdator(exampleServerData) { ... } // This is just some function, whatever. Use your imagination`

API:
``
