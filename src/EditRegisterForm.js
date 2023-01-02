import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { BsPersonLinesFill, BsFillEnvelopeFill, BsTelephoneFill, BsHouseFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';

function Edit(props) {
    const navigate = useNavigate()
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <h2>EDIT REGISTER</h2>
            <div className="editform">
                <div className="userform">
                    <Form onSubmit={
                        event => {
                            event.preventDefault();
                            if (!user.fname || !user.lname || !user.mail || !user.phone || !user.address1 || !user.address2
                                || !user.city || !user.state || !user.country || !user.zipcode) return;
                            props.updateUser(user.id, user);
                            navigate('/form')
                        }
                    }>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsPersonLinesFill /></InputGroup.Text>
                            <Form.Control
                                placeholder="First Name"
                                type="text"
                                minLength={5}
                                required
                                onChange={handleInputChange} name="fname" value={user.fname} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsPersonLinesFill /></InputGroup.Text>
                            <Form.Control
                                placeholder="Last Name"
                                type="text"
                                minLength={5}
                                required
                                onChange={handleInputChange} name="lname" value={user.lname} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsFillEnvelopeFill /></InputGroup.Text>
                            <Form.Control
                                placeholder="E-mail"
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                onChange={handleInputChange} name="mail" value={user.mail} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsTelephoneFill /></InputGroup.Text>
                            <Form.Control
                                 placeholder="Enter a number with country code"
                                 pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                                onChange={handleInputChange} name="phone" value={user.phone} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsHouseFill /></InputGroup.Text>
                            <Form.Control
                                placeholder="Address-1"
                                type="text"
                                onChange={handleInputChange} name="address1" value={user.address1} />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"><BsHouseFill /></InputGroup.Text>
                            <Form.Control
                                placeholder="Address-2 (Optional)"
                                type="text"
                                onChange={handleInputChange} name="address2" value={user.address2} />
                        </InputGroup>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Control placeholder="City" onChange={handleInputChange} name="city" value={user.city} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="State" onChange={handleInputChange} name="state" value={user.state} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Country" onChange={handleInputChange} name="country" value={user.country} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control placeholder="Zip code" onChange={handleInputChange} name="zipcode" value={user.zipcode} />
                            </Form.Group>
                        </Row>
                        <Button variant="success" type="submit">Edit</Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Edit;