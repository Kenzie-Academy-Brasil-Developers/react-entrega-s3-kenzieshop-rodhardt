import { useHistory } from "react-router-dom";
import "./header.css";

const Header = () => {
  const history = useHistory();

  const shop = () => {
    history.push("/");
  };
  const cart = () => {
    history.push("/cart");
  };

  return (
    <header>
      <h1>KenzieShop</h1>
      <h2 onClick={() => shop()}>Produtos</h2>
      <h2 onClick={() => cart()}>Carrinho</h2>
    </header>
  );
};

export default Header;
