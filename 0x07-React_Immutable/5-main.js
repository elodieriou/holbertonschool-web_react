import { concatElements, mergeElements } from './5-merge';

const page1 = [1, 2, 3];
const page2 = [4, 5, 6];
console.log(concatElements(page1, page2).toJS());

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeElements(obj1, obj2).toJS());
