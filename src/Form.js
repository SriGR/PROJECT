import React from "react";
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const FormPage = (props) => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>STUDENT REGISTER FORM </h1>
      <hr /><br />
      <h3>VIEW REGISTER :</h3>
      <Table >
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>E-MAIL ID</th>
            <th>PHONE NUMBER</th>
            <th>ADDRESS-1</th>
            <th>ADDRESS-2</th>
            <th>CITY</th>
            <th>STATE</th>
            <th>COUNTRY</th>
            <th>ZIP CODE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.mail}</td>
                <td>{user.phone}</td>
                <td>{user.address1}</td>
                <td>{user.address2}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>
                <td>{user.zipcode}</td>
                <td>
                  <span><Button variant="success" onClick={() => {
                    navigate('/edit')
                    props.editRow(user)
                  }}>Edit</Button></span>
                  <span><Button variant="success" onClick={() => props.deleteUser(user.id)}>Delete</Button></span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}> No data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default FormPage;