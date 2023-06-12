# 0x07. React Immutable

## Learning Objectives

```text
Immutable objects. Who, what, when, where, and why?
How to use the Immutable.js library to bring immutability to Javascript
The differences between List and Map
How to use Merge, Concat, and Deep Merging
What a lazy Seq is
```

## Ressources
[immutable.js - Github](https://github.com/immutable-js/immutable-js)

[immutable.js - Docs](https://immutable-js.com/docs/v4.3.0)

## Provided files

`babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

`jsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

`package.json`
```json
{
  "type": "module",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```

## Tasks
#### 0. Converting into an Immutable object using fromJS

Copy the necessary config files specified in the description to the root directory of the project and execute npm install.
   
Add `"@babel/node": "^7.13.10",` in your `package.json`. It is necessary to transpile the code using Babel.

Optional : add the command `"build": "npx babel-node"`.

In a file named 0-fromjs.js, create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library

Example:
```js
{
fear: true,
smell: -1033575916.9145899,
wall: false,
thing: -914767132
}
```

Should return using the commande `npm run build 0-main.js` (if you add the optional command above) or `npx babel-node 0-main.js`.
```js
Map {
size: 4,
_root: ArrayMapNode {
ownerID: OwnerID {},
entries: [ [Array], [Array], [Array], [Array] ]
},
__ownerID: undefined,
__hash: undefined,
__altered: false
}
```

To check `eslint` using the command `npm run check-lint`, you must :
- modify the command `"check-lint": "lint [0-9]*.js",` by `"check-lint": "eslint [0-9]*.js"`,
- run the command `npx eslint --init`, that will guide you through a series of prompts to set up an ESLint configuration file. Choose the desired options.

#### 1. Converting into Immutable using Map

In 1-map.js, modify the function getImmutableObject using Map from Immutable.js

Example:
```js
{
fear: true,
smell: -1033575916.9145899,
wall: false,
thing: -914767132
}
```

Should return:
```js
Map {
size: 4,
_root: ArrayMapNode {
ownerID: OwnerID {},
entries: [ [Array], [Array], [Array], [Array] ]
},
__ownerID: undefined,
__hash: undefined,
__altered: false
}
```

#### 2. Accessing nested elements

Given the function below, edit it to return the value of the object at the defined path
```js
export default function accessImmutableObject(object, array) {
}
```

- The first argument is a plain object
- The second one is an array containing a list of a path to some key in the object
- The function should return the value of the object at the defined path

Example:
```js
accessImmutableObject({
name: {
first: "Guillaume"
last: "Salva"
}
}, ['name', 'first'])
```

Should return 

```text
Guillaume
```

Requirements:

The function should either return undefined, a string, or a Map.

#### 3. List and push

In file 3-list.js, create these 2 functions:
```js
export function getListObject(array) {
}

export function addElementToList(list, element) {
}
```

- getListObject accepts an array as parameter and converts it into an immutable List using the Immutable.js library
- addElementToList accepts two arguments: first one is a List and second one is a string
  - append the string to the list and return the list

#### 4. Chained mutations

Create & export a constant named map. It should create an Immutable Map with the following object:
```js
{
1: 'Liam',
2: 'Noah',
3: 'Elijah',
4: 'Oliver',
5: 'Jacob',
6: 'Lucas',
}
```

Export a second constant named map2. It should use the first map and modify the following values:

- Modify the value for the index 2, to Benjamin
-  the value for the index 4, to Oliver

Requirements:

You can’t use any other variable than map and map2

#### 5. Merge & concat

Create a function named concatElements

- It accepts two arguments page1 and page2. Both are arrays
- It should return a List containing the values of the two pages

Create a function named mergeElements

- It accepts two arguments page1 and page2. Both are objects
- It should return a List containing the values of the two pages
- If two values are the same, page2 values should be used.

Requirements:

Use list and map from the Immutable.js library

#### 6. Nested merge

Create a function named mergeDeeplyElements

- It should accept two arguments, page1 and page2. Both are objects
- It should return a List containing the values of the two pages
- If two values are the same, they should combine each other
Example:
```js
const page1 = {
    'user-1': {
        id: 1,
        name: 'test',
        likes: {
            1: {
                uid: 1234,
            }
        }
    },
};

const page2 = {
   'user-1': {
      likes: {
         2: {
            uid: 134,
         }
      }
   },
};

mergeDeeplyElements(page1, page2).toJS();
```

Should return:
```js
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
      2: {
        uid: 134,
      }
    }
  },
};
```

Requirements : 

use Map from immutable.js

#### 7. Equality

Create a function named areMapsEqual

- It accepts two arguments map1 and map2. Both are Immutable.js Maps
- It should return true if the Maps are equal
Example:
```js
const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

areMapsEqual(map1, map2);
```

Should return :
```js
true
```
Requirements:

Use is from the immutable.js library

#### 8. Lazy Seq
Create a function named printBestStudents:

- It accepts one object as argument. The object is formed with the following structure:

```js
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};
```

- Calling the function should filter any student with a score < 70 and print to the console the first name and the last name with the first letter capitalized:
```js
{
"1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
}
```
Requirements:

Uses seq from immutable.js

**Copyright © 2023 Holberton Inc, All rights reserved.**
