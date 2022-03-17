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
            Price <span className="price-color">{product.price}</span>$
          </p>
          {/* <div className="ui link cards link-h">
            <div className="card">
              <div className="image ">
                <img className="hh" src={product.image} alt="" />
                <div className="content">
                  <div className="header"></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </>
    );
  });

  console.log(products, "compo");

  return (
    <>{Looping}</>
    // <>
    //   <div className="four wide column">
    //     <div className="ui link cards">
    //       <div className="card">
    //         <div className="image">
    //           <img src="data:image/jpeg;base64,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" />

    //           <div className="content">
    //             <div className="header"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
export default ProductComponent;
