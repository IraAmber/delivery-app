import React from 'react'
import { useCart } from 'react-use-cart'
import CartForm from './CartForm'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()
  const handleBuyNow = (orderData) => {
    // Відправити дані на сервер або виконати необхідну логіку
    // TODO: Реалізувати логіку відправки замовлення на сервер

    // Очистити кошик після відправки замовлення
    emptyCart()
  }
  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items : ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: '6rem' }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>{item.quantity} pc</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>

                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <CartForm handleBuyNow={handleBuyNow} />

        <div className="col-auto ms-auto">
          <h2>Total Price {cartTotal}$</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          {/* <button className="btn btn-primary m-2">Buy Now</button> */}
        </div>
      </div>
    </section>
  )
}

export default Cart
