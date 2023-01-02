import React from "react";
import './App.css';
import Card from 'react-bootstrap/Card';

const Home = ()=>{
return(
    <div>
         <h1>STUDENT REGISTER FORM </h1>
      <hr/>
      <h2 className="heading2"> WELCOME ! </h2>
      <div className="homeform">
        <div className="homeform1">
            <ul>
                <li>We are providing website for storing students registers. </li>
                <li>This website makes easy to maintains students datas.</li>
                <li>Mainly it's used to reduce paper works.</li>
                <li>This website using CURD OPERATIONS So, we can handle datas easy to Add,Delete,Edit,Update.</li>
            </ul>
        </div>
        <h3>FEATURES OF CURD OPERATIONS</h3>
      <div className="curd">
        <span className="span1">       {[
        'Success'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>ADD</Card.Header>
          <Card.Body>
            <Card.Text>
              First page have submit tab for adding a new registers on form.The submit tab using ADD curd operation.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </span>
        <span className="span1">{[
        'Danger',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>DELETE</Card.Header>
          <Card.Body>
            <Card.Text>
            Second page have Delete tab for deleting a registers on form.The delete tab using DELETE curd operation.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </span>
        <span className="span1">     {[
        'Warning',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>EDIT</Card.Header>
          <Card.Body>
            <Card.Text>
            Second page have one more tab for editing a registers on form.The edit tab using EDIT curd  <br/>operation.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </span>
        <span className="span1">       {[
        'Info',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>UPDATE</Card.Header>
          <Card.Body>
            <Card.Text>
           Finally the second page edit tab links to edit page. edit page have UPDATE tab for updating a new registers on form.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </span>
      </div>
      </div>
      
    </div>
);
}

export default Home;