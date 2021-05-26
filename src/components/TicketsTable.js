import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Table,
  Modal,
  Badge,
} from "@themesberg/react-bootstrap";
export const TicketsTable = () => {
  const pageVisits = [
    {
      id: 0,
      type: "Team Needs Members",
      message: "We are looking for product designer",
      joins: ["asko.seeba", "melisa.akar"],
      nMessages: null,
      time: "39",
      name: "KoronaMars",
      resolved: true,
    },
    {
      id: 1,
      type: "Team Inactive",
      message: null,
      joins: "None",
      nMessages: 25,
      time: "10",
      name: "Ventilator",
      resolved: false,
    },
    {
      id: 2,
      type: "Team Needs Help",
      message: "Can someone please help us in providing support for internet?",
      joins: "None",
      nMessages: null,
      time: "5",
      name: "Kri-Assist",
      resolved: false,
    },
    {
      id: 3,
      type: "Team Inactive",
      message: null,
      joins: "None",
      nMessages: 20,
      time: "7",
      name: "medicine-delivery",
      resolved: false,
    },
    {
      id: 4,
      type: "Team Inactive",
      message: null,
      joins: "None",
      nMessages: 35,
      time: "13",
      name: "EarlyBirds",
      resolved: false,
    },
  ];

  const [showDefault, setShowDefault] = useState(false);
  const [row, setRow] = useState({
    id: null,
    type: null,
    message: null,
    joins: null,
    nMessages: null,
    time: null,
    name: null,
    resolved: false,
  });
  const handleClose = () => setShowDefault(false);
  // const row = pageVisits[2];

  const handleRowClick = (data) => {
    setShowDefault(true);
    console.log(data);
    setRow({
      ...row,
      id: data.id,
      type: data.type,
      message: data.message,
      joins: data.joins,
      name: data.name,
      nMessages: data.nMessages,
      time: data.time,
      resolved: data.resolved,
    });

    // setTimeout(() => {
    //   setShowDefault(true);
    // }, 3000);
  };
  const handleResolve = (id) => {
    row.resolved = true;
  };
  const handlePin = (id) => {
    console.log(id);
  };
  const JoinsDisplay = (props) => {
    return props.issue.type == "Team Needs Members" ? (
      <p>
        Joins: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.issue.joins.map((join) => (
          <strong key={`page-visit-${join}`} className="me-auto ms-2">
            {join},
          </strong>
        ))}
      </p>
    ) : null;
  };

  const IssueMessage = (props) => {
    return props.issue.type != "Team Inactive" ? (
      <p>
        Message:&nbsp;&nbsp;&nbsp;
        <strong className="me-auto ms-2">{props.issue.message}</strong>
      </p>
    ) : (
      <p>
        No. of Messages:&nbsp;&nbsp;&nbsp;
        <strong className="me-auto ms-2">{props.issue.nMessages}</strong>
      </p>
    );
  };

  const TableRow = (props) => {
    const { id, type, message, joins, time, name, resolved } = props;
    return !resolved ? (
      <tr onClick={() => handleRowClick(props)}>
        <td>
          {id}-{type}
        </td>
        {/* <td>{message}</td> */}
        <td>{name}</td>
        <td>{time}m ago</td>
        <td className="mr-0 pr-0" style={{ textAlign: "center" }}>
          <Badge
            bg="success"
            className="badge-lg mr-1"
            style={{ marginRight: "0.5rem" }}
          >
            RESOLVE
          </Badge>
          <Badge bg="danger" className="badge-lg">
            PIN
          </Badge>
        </td>
      </tr>
    ) : null;
  };

  return (
    <>
      <Card border="light" className="shadow-sm">
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h5>All issues/Tickets</h5>
            </Col>
            <Col className="text-end">
              <Button variant="secondary" size="sm">
                See all
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Table hover responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Type</th>
              {/* <th scope="col">Message</th> */}
              <th scope="col">Name</th>
              <th scope="col">Time</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map((pv) => (
              <TableRow
                key={`page-visit-${pv.id}`}
                {...pv}
                onClick={() => handleResolve(pv.id)}
              />
            ))}
          </tbody>
        </Table>
      </Card>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h6">Issue Details</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <p>
            Team Name: <strong className="me-auto ms-2">{row.name}</strong>
          </p>
          <p>
            Issue Type: <strong className="me-auto ms-2"> {row.type}</strong>
          </p>
          <IssueMessage issue={row} />
          <JoinsDisplay issue={row} />
          <p>
            Time: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong className="me-auto ms-2">{row.time}m ago</strong>
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
          <div className="align-items-end">
            <Button
              variant="success"
              className="text-white"
              onClick={() => handleResolve(row.id)}
            >
              RESOLVE
            </Button>
            &nbsp;
            <Button
              variant="danger"
              className="text-white"
              onClick={handleClose}
            >
              PIN
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
