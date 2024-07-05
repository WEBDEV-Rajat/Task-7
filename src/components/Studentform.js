import React, {useState} from 'react';

const Studentform = (addGrade) => {
    const [studentName, setStudentName] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addGrade(studentName,subject,grade);
        setStudentName('');
        setSubject('');
        setGrade('');
    };
    
  return (
    <form onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Student Name'
      value={studentName}
      onChange = {(e) => setStudentName(e.target.value)}/>

      <input
      type='text'
      placeholder='Subject'
      value={subject}
      onChange={(e) => setSubject(e.target.value)}/>

      <input
      type='number' 
      placeholder='Grade'
      value={grade}
      onChange={(e) => setGrade(e.target.value)}/>

      <button type='submit'>Add Grade</button> 
    </form>
  );
};

export default Studentform
