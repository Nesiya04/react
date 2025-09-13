import React, { useState } from 'react';

import Perfume from './perfume';

import './beauty.css'; 
import b1 from './assests/b1.jpg';
import b2 from './assests/b2.jpg';
import b3 from './assests/b3.jpg';
import b5 from './assests/b5.jpg';
import { MdDelete } from "react-icons/md";

function ProductCard({ image, title }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => setQuantity(prev => prev + 1);
  const removeFromCart = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  const deleteCart = () => setQuantity(0);

  const handleBuy = () => {
    setQuantity(prev => {
      const newQty = prev ;
      alert(`${newQty} ${title} ordered successfully`);
      return newQty;
    });
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="title">{title}</h2>
      <p className="quantity">Add to Cart: <strong>{quantity}</strong></p>
      <div className="button-group">
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart} disabled={quantity === 0}>-</button>
        <button onClick={deleteCart}>
          <MdDelete />
        </button>
      </div>
      {/* Buy button below the controls */}
      <button className="buy-btn" onClick={handleBuy}>Buy</button>
    </div>
  );
}

function CartCard() {
  return (
    <>
    <div id='beauty'>
      <h1 className="h1">Beauty</h1>
      <div className="card-container">
        <ProductCard image={b1} title="Liquid Lipstick" />
        <ProductCard image={b2} title="Nail Polish" />
        <ProductCard image={b3} title="Body Lotion" />
        <ProductCard image={b5} title="Compact Powder" />
      </div>
    </div>

    <Perfume/>

    
    </>
  );
}

export default CartCard;

