import React, { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Table,
  Modal,
  Badge,
  Form,
} from "@themesberg/react-bootstrap";
import { pageVisits } from "../data/participantData";
export const TicketsTable = () => {
  const statusColorMap = {
    resolved: "success",
    open: "warning",
    pinned: "danger",
  };
  const [issueFilter, setIssueFilter] = useState("all");
  const [showDefault, setShowDefault] = useState(false);
  const [rows, setRows] = useState(pageVisits);
  const [row, setRow] = useState({
    id: null,
    type: null,
    message: null,
    joins: null,
    nMessages: null,
    time: null,
    name: null,
    resolved: false,
    status: null,
  });
  const handleClose = () => setShowDefault(false);
  const handleRowClick = (data) => {
    setShowDefault(true);
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
  };
  const handleResolve = (id) => {
    pageVisits[id].resolved = true;
    pageVisits[id].status = "resolved";
    setRows(pageVisits);
    handleClose();
  };
  const handlePin = (id) => {
    pageVisits[id].status = "pinned";
    setRows(pageVisits);
    handleClose();
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

  const IssueFilter = (issue) => {
    return issueFilter == "all" ? true : issue.status == issueFilter;
  };
  const TableRow = (props) => {
    const { id, type, message, joins, time, name, resolved, status } = props;
    return (
      <tr onClick={() => handleRowClick(props)}>
        <td>{id}</td>
        <td>{type}</td>
        <td>{name}</td>
        <td>{time}m ago</td>
        <td className="mr-0 pr-0" style={{ textAlign: "center" }}>
          <Badge
            bg={statusColorMap[status]}
            className="badge-lg mr-1"
            style={{ marginRight: "0.5rem" }}
          >
            {status.toUpperCase()}
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
            <Col xs={8} md={6} lg={3} xl={2}>
              <Form.Group className="mb-2">
                {/* <Form.Label>Filter issues by status</Form.Label> */}
                <Form.Select
                  id="state"
                  value={issueFilter}
                  onChange={(event) => setIssueFilter(event.target.value)}
                >
                  <option value="all">All Issues</option>
                  <option value="resolved">Resolved issues</option>
                  <option value="open">Open issues</option>
                  <option value="pinned">Pinned issues</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Card.Header>
        <Table hover responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
              <th scope="col" style={{ textAlign: "center" }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.filter(IssueFilter).map((pv) => (
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
              onClick={() => handlePin(row.id)}
            >
              PIN
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
