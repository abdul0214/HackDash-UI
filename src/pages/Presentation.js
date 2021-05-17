import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDownload,faHome } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { PageVisitsTable } from "../components/Tables";

import ThemesbergLogo from "../assets/img/themesberg-logo.svg";

import { faCashRegister, faChartLine} from '@fortawesome/free-solid-svg-icons';

import { CounterWidget, CircleChartWidget, SalesValueWidget } from "../components/Widgets";
import { SimpleCard } from "../components/SimpleCard";

import { trafficShares } from "../data/charts";

export default () => {
  // const PagePreview = (props) => {
  //   const { name, image, link } = props;

  //   return (
  //     <Col xs={6} className="mb-5">
  //       <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
  //         <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

  //         <div className="text-center show-on-hover">
  //           <h6 className="m-0 text-center text-white">
  //             {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
  //           </h6>
  //         </div>
  //       </Card.Link>
  //     </Col>
  //   );
  // };

  // const Feature = (props) => {
  //   const { title, description, icon } = props;

  //   return (
  //     <Col xs={12} sm={6} lg={3}>
  //       <Card className="bg-white shadow-soft text-primary rounded mb-4">
  //         <div className="px-3 px-lg-4 py-5 text-center">
  //           <span className="icon icon-lg mb-4">
  //             <FontAwesomeIcon icon={icon} />
  //           </span>
  //           <h5 className="fw-bold text-primary">{title}</h5>
  //           <p>{description}</p>
  //         </div>
  //       </Card>
  //     </Col>
  //   );
  // };

  // const FolderItem = (props) => {
  //   const { name, icon, tooltip, iconColor } = props;
  //   const color = iconColor ? `text-${iconColor}` : "";

  //   return (
  //     <OverlayTrigger
  //       trigger={['hover', 'focus']}
  //       placement="left"
  //       overlay={<Tooltip>{tooltip}</Tooltip>}
  //     >
  //       <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
  //         <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
  //       </li>
  //     </OverlayTrigger>
  //   );
  // };

  return (
    <>
      <Navbar variant="light" expand="lg" bg="light" className="navbar-light navbar-theme-secondary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <FontAwesomeIcon icon={faHome}/>
            <span className="ms-2 brand-text d-none d-md-inline">Dashboard</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Teams</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">All Tickets</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Participants</Nav.Link>
                {/* <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Upgrade to Pro</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
            {/* <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button> */}
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-color-light" id="home">
        <Container>
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
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Hackathon Messages"
            value="16,000"
            percentage={10.57}
          />
        </Col>
      </Row>
      <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>
                </Row>
                </Col>
                </Row>
                </Col>

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
