import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    console.log(savedOrders);
    setOrders(savedOrders);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Order History
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order, index) => (
          <div
            key={index}
            className="border p-4 mb-4 rounded-lg shadow"
          >
            <h2 className="font-bold text-xl">
              {order.fullName}
            </h2>

            <p>{order.email}</p>
            <p>{order.address}</p>
            <p>Payment: {order.paymentMethod}</p>
            <p>Date: {order.orderDate}</p>

            <p className="font-bold text-green-600">
              Total: ${order.total}
            </p>

            <div className="mt-3">
              <h3 className="font-bold mb-2">
                Products
              </h3>

              {order.items.map((item,index) => (
                <div
                  key={index}
                  className="border-b py-2"
                >
                  <p>
                    <strong>
                      {item.title}
                    </strong>
                  </p>

                  <p>
                    Price: ${item.price}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <p>
                    Subtotal: $
                    {(
                      item.price *
                      item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;