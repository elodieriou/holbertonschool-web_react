import { getListObject, addElementToList } from './3-list';

const array = ['holberton', 'school', 'hello'];
const element = 'world';

const listOfArray = getListObject(array);
console.log(listOfArray);
console.log(addElementToList(listOfArray, element));
