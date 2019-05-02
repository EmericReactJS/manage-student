import React, { useState } from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { MdAdd, MdEdit, MdClose } from 'react-icons/md';

const ListStudents = ({
  showForm,
  alumni,
  showModifyForm,
  handleModify,
  handleIndex,
  handleDelete
}) => {
  const [rerender, setRerender] = useState(false);

  return (
    <Row className="studentsRow">
      <Col className="addCardCol align-self-center text-center" xs={6} lg={4}>
        <MdAdd className="addCard" size={100} onClick={() => showForm(true)} />
      </Col>
      {alumni.map((alumnus, idx) => (
        <Col className="studentColChild p-3" key={alumnus.name} xs={6} lg={4}>
          <Card className="mainCard text-center">
            <MdEdit
              size={30}
              className="editBtn"
              onClick={() => {
                showModifyForm(true);
                handleModify(alumnus);
                handleIndex(idx);
              }}
            />
            <MdClose
              size={30}
              className="supprBtn"
              onClick={() => {
                handleDelete(idx);
                handleIndex(idx);
                setRerender(!rerender);
              }}
            />
            <CardImg className="cardImg" src={alumnus.photo} />
            <CardTitle>{alumnus.name}</CardTitle>
            <CardText>{alumnus.age} ans</CardText>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ListStudents;
