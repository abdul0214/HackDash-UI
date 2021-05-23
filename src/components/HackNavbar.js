import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Nav,
  Image,
  Navbar,
  Container,
  ListGroup,
} from "@themesberg/react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Routes } from "../routes";

import NOTIFICATIONS_DATA from "../data/notifications";

export default (props) => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      bg="light"
      className="navbar-light navbar-theme-secondary sticky-top"
    >
      <Container className="position-relative justify-content-between px-3">
        <Navbar.Brand
          as={Link}
          to={Routes.Presentation.path}
          className="me-lg-3 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="ms-2 brand-text d-none d-md-inline">Dashboard</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <Navbar.Collapse id="navbar-default-primary">
            <Nav className="navbar-nav-hover align-items-lg-center">
              <Nav.Link as={Link} to={Routes.Participants.path}>
                Participants
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
