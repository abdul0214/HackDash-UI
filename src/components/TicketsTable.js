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
      id: 1,
      type: "Team Needs Members",
      message: "We are looking for product designer",
      joins: ["asko.seeba", "melisa.akar"],
      time: "39",
      name: "KoronaMars",
    },
    {
      id: 2,
      type: "Team Communicating poorly",
      message: "Communication score: 10th percentile",
      joins: "None",
      time: "10",
      name: "Ventilator",
    },
    {
      id: 3,
      type: "Team Needs Help",
      message: "Can someone please help us in providing support for internet?",
      joins: "None",
      time: "5",
      name: "Kri-Assist",
    },
    {
      id: 4,
      type: "Team Inactive",
      message: "5 messages from 2 members",
      joins: "None",
      time: "7",
      name: "medicine-delivery",
    },
    {
      id: 5,
      type: "Team Communicating poorly",
      message: "Communication Score: 12th Percentile",
      joins: "None",
      time: "13",
      name: "EarlyBirds",
    },
  ];

  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const row = pageVisits[0];
  // const [row, setRow] = useState([{}]);
  // const handleClick = (data) => {
  //   console.log(data);
  //   setRow({
  //     ...row,
  //     data,
  //   });
  //   console.log(row);
  //   setShowDefault(true);
  // };
  const TableRow = (props) => {
    const { id, type, message, joins, time, name } = props;
    return (
      <tr onClick={() => setShowDefault(true)}>
        <td>
          {id}-{type}
        </td>
        {/* <td>{message}</td> */}
        <td>{name}</td>
        <td>{time}m ago</td>
        <td className="mr-0 pr-0">
          <Badge bg="success" className="badge-lg">
            RESOLVE
          </Badge>{" "}
          &nbsp;
          <Badge bg="danger" className="badge-lg">
            PIN
          </Badge>
        </td>
      </tr>
    );
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
              <th scope="col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"     "} Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map((pv) => (
              <TableRow key={`page-visit-${pv.id}`} {...pv} />
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
            Issue Type: <strong className="me-auto ms-2">{row.type}</strong>
          </p>
          <p>
            Message:{" "}
            <strong className="me-auto ms-2">
              &nbsp;&nbsp;&nbsp; {row.message}
            </strong>
          </p>
          <p>
            Joins:{" "}
            {row.joins.map((join) => (
              <strong key={`page-visit-${join}`} className="me-auto ms-2">
                {join},
              </strong>
            ))}
          </p>
          <p>
            Time: <strong className="me-auto ms-2">{row.time}m ago</strong>
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
              onClick={handleClose}
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
