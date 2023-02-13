import React, { useEffect } from 'react'
import { useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    // const[restaurantlist,setRestaurantlist]=useState([])

    // create a function for API call
    // const getRestaurant=async()=>{
        //async await   ---    if there is a delay during asynchronous call, we use await
        // await fetch('/restaurants.json')  // asynchronous call
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=>{
    //             setRestaurantlist(result.restaurants);
    //         })
    //     })
    // }
    // console.log(restaurantlist);

    // create a function for API call
    const dispatch=useDispatch()
    const result=useSelector(state=>state.restReducer)
    console.log(result);  //restList:Array(10)

    // const {restaurantlist}=result

    useEffect(()=>{
        // getRestaurant()
        dispatch(RestListAction())
    },[])       // use the empty array to stop the continous display of data in console


  return (
    <Row>
        {
          // below we are importing the data we recieved from restaurantlist to Restcard component
        //   restaurantlist.map(item=>
            result.restList.map(item=>
            <Col sm={12} md={6} lg={4} xl={3}>            
                <Restcard restaurant={item}/>
            </Col>
)
        }
    </Row>
  )
}

export default Restaurantlist