import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
    const normalizedData = normalize(data, [course]);
    return normalizedData.entities.courses;
};
