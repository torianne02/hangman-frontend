import React from 'react';
import { 
  Container, 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

const LogInForm = props => {
  return (
    <Container className="log-in">
      <Form onSubmit={ props.handleOnSubmit }>
        <Col>
          <FormGroup>
            <Label for="initials" hidden>Initials</Label>
            <Input type="text"
              name="initials"
              placeholder="Initials"
              onChange={ props.handleOnChange }
              value={ props.initialsValue } />
          </FormGroup>
          <FormGroup>
            <Label for="password" hidden>Password</Label>
            <Input type="text"
              name="password"
              placeholder="Password"
              onChange={ props.handleOnChange }
              value={ props.passwordValue } />            
          </FormGroup>
        </Col>
      </Form>
    </Container>
  )
}

export default LogInForm