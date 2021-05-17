import React from "react";
import { Col, Row, Card } from '@themesberg/react-bootstrap';

export const SimpleCard = (props) => {
    const { category, title } = props;
    return (
      <Card border="light" className="shadow-sm">
        <Card.Body>
          <Row className="d-block d-xl-flex">
            <Col>
              <div className="d-none d-sm-block text-center">
                <h5>{category}</h5>
                <h3 className="mb-1">{title}</h3>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  };