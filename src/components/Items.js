import React,{useContext} from 'react'
import {CartContext} from './Cart';

const Items = (props) => {
  
  const {removeItem,increment,decrement}=useContext(CartContext);

  return (
    <>
    	<div className="items-info">
              <div className="product-img">
                <img src={props.img} alt="product" />
              </div>

              <div className="title">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </div>

              <div className="add-minus-quantity">
                <i className="fas fa-minus minus" onClick={()=>decrement(props.id)}></i>
                <input type="text" placeholder={props.quantity} />
                <i className="fas fa-plus add" onClick={()=>increment(props.id)}></i>
              </div>

              <div className="price">
                 <h3>Rs {props.price}</h3>
              </div>

              <div className="remove-item">
                <i className="fas fa-trash-alt remove" onClick={()=>removeItem(props.id)}></i>
              </div>
            </div>
            <hr/>
    </>
  )
}

export default Items;