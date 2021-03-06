import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Button,
  ButtonGroup,
  Dropdown,
  Container,
} from "@themesberg/react-bootstrap";

import ParticipantsTable from "../components/ParticipantsTable";

export default () => {
  const [selected, setSelected] = useState("all");
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <h4>Participant List</h4>
            <p className="mb-0">
              In the table select box you can select relevant participant group.
            </p>
          </div>
        </div>

        <div className="table-settings mb-4">
          <Row className="justify-content-between align-items-center">
            <Col xs={8} md={6} lg={3} xl={4}>
              <Form.Group className="mb-2">
                <Form.Label>Filter table</Form.Label>
                <Form.Select
                  id="state"
                  value={selected}
                  onChange={(event) => setSelected(event.target.value)}
                >
                  <option value="all">All Participants selected</option>
                  <option value="inactive">InActive Participants</option>
                  <option value="teamless">Teamless Participants</option>
                  <option value="repeat">Repeat Participants</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  split
                  as={Button}
                  variant="link"
                  className="text-dark m-0 p-0"
                >
                  <span className="icon icon-sm icon-gray">
                    <FontAwesomeIcon icon={faCog} />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                  <Dropdown.Item className="fw-bold text-dark">
                    Show
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex fw-bold">
                    10{" "}
                    <span className="icon icon-small ms-auto">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                  <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>

        <ParticipantsTable selected={selected} />
      </Container>
    </>
  );
};
