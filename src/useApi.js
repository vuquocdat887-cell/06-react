import { useNavigate } from "react-router-dom";
import { fakeLoginApi } from "./authApi";
import { useState } from "react";

const useApi = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async (e, p) => {
    setLoading(true);
    try {
      const resolve = await fakeLoginApi(e, p);
      localStorage.setItem("Logged", resolve.Logged);
      localStorage.setItem("user", JSON.stringify(resolve.user));
      navigate("/dashboard");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};

export default useApi;
