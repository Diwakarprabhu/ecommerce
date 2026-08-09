import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Header from "../Components/Header";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContent";

const Home = () => {
    const [productData, setProductData] = useState([]);
    
    const { addToCart } = useContext(StoreContext);

   
  useEffect(() => {
    async function CallApi() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        const data = await response.json();

        setProductData(data);
      } catch {
        console.log("error");
      }
    }

    CallApi();
  }, []);

 
  return (
    <>
    
    <div className="grid grid-cols-4 gap-6 p-6 products- ">
       
      {productData.map((data) => (
        <ProductCard
          key={data.id}
          image={data.image}
          title={data.title}
          price={data.price}
          product={data}
          addToCart={addToCart}
          
        />
      ))}

    </div>
   
    </>

  );
};

export default Home;