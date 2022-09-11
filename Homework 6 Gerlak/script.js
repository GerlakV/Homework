const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const calcSumMark = (marksArray) => marksArray.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);

const calcAverageMark = (array) => calcSumMark(array)/array.length;

const calculateStudentAverageMark = (studentInfo) => calcAverageMark (studentInfo.marks);

const calculateGroupAverageMark = (groupInfo) => {
    const allMarks = groupInfo.map(({marks}) => marks).flat();
    return calcAverageMark (allMarks)
};

calculateStudentAverageMark(students[2]);
calculateGroupAverageMark(students);