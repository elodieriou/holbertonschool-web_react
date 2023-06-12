import { is } from 'immutable';

const areMapsEqual = (map1, map2) => {
    return is(map1, map2);
};

export default areMapsEqual;
