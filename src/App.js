import { useState } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import AddBook from './components/AddBook';
import BooksList from './components/BooksList';
import './App.css';
import './index.css';


function App() {
  const [bookId, setBookId] = useState("");

  const getBookHandler = (id) => {
    console.log("The ID of document to b edited: ", id);
    setBookId(id);
  };
  return (
    <>
      <Navbar bg="dark" varirant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
