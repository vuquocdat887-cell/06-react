import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();
  const [p, setproduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolve = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log(resolve);
        setproduct(resolve.data || []);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  if (!p) return <p>Đang tải...</p>;

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("carts")) || [];
    localStorage.setItem("carts", JSON.stringify([...cart, id]));
  }

  return (
    <div>
      <div key={p.id}>
        <img src={p.image} />
        <p>{p.title}</p>
        <p>{p.price}$</p>
        <p>{p.description}</p>
        <button onClick={addToCart}>Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
