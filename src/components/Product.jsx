import React from 'react'
import {data} from '../data.js'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {MyImg} from './MyImg';

export const Product=()=> {
const params=useParams()
const navigate=useNavigate()

console.log('url paraméter:',params)
const selProduct=data.find(obj=> obj.id==params.id)

console.log(selProduct)


  return (
    
 <Card style={{ width: '18rem' }}>
      <MyImg  selProduct={selProduct} /> 
      {/*<Card.Img variant="top" src={selProduct.imgUrl} />*/}
      <Card.Body>
        <Card.Title>{selProduct.name}</Card.Title>
        <Card.Text>
            Price:{selProduct.price}
        </Card.Text>
        <Button variant="dark" onClick={()=>navigate('/products')} >Visszalépés</Button>
      </Card.Body>
    </Card>

        
    
  )
}
