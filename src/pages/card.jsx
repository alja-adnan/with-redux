
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, removeFromCart } from "../features/cart/cartSlice";

function Card() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 mb-4 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-lg border"
                />
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">${item.price}</p>
                <p className="text-sm text-gray-500">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-lg"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-lg"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
