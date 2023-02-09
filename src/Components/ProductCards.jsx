import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rt/slices/cart";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="row g-3">
      {products.map((product) => (
        <div key={product.id} className="col-md-6 col-lg-3">
          <div className="card overflow-hidden" aria-hidden="true">
            <img
              src={product.image}
              alt={product.title}
              className="card-image-top placeholder-card-image"
            />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text">
                <span className="d-flex justify-content-between align-items-center">
                  <span className="text-danger">${product.price}</span>
                  <span>
                    <i className="fa-solid fa-star text-warning"></i>{" "}
                    {product.rating.rate} / {product.rating.count}
                  </span>
                </span>
                <span className="product-description my-3">
                  {product.description}
                </span>
              </p>
              <div className="d-flex g-3">
                <Link
                  to={`/details/${product.id}`}
                  className="btn btn-primary col-6 me-1"
                >
                  Read More
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-success col-6 "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
