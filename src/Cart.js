import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try{const ids = JSON.parse(localStorage.getItem("carts")) || [];
      const data = [];
      for (const n of ids) {
        const resolve = await axios.get(
          `https://fakestoreapi.com/products/${n}`
        );
        data.push(resolve.data);
      }

      setProducts(data);
      setTotal(data.reduce((a, p) => p.price + a, 0));}
      catch(e){
        console.log(e);
      }
      
    };

    fetchData();
  }, []);

  function deleteEmployee(a) {
    const newP = [...products];
    newP.splice(a, 1);
    setProducts(newP);
    setTotal(newP.reduce((a, p) => p.price + a, 0));

    const ids = JSON.parse(localStorage.getItem("carts")) || [];
    const newIds = ids.filter((b, i) => i !== a);
    localStorage.setItem("carts", JSON.stringify(newIds));
  }
  return (
    <div>
      <h1>giỏ hàng</h1>

      <div>
        {products.map((p, a) => (
          <div key={p.id}>
            <img src={p.image} />
            <p>{p.title}</p>
            <p>{p.price}</p>
            <button onClick={() => deleteEmployee(a)}>xóa</button>
          </div>
        ))}
      </div>
      <div>tổng tiền:{total}$</div>
    </div>
  );
};

export default Cart;
