import axios from "axios";
import "../styles.css";
import React, { useEffect } from "react";
import { SetProducts } from "../redux/ProductActions";

import { useDispatch, useSelector } from "react-redux";
const ProductComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title } = products[0];
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response?.data, "main");
    dispatch(SetProducts(response?.data));
  };
  useEffect(() => fetchProducts(), []);

  const Looping = products?.map((product) => {
    // const{id,title,image,price,category}=product,
    return (
      <>
        <div className="four wide column">
          <img src={product.image} alt="hai" height="180px" width="100px" />
          <p>{product.title}</p>
          <p>
            Price <span className="price-color">{product.price}</span>
          </p>
          <p>
            <button
              style={{ color: "red" }}
              onClick={() => {
                return <div>hai</div>;
              }}
            >
              add to cart
            </button>
          </p>
        </div>
      </>
    );
  });

  console.log(products, "compo");

  return <>{Looping}</>;
};
export default ProductComponent;
