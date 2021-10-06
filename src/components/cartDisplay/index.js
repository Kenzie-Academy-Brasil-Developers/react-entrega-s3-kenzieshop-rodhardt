import { useSelector, useDispatch } from "react-redux";

import { rmvProductThunk } from "../../store/modules/shop/thunks";

import "./cartDisplay.css";

const CartDisplay = () => {
  const cartList = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const handleProducts = (notebook) => {
    dispatch(rmvProductThunk(notebook));
  };

  return (
    <div className="cart">
      <ul>
        {cartList.map((notebook, index) => (
          <li key={index}>
            <img src={notebook.img} alt={notebook.name} />
            <div className="text-info">
              <h3>Marca: {notebook.name}</h3>
              <p>Preço: R${notebook.price.toFixed(2)}</p>
            </div>

            <button onClick={() => handleProducts(notebook)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;
