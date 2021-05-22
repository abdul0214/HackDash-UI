import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

import { Col, Row, Card, Image, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ThemesbergLogo from "../assets/img/themesberg-logo.svg";

import { SimpleCard } from "../components/SimpleCard";

import { MessagesTrendWidget } from "../components/MessagesTrendWidget";
import { TicketsTable } from "../components/TicketsTable";

export default () => {

  return (
    <>
      <section className="section-header overflow-hidden pt-2 pt-lg-4 pb-9 pb-lg-12 bg-color-light" id="home">
        <Container>
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-2 mt-0 mb-md-0">
          <h1 className="h2">Overview</h1>
          <p className="mb-0">
            Overview of Hackathon
          </p>
        </Col>
      </Row>
        <Row className="justify-content-md-center">

        <Col xs={12} sm={6} xl={3} className="mb-4">
          <SimpleCard
            title="Unresolved"
            value="15"
          />
        </Col>

        <Col xs={12} sm={6} xl={3} className="mb-4">
          <SimpleCard
            title="Overdue"
            value="17"
          />
        </Col>

        <Col xs={12} sm={6} xl={3} className="mb-4">
          <SimpleCard
            title="Resolved"
            value="35"
          />
        </Col>
        
        <Col xs={12} sm={6} xl={3} className="mb-4">
        <SimpleCard
            title="Archived"
            value="64"
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-4">
      <Col xs={12} xl={12} className="d-none d-sm-block">
          <MessagesTrendWidget
            title="Hackathon Messages"
            value="16,000"
            percentage={10.57}
          />
        </Col>
      </Row>

              <Row>
                <Col xs={12} className="mb-4">
                  <TicketsTable />
                </Col>
                </Row>

        </Container>
      </section>      
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
