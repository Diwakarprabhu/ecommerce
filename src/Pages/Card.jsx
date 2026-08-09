import { useContext } from "react";
import { StoreContext } from "../Context/StoreContent";
import { Link } from "react-router-dom";

function Card() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(StoreContext);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl  mb-6">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-6 bg-white shadow-lg p-4 rounded-lg mb-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-24 w-24 object-contain"
          />

          <div className="flex-1">
            <h2 className="font-bold text-lg">
              {item.title}
            </h2>

            <p className="text-green-600">
              ${item.price}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
                className="bg-gray-300 px-3 py-1 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
                className="bg-gray-300 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <p className="text-blue-600 mt-2">
              Subtotal: $
              {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <button
            onClick={() =>
              removeFromCart(item.id)
            }
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
        <h2 className="text-2xl ">
          Total: ${totalPrice.toFixed(2)}
        </h2>
      </div>

      <Link
        to="/checkout"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </Link>
    </div>
  );
}

export default Card;