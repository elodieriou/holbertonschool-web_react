interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Holberton',
    lastName: 'School',
    age: 2,
    location: 'France',
};

const student2: Student = {
    firstName: 'Élodie',
    lastName: 'Riou',
    age: 32,
    location: 'France',
};

const studentsList : Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
