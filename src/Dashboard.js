import { useNavigate } from "react-router-dom";
import  ProductList from "./ProductList";
import Cart from "./Cart";
import { useState } from "react";

const Dashboard = () => {
  const N = useNavigate();
  const [tab,setTab]=useState("p")
  const logout = () => {
    localStorage.clear();
    N("/");
  };
  return (
    <div>
      <header>
        <button
          onClick={() => {
            setTab("p");
          }}
        >
          danh sách sp
        </button>

        <button
          onClick={() => {
            setTab("c");
          }}
        >
          giỏ hàng
        </button>

        <button onClick={logout}>thoát</button>
      </header>

      {tab==="p"?<ProductList/>:<Cart/>}
    </div>
  );
};

export default Dashboard;
