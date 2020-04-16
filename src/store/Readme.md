# Not using Vuex. Why

I have decided to not use Vuex because it is a nightmare to try to get it working with Typescript. I have followed many guides and done days of investigation to realize that it just doesn't work well. The closest I came was with vuex-module-decorators, but that has issues with unit testing and actions that return promises.

I was really surprised at how bad it is. I think this might be why so many people say it isn't worth using typescript with vue. But with the composition API, I can create store like objects that contain the data that I need. There really isn't a need for vuex.

## The approach

I am going to create use*() modules for each place that I would have thought about using a vuex store module. Really the only place that was going to happen was for the app level data of who the user is, what the club appearance is etc. I had assumed that each page would have its own data model and that data model wouldn't have to be part of the store.

Now with this approach, each of those data models can follow the same approach of a use module. I think this is going to work because the import mechanism essentially creates these singleton objects that are the code and any instantiated objects when a file is loaded. That is exactly what a store is - a singleton that holds data and has operations.

What I lose is the ability to do time travel debugging and to see what these stores hold. Although maybe I can do something that stuffs each of these modules into the store so that I can use the vuex dev tools. But that isn't a top priority.

Look at appStore for an example of how this is going to work. It is modeled after this github [example of a use component](
https://github.com/aaronksaunders/vue-composition-firebase-app-2/blob/master/src/use-login.js).
