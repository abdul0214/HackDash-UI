import React from "react";
import { Badge, Form } from "@themesberg/react-bootstrap";

export const TicketsTableRow = (props) => {
  const statusColorMap = {
    resolved: "success",
    open: "warning",
    pinned: "danger",
  };
  const { id, type, message, joins, time, name, resolved, status } = props;
  return (
    <tr onClick={() => props.handleRowClick(props)}>
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
