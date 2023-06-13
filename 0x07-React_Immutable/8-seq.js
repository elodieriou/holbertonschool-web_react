import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const sequence = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(sequence.toJS());
};

export default printBestStudents;
