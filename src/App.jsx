import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import Mainnav from './components/Mainnav';
import Students from './ressources/students';
import NewForm from './components/NewForm';
import ListStudents from './components/ListStudents';

const App = () => {
  const [students, setStudents] = useState(Students);
  const [formToggle, showForm] = useState(false);
  const [modifyFormToggle, showModifyForm] = useState(false);
  const [newStudent, setStudent] = useState({ name: '', age: '', photo: '' });
  const [modifyStudent, setModifyStudent] = useState();
  const [indexStudent, setIndex] = useState();

  useEffect(() => {
    setStudent({ name: '', age: '', photo: '' });
  }, [formToggle]);

  function insertNewStudent(studentsArr, newStudents, submit, show) {
    studentsArr.unshift(newStudents);
    show(false);
    return submit(studentsArr);
  }

  function insertModifyStudent(studentsArr, modifiedStudent, submit, show) {
    setStudents(() => (studentsArr[indexStudent] = modifiedStudent));
    show(false);
    return submit(studentsArr);
  }

  function deleteStudent(index) {
    students.splice(index, 1);
    return students;
  }

  console.log(students);

  return (
    <Row className="mainContainer">
      <Col className="maninNavCol p-0" xs={3}>
        <Mainnav />
      </Col>
      <Col className={formToggle || modifyFormToggle ? 'fadedStudentCol' : 'studentCol'} xs={9}>
        <ListStudents
          alumni={students}
          showForm={showForm}
          showModifyForm={showModifyForm}
          handleModify={setModifyStudent}
          handleIndex={setIndex}
          handleDelete={deleteStudent}
        />
      </Col>
      {formToggle || modifyFormToggle ? (
        <Col className="toggledFormCol" xs={3}>
          <NewForm
            alumni={students}
            submit={setStudents}
            generic={modifyFormToggle ? modifyStudent : newStudent}
            handleStudent={modifyFormToggle ? setModifyStudent : setStudent}
            insertStudent={modifyFormToggle ? insertModifyStudent : insertNewStudent}
            handleForm={modifyFormToggle ? showModifyForm : showForm}
          />
        </Col>
      ) : <Col className="nonToggledFormCol" />}
    </Row>
  );
};

export default App;
