import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navigation-bar.scss";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="navigation-bar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-name">
            MyMoviesFlix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="me-auto">
              {!user && (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}
              {user && (
                <>
                  <Nav.Link as={Link} to="/">
                    Movies
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                </>
              )}
            </Nav>
            {user && (
              <Nav className="ml-auto">
                <Nav.Link onClick={onLoggedOut} className="logout-button">
                  Logout
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content-below-navigation"></div>
    </>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.object,
  onLoggedOut: PropTypes.func.isRequired,
};
