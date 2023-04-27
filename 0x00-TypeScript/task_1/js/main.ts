interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface IStudentClass {
    firstName: string;
    lastName: string;
}

interface IStudent {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements IStudent {
    constructor(private readonly firstName: string, private readonly lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const student: IStudent = new StudentClass('Élodie', 'Riou');
console.log(student);
console.log(student.workOnHomework());
console.log(student.displayName());
