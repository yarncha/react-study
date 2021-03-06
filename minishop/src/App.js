import React, { useState } from 'react';
import { Navbar, NavDropdown, Container, Nav, Button } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { ShoesData } from './data.js';
import { Detail } from './detailData.js';

function ShoesInfo(props) {
  // 신발의 정보를 출력하는 부분
  return (
    <div className="col-md-4">
      <img src={props.shoesElement.image} alt="shoe" width="100%" />
      <h4>{props.shoesElement.title}</h4>
      <p>{props.shoesElement.content} & {props.shoesElement.price}</p>
    </div>
  );
}

export let stockContext = React.createContext();
// 컴포넌트 중복 사용 시 props를 여러번 사용하지 않기 위해 context 사용

function App() {
  let [shoes, setShoes] = useState(ShoesData);
  let [stock, setStock] = useState([10, 11, 12]);
  let [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mini-ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route path="/detail/:id">
          <stockContext.Provider value={stock}>
            <Detail shoes={shoes} />
          </stockContext.Provider>
        </Route>

        <Route path="/">
          <div className="JumbotronDiv">
            <p className="JumbotronTitle">Mini ShoeShop</p>
            <p className="JumbotronDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec diam ac lectus commodo viverra. Mauris erat nunc, efficitur et orci sed, bibendum dignissim mi. Proin fringilla tempor mattis. Fusce pharetra nunc elit. Nullam vehicula enim sit amet tempus tempor. Quisque tincidunt sit amet dui sit amet ultricies. Nam euismod massa vitae mi tincidunt tincidunt. Integer commodo massa metus, non feugiat turpis tempus at.</p>
            <Button variant="light" size="lg" className="JumbotronButton">Shop
            </Button>
          </div>
          <div className="container">
            <div className="row">
              {
                shoes.map(function (shoesElement) {
                  return (
                    <ShoesInfo shoesElement={shoesElement}></ShoesInfo>
                  );
                })
              }

              {
                loading === true
                  ? (<div className="loadingPopUp">
                    <p className="mx-auto">Loading...</p>
                  </div>)
                  : null
              }

              <button className="btn btn-primary" onClick={() => {
                setLoading(true);
                // 로딩중 UI 띄우기

                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    setShoes([...shoes, ...result.data]);
                    setLoading(false);
                    // 로딩중 UI 없애기
                  })
                  .catch(() => {
                    alert("실패")
                    setLoading(false);
                    // 로딩중 UI 없애기
                  })
              }}>Show more...</button>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;