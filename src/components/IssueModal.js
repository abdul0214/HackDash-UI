import React, { useState } from "react";
import { Button, Modal } from "@themesberg/react-bootstrap";
export const IssueModal = (props) => {
  const IssueMessage = (props) => {
    return props.issue.type !== "Team Inactive" ? (
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
  const JoinsDisplay = (props) => {
    return props.issue.type === "Team Needs Members" ? (
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
  return (
    <Modal
      as={Modal.Dialog}
      centered
      show={props.showDefault}
      onHide={props.handleClose}
    >
      <Modal.Header>
        <Modal.Title className="h6">Issue Details</Modal.Title>
        <Button
          variant="close"
          aria-label="Close"
          onClick={props.handleClose}
        />
      </Modal.Header>
      <Modal.Body>
        <p>
          Team Name: <strong className="me-auto ms-2">{props.row.name}</strong>
        </p>
        <p>
          Issue Type:{" "}
          <strong className="me-auto ms-2"> {props.row.type}</strong>
        </p>
        <IssueMessage issue={props.row} />
        <JoinsDisplay issue={props.row} />
        <p>
          Time: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong className="me-auto ms-2">{props.row.time}m ago</strong>
        </p>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <div>
          <Button size="sm" variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </div>
        <div className="align-items-end">
          <Button
            size="sm"
            variant="success"
            className="text-white"
            onClick={() => props.handleResolve(props.row.id)}
          >
            RESOLVE
          </Button>
          &nbsp;
          <Button
            size="sm"
            variant="danger"
            className="text-white"
            onClick={() => props.handlePin(props.row.id)}
          >
            PIN
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
