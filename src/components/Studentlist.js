import React from 'react'

export const Studentlist = ({students, getGrade, averageGrade}) => {
  return (
    <div>
      {students.map((student) => {
        <div key={student.id} className='card'>
            <h2>{student.name}</h2>
            <p>{student.subject}</p>
            <p>Grade : {student.grade}</p>
          <button onClick={() => getGrade(student.id)}>Get Grade</button>
          <button onClick={() => averageGrade(student.id)}>Get Average Grade</button>
        </div>
      })}
    </div>
  );
};


