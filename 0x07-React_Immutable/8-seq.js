import { Seq } from 'immutable';

const _toUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const printBestStudents = (object) => {
  const sequence = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: _toUpperCase(student.firstName),
      lastName: _toUpperCase(student.lastName),
    }));

  console.log(sequence.toJS());
};

export default printBestStudents;
