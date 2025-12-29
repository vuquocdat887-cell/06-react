import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
    const N=useNavigate();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolve = await axios.get("https://fakestoreapi.com/products");
        console.log(resolve);
        setproducts(resolve.data ?? []);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>danh sách sp</h1>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <img src={p.image} />
            <p>{p.title}</p>
            <button onClick={()=>N(`/product/${p.id}`)}>xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
