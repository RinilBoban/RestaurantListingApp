import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
    console.log(restaurant);
  return (
    <Link to={`viewrest/${restaurant.id}`} style={{textDecoration:"none",color:"whitesmoke"}}>
        <div>
        <Card style={{ width: '18rem' , marginTop:20, marginLeft:10}}>
      <Card.Img className='p-3' variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </Link>
  )
}

export default Restcard