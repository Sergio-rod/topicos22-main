import React from 'react';
import ReactDOM from 'react-dom';
import View from 'react';
import {Button,Container,Form,Row,Col,Card} from 'react-bootstrap';
//import First from '-/components/first' para importar un componente
//ejemplo de componente, empieza con mayuscula
function First(){
    //cuerpo del componente
    return(
    //regresa los elementos dle componente
        <View>
            <Text>

            </Text>



        </View>

    )
}













function Example() {
    return (
        <Container>
            <Row>
            <Col md={10}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

        </Col>
        </Row>
        
        </Container>
      );
}

export default Example;

  // if (document.getElementById('application')) {
  //       ReactDOM.render(<Example />, document.getElementById('application'));
  //   }
