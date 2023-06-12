import accessImmutableObject from './2-nested';

const object = accessImmutableObject(
    {
        name: {
            first: 'Guillaume',
            last: 'Salva',
        },
    },
    ['name', 'first']
);

console.log(object);
