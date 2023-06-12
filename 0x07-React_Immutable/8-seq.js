import { Seq } from 'immutable';

const printBestStudents = (object) => {
    const sequence = Seq(object);
    const getStudents = sequence.filter((student) => student.score > 70);
    const students = getStudents.toJS();

    const _toUpperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    Object.keys(students).map((student) => {
        students[student].firstName = _toUpperCase(students[student].firstName);
        students[student].lastName = _toUpperCase(students[student].lastName);
        return students[student];
    });

    console.log(students);
}

export default printBestStudents;
