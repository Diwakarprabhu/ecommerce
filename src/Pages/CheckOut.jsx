import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { StoreContext } from "../Context/StoreContent";

function Checkout() {
  const { cartItems } = useContext(StoreContext);

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleOrder(e) {
    e.preventDefault();

    const newOrder = {
      fullName,
      email,
      address,
      paymentMethod,
      items: cartItems,
      total: totalPrice,
      orderDate: new Date().toLocaleString(),
    };

    console.log(newOrder);

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    alert("Order Placed Successfully");

    navigate("/order");
  }

 return (
    
  <div className= " min-h-screen flex justify-center items-center bg-gray-100">
   
    <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">

      <h1 className="text-3xl  text-center mb-6">
        Checkout
      </h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
        <p className="text-lg">
          Total Items:
          <span className="font-bold ml-2">
            {cartItems.length}
          </span>
        </p>

        <p className="text-2xl font-bold text-green-600">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>

      <form
        onSubmit={handleOrder}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          rows="4"
          required
        />

        <select
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
          required
        >
          <option value="">
            Select Payment Method
          </option>

          <option value="COD">
            Cash On Delivery
          </option>

          <option value="UPI">
            UPI
          </option>

          <option value="Card">
            Card
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-green-700"
        >
          Place Order
        </button>
      </form>

    </div>
  </div>
);
}

export default Checkout;