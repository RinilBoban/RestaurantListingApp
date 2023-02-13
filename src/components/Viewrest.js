import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop'
import Restrev from './Restrev';

function Viewrest() {
    const urlParams=useParams()
    console.log(urlParams);
    // the coresponding id which was called will get stored in urlParams. Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path

    const[restaurantlist,setRestaurantlist]=useState([])

    const getRestaurant=async()=>{
        await fetch('/restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{
                setRestaurantlist(result.restaurants);
            })
        })
    }
    console.log(restaurantlist);

    useEffect(()=>{
        getRestaurant()
    },[])

    const viewrest=restaurantlist.find(item=>item.id==urlParams.id)

  return (
    <div>
        {
            viewrest?(
            <Row className="m-4">
                <Col md={3}>
                    <Image src={viewrest.photograph} fluid/>
                </Col>

                <Col style={{margin:50}}>
                <h1>{viewrest.name}</h1>
                <ListGroup>
                    <ListGroup.Item variant="primary">Id: {viewrest.id}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Cuisine Type: {viewrest.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Address: {viewrest.address}</ListGroup.Item>
                    <ListGroup.Item variant="dark">Neighbourhood: {viewrest.neighborhood}</ListGroup.Item>
                </ListGroup>

                <Restop op={viewrest.operating_hours}/>
                {/* Reviews: */}
                <Restrev rev={viewrest.reviews}/>

                </Col>
            </Row>
            ):'null'
        }
    </div>
  )
}

export default Viewrest