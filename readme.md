we are going to use yarn to create app and vite to create
(yarn is a package manager similar to npm)
create folders client and server

## client setup
inside client folder

```
yarn create vite
```

project name as .
this will create everything inside our client folder
react as library
typescript as variant

now 

```
yarn
```

```
yarn dev
```
will run project on our local host

now there will be bunch of files in client directory,our whole app will be inside main.tsx and App.tsx

for user management and user authentication we will use clerk

create a project in clerk, choose react


clear whole App.tsx
```
import { useState } from 'react'


function App() {
  

  return <></>;
}

export default App
```

in our main.tsx we will add clerk stuff but to add we need to install package inside client

```
yarn add @clerk/cleark-react
```

we connect our code to clerk with the key which was generated with the clerk project
we need to create .env.local folder in client dir and add key

now in main.tsx import clerk

we can wrap all component that want to use clerk with <ClerkProvider></ClerkProvider>
we want whole app to use so we will wrap it

we are using vite so we need to import publishable key like this 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

make sure to provide this variable in component

we dont wanna run app if there is no key so we will add condition in if statement

now we will start working on App.tsx

we have multi routes in our app so we will start by defining routes with react-router-dom 

in client folder

```
yarn add react-router-dom
```

import in App.tsx

to create routes we will use <Router></Router> component

now create folder pages in client/src
for each page create individual page
auth, dashboard,
and inside each create index.tsx which will represent entry point to each route

now in auth/index.tsx import clerk 

there will be 2 states our app 1 signedout and other signed in

with help of "modal" the button will not redirect to new page instead it will show popup

<UserButton /> instead of <Navigate to="/"> for quick test

after adding signin page fuctionality try signin

to know if we are signed in we can inspect element go to application section we can see guest session id , clerk db jwt also bunch of stuff in cookies

the users will show up in clerk


Now we will work on dashboard, we will seperate this page in 2 different components 
1 financial record form - menu where we can add track expense or new income 
2 financial record list - which will contain all the things you have, edit them

to access name of the user inside dashboard from clerk we use hooks useUser

user? (? is for in case null)

these components will be in their seperate file in dashboard dir

now build database on atlas

get username and password
use mongodb for vscode




## server

in server/src dir create index.ts keep the password and username

in server dir

```
yarn init -y
yarn add express @types/express mongoose nodemon ts-node typescript
```
 //for apis

also install TSC package to setup typescript

```
yarn tsc --init
```

uncomment these 3 from server/tsconfig.json

    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node10", 
    "outDir": "./build",   

as in build folder we have javascript and in src we use typescript

in package.json add scripts
"scripts": {
    "start": "node ./build/index.ts",  
    "build": "tsc -p .",
    "dev": "nodemon ./src/index.ts"
  },

// yarn start
// yarn dev


test if mongodb is connected or not

after that create foldere schema and routes in src

using express we can create a post/get request in indext.ts using app.post or app.get but if we wanna create the endpoints in routes folder

in index.ts we create a middleware app.use() where we put route defination of how we want this endpoint to be reached

if we wanna define any specific route maybe get/post req we can make an extension to the middleware endpoint, by first writing middleware endpoint and then whatever we wanna use from routes

after writing code for routes , schema and index.ts go to client/src/pages/financial-record-form.tsx

we want to organise this project in a way such that it is scalable ready , we do that by creating context folder and personal hook for that context that would share all of the different info related to the records

create folder client/src/contexts
inside create file financial-record-context.tsx where all states and function that alter state exist

inside server install cors package

```
yarn add cors
yarn add @types/cors
```

now for financial-recored-list.tsx we will be using react table library