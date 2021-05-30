import React, { useState } from "react";
import { Col, Row, Card, Table, Form } from "@themesberg/react-bootstrap";
import { TicketsTableRow } from "./TicketsTableComponents";
import { pageVisits } from "../data/participantData";
import { IssueModal } from "./IssueModal";
export const TicketsTable = () => {
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
  const IssueFilter = (issue) => {
    return issueFilter === "all" ? true : issue.status === issueFilter;
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
              <TicketsTableRow
                key={`page-visit-${pv.id}`}
                {...pv}
                handleRowClick={handleRowClick}
              />
            ))}
          </tbody>
        </Table>
      </Card>
      <IssueModal
        row={row}
        showDefault={showDefault}
        handleClose={handleClose}
        handleResolve={handleResolve}
        handlePin={handlePin}
      />
    </>
  );
};
