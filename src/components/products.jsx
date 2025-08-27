import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load products");
        
      });
  }, []);

 

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center border p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Link to={`/product/${product.id}`}>
             <img
              src={product.image}
              alt={product.title}
              className="w-full h-[350px] object-contain"
            />
            
            
            </Link>
      
            <h3 className="mt-4 text-lg font-medium line-clamp-2">{product.title}</h3>
            <p className="text-gray-600 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
  