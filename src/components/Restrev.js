import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Restrev({rev}) {
    const [open, setOpen] = useState(false);
  return (
    rev.map(item=>(
        <Card style={{ width: '18rem', float:'left' }} className="border m-4">
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Rating: {item.rating}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
        <Card.Text>
          
          <Button
        variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Open
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {item.comments}
        </div>
      </Collapse>
        </Card.Text>
        </Card.Body>
        </Card>
    ))
  )
}

export default Restrev