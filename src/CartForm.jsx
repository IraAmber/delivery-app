import React, { useState } from 'react'
import './CartForm.css'

const CartForm = ({ handleBuyNow }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const orderData = { customer: formData }
    handleBuyNow(orderData)
    setFormData({ name: '', phone: '', email: '', address: '' })
  }

  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <div className="cart-form-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="cart-form__input"
        />
      </div>
      <div className="cart-form-row">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="cart-form__input"
        />
      </div>
      <div className="cart-form-row">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="cart-form__input"
        />
      </div>
      <div className="cart-form-row">
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          className="cart-form__input"
        />
      </div>
      <button className="btn btn-primary cart-form__submit" type="submit">
        Buy Now
      </button>
    </form>
  )
}

export default CartForm
