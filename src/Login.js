import { useState } from "react";
import useApi from "./useApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useApi();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, password);
        }}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loading}>đăng nhập</button>
        {loading && <p>đang đăng nhập,,,</p>}

        {error && <p>{error.message}</p>}
      </form>
    </>
  );
};

export default Login;
