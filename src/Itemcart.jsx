import React from 'react'
import { useCart } from 'react-use-cart'

const Itemcart = (props) => {
  const { addItem } = useCart()

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h className="card-title">{props.title}</h>
          <h5 className="card-title">{props.price} $</h5>
          <p className="card-text"> {props.desc}</p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  )
}

export default Itemcart
