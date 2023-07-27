import React, { useState } from 'react';
import styles from './ProducrDesc.module.css';
import { useParams } from 'react-router-dom';

const ProdctDesc = ({ productData }) => {
  const [cart, setCart] = useState(false);
  const [quantity, setQuantity] = useState(1); 

  const addToCart = () => {
    setCart(true);
    alert('Product added to cart!');
    setQuantity(1); 
  };

  const { id } = useParams();           
  const product = productData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>User not found</div>;
  }

  const totalPrice = product.price * quantity;

  return (
    <div className={styles.main}>
      <div className={styles.main2}>
        <a>Product Details</a>
        <a>{product.name}</a>
        <p>ID: {product.id}</p>
        <img className={styles.imgr} src={product.image} alt={product.name} />
        <p>DESC : {product.description}</p>
        <h3>Price: {product.price}$</h3>

        <div className={styles.quantityContainer}>
          <label>Quantity:</label>
          <input
            type="number"
            min="1" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.valueAsNumber)}
            className={styles.quantityInput}
          />
        </div>

        <div>
          <p>Total Price: {totalPrice}$</p>
        </div>

        <div className={styles.btn}>
          <button
            onClick={addToCart}
            disabled={cart}
            className={cart ? styles.addedBtn : styles.addToCartBtn}
          >
            {cart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdctDesc;
