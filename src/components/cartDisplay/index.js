import { useSelector, useDispatch } from "react-redux";

import { rmvProductThunk } from "../../store/modules/shop/thunks";

import "./cartDisplay.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartDisplay = () => {
  const cartList = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const handleProducts = (notebook) => {
    dispatch(rmvProductThunk(notebook));
  };

  const notify = () => toast("Produto Removido");

  return (
    <div className="cart">
      <p>
        Valor Total: R$
        {cartList.reduce((acm, cv) => {
          return acm + cv.price;
        }, 0)}
      </p>
      <ul>
        {cartList.map((notebook, index) => (
          <li key={index}>
            <img src={notebook.img} alt={notebook.name} />
            <div className="text-info">
              <h3>Marca: {notebook.name}</h3>
              <p>Preço: R${notebook.price.toFixed(2)}</p>
            </div>

            <button
              onClick={() => {
                handleProducts(notebook);
                notify();
              }}
            >
              Remover
            </button>
            <ToastContainer />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;
