import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load product");
      });
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-8 max-w-5xl">
        
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm rounded-lg object-contain"
          />
        </div>
      
        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-6">
            ${product.price}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-stone-600 text-white px-6 py-2 rounded-lg hover:bg-stone-700 transition"
          >
            Add to Cart
          </button>

          <br />

          {/* Back Button */}
          <Link to="/">
            <button className="bg-stone-600 text-white px-6 py-2 rounded-lg hover:bg-stone-700 transition">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

