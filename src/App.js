import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import FormPage from "./Form";
import Add from "./AddRegisterForm";
import Edit from "./EditRegisterForm";
import Message from "./message";

function App() {
  const profile = [
    {
      id: 1, fname: "Gokul", lname: "Ranjith", mail: "sree333@gmail.com", phone: "90804-xxxxx", address1: "Kolathur",
      address2: "Mettur", city: "Salem", state: "Tamilnadu", country: "India", zipcode: "636345"
    },
    {
      id: 2, fname: "Mythili", lname: "Gokul", mail: "mythili777@gmail.com", phone: "95978-xxxxx", address1: "Bhavani",
      address2: " ", city: "Erode", state: "Tamilnadu", country: "India", zipcode: 636313
    },
    {
      id: 3, fname: "Karthick", lname: "Raja", mail: "karthi02@gmail.com", phone: "63637-xxxxx", address1: "Thiruchengode",
      address2: "K.Malai", city: "Namakkal", state: "Tamilnadu", country: "India", zipcode: 636303
    },
  ];
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const [users, setUsers] = useState(profile);
  const [editing, setEditing] = useState(false);

  const initialForm = {
    id: null, fname: '', lname: '', mail: '', phone: '', address1: '', address2: '', city: '',
    state: '', country: '', zipcode: ''
  }
  const [currentUser, setCurrentUser] = useState(initialForm);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, fname: user.fname, lname: user.lname, mail: user.mail, phone: user.phone,
      address1: user.address1, address2: user.address2, city: user.city, state: user.state, country: user.country,
      zipcode: user.zipcode
    });
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }
  return (
    <div>
      <div className="Container">
        <Router>
          <Navbar bg="success" variant="dark">
            <Container>
              <Navbar.Brand href="/Home">STUDENT REGISTRATION FORM</Navbar.Brand>
              <Nav className="me-auto">

                <span><Link className="link" to="/home">HOME</Link></span>
                <span><Link className="link" to="/add">ADD REGISTER</Link></span>
                <span><Link className="link" to="/form" >REGISTERS LIST</Link></span>
                <span><Link className="link" to="/contact">CONTACT US</Link></span>

              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/add" element={<Add addUser={addUser} />}></Route>
            <Route path="/edit" element={<Edit setEditing={setEditing} currentUser={currentUser}
              updateUser={updateUser} />}></Route>
            <Route path="/form" element={<FormPage editRow={editRow} deleteUser={deleteUser} users={users} />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/mess" element={<Message />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}
export default App;