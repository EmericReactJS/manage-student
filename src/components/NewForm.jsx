import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewForm = ({ alumni, submit, generic, handleStudent, insertStudent, handleForm }) => (
  <Form className="form">
    <FormGroup>
      <Label for="name">Nom, Prénom</Label>
      <Input
        type="text"
        name="name"
        id="name"
        defaultValue={generic.name}
        onChange={e => handleStudent({ ...generic, name: e.target.value })}
      />
    </FormGroup>
    <FormGroup>
      <Label for="age">Age</Label>
      <Input
        type="text"
        name="age"
        id="age"
        defaultValue={generic.age}
        onChange={e => handleStudent({ ...generic, age: e.target.value })}
      />
    </FormGroup>
    <FormGroup>
      <Label for="photo">Lien vers image</Label>
      <Input
        type="url"
        name="photo"
        id="photo"
        defaultValue={generic.photo}
        onChange={e => handleStudent({ ...generic, photo: e.target.value })}
      />
    </FormGroup>
    <FormGroup>
      <Input className="inputBtn" type="button" value="Valider" onClick={() => insertStudent(alumni, generic, submit, handleForm)}>Valider</Input>
      <Input className="inputBtn" type="button" value="Annuler" onClick={() => handleForm(false)}>Annuler</Input>
    </FormGroup>
  </Form>
);

export default NewForm;
