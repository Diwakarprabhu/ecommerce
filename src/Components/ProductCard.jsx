function ProductCard({

  product,
  addToCart,
}) {
  return (
   <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
  <img
    src={product.image}
    alt={product.title}
    className="h-48 w-full object-contain"
  />

  <h2 className="text-md  mt-4 h-13 ">
    {product.title}
  </h2>

  <p className="text-green-600 text-md mt-10 ">
    ${product.price}
  </p>

  <button
    onClick={() => addToCart(product)}
    className="mt-auto bg-blue-600 text-white py-2 px-4 rounded  transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
  >
    Add To Cart
  </button>
</div>
  );
}

export default ProductCard;