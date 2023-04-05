import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function MenuItem({ image, name, price}) {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  const handleBuyNow = () => {
    if (cartCount > 0)
    alert(`You ordered ${cartCount} ${name}(s)`);
  };
  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
  return (
    <div className="MenuItem">
        <div style={{backgroundImage : `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>$ {price}</p>
        <br/>
        <div className="Grid">
        <button onClick={handleAddToCart}><ControlPointIcon/></button>
        <button onClick={handleBuyNow}>Buy Now</button>
        <button onClick={handleRemoveFromCart} disabled={cartCount === 0}><RemoveCircleOutlineIcon/></button>
        <h3>Items in Cart: {cartCount}</h3>
        </div>
    </div>
  )
}

export default MenuItem