import React from "react";
import { Link } from "react-router-dom";
import usersData from "../../data";
import styles from "./Productinfo.module.css";

const Productinfo = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>E-Commerce Store</h1>
        </div>
      </header>
      <div className="main1">
        <div className={styles.header}>
          <h2 className={styles.header1}>Product List</h2>
        </div>
        <div>
          <ul className={styles.main2}>
            {usersData.map((product) => (
              <div className={styles.main3} key={product.id}>
                <p>
                  <p className="product-name">{product.name}</p>
                  <Link to={`/products/${product.id}`} className="product-link">
                    <img className={styles.imgr} src={product.image} alt={product.name} />
                  </Link>
                  <p className="product-price">Price :  {product.price}$</p>
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>© 2023 E-Commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Productinfo;
