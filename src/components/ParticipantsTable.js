import React from "react";
import { Card, Table } from "@themesberg/react-bootstrap";

import {
  participantData,
  teamlessParticipants,
  inActiveParticipants,
  repeatParticipants,
} from "../data/participantData";

export default (props) => {
  const tableData = () => {
    var data = [];
    switch (props.selected) {
      case "inactive":
        data = inActiveParticipants;
        break;
      case "teamless":
        data = teamlessParticipants;
        break;
      case "repeat":
        data = repeatParticipants;
        break;
      default:
        data = participantData;
    }
    return data;
  };
  const TableRow = (props) => {
    const { name, team, messages, timeSinceJoin, repeatParticipant } = props;

    return (
      <tr>
        <th scope="row">{name}</th>
        <td>{team ? team : "n/a"}</td>
        <td>{messages ? messages : "n/a"}</td>
        <td>{timeSinceJoin}</td>
        <td>{repeatParticipant ? "Yes" : "No"}</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header></Card.Header>
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
          {tableData().map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
