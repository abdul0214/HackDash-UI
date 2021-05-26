import React from "react";
import { Card, Table } from "@themesberg/react-bootstrap";

import { participantData } from "../data/participantData";

export default () => {
  const TableRow = (props) => {
    const { name, team, messages, timeSinceJoin, repeatParticipant } = props;
    // const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    // const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{name}</th>
        <td>{team}</td>
        <td>{messages}</td>
        <td>{timeSinceJoin}</td>
        <td>{repeatParticipant}</td>

        {/* <td>
          <FontAwesomeIcon
            icon={bounceIcon}
            className={`${bounceTxtColor} me-3`}
          />
          {Math.abs(bounceRate)}%
        </td> */}
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        {/* <Row className="align-items-center">
          <Col>
            <h5>Hackathon Tickets</h5>
          </Col>
          <Col className="text-end">
            <Button variant="secondary" size="sm">
              See all
            </Button>
          </Col>
        </Row> */}
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Team</th>
            <th scope="col">Messages</th>
            <th scope="col">Time since Join</th>
            <th scope="col">Repeat Participant</th>
          </tr>
        </thead>
        <tbody>
          {participantData.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
