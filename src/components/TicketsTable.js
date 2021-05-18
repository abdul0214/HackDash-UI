import React from "react";
import { Col, Row, Card, Button, Table } from '@themesberg/react-bootstrap';
import { Badge } from '@themesberg/react-bootstrap';

export const TicketsTable = () => {
    const pageVisits = [
        { id: 1, type:'Team Needs Members', message: 'We are looking for product designer', time: "39", name: "KoronaMars" },
        { id: 2, type:'Team is communicating poorly', message: 'Communication score: 10th percentile', time: "10", name: "Ventilator" },
        { id: 3, type:'Team Needs Help', message: 'Can someone please help us in providing support for internet?', time: "5", name: "Kri-Assist" },
        { id: 4, type:'Team in inactive', message: '5 messages from 2 members', time: "7", name: "medicine-delivery" },
        { id: 5, type:'Team is communicating poorly', message: 'Communication Score: 12th Percentile', time: "13", name: "EarlyBirds" }
    ];
    const TableRow = (props) => {
      const { type, message, time,name } = props;
      return (
        <tr>
          <th scope="row">{type}</th>
          <td>{message}</td>
          <td>{name}</td>
          <td>{time}m ago</td>
          <td className='mr-0 pr-0'>
            <Badge bg="success" className="badge-lg">RESOLVE</Badge> &nbsp;
            <Badge bg="danger" className="badge-lg">PIN</Badge>
         </td>
        </tr>
      );
    };
  
    return (
      <Card border="light" className="shadow-sm">
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h5>All issues/Tickets</h5>
            </Col>
            <Col className="text-end">
              <Button variant="secondary" size="sm">See all</Button>
            </Col>
          </Row>
        </Card.Header>
        <Table responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Message</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
              <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"     "} Action</th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
          </tbody>
        </Table>
      </Card>
    );
  };