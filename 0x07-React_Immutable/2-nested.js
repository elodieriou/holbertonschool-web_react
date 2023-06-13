import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const mappedObject = fromJS(object);
  return mappedObject.getIn(array, undefined);
};

export default accessImmutableObject;
