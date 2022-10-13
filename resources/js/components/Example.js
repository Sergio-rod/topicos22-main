import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import View from 'react';
import { Button, Container, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
//import First from '-/components/first' para importar un componente
//ejemplo de componente, empieza con mayuscula

function BasicExample() {
  //                                 0    numerico 
  //                                []    arreglo
  const [formValue, setformValue] = useState({
    email: '',
    password: ''

  }) //usamos un objeto

  const [name, setName] = useState('')
  const [students, setStudents] = useState([])

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value })
    //setformValue({...formValue,email : 'asdasdasdas'});

    //concatena en el estado formvalue, los elementos de nuestro form.Control, siempre y cuando tenga lo que lo identifica "name="email, en el form.Control""
  }

  const handleSubmit = (e) => {

    if (e && e.preventDefault()) e.preventDefault();
    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post("http://localhost/topicos22-main/public/api/show_test",
      formData,
      {
        headers: {
          'Content-Type': 'multiparte/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {

      if (response.status == 200) {
        console.log(response.data)
        setStudents(response.data)



        //setName(response.data[0]['name'])
      }else console.log("Status", response.status)


      // history.pushState({
      //   pathname: "",
      //   state:{token:response.data.token}
      // }
      // )

    }).catch(error => {
      console.log(error)
    });

  }
  return (
    <Container>
      <Row>
        <Col md={10}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email"
                name="email" value={formValue.email} onChange={onChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={4}>

          {students.map((student)=>(
            <Card style={{ width: '18rem' }} key={student.id}> 
            
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{student.email}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          ))}
          
        </Col>
      </Row>

    </Container>
  );

}


export default BasicExample;

  //  if (document.getElementById('application')) {
  //        ReactDOM.render(<Example />, document.getElementById('application'));
  //    }

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
