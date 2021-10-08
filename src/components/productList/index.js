import { useState } from "react";
import { addProductThunk } from "../../store/modules/shop/thunks";

import { useDispatch } from "react-redux";

import "./productList.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      name: "Dell",
      price: 8000,
      img: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1505988368",
    },
    {
      name: "Lenovo",
      price: 6000,
      img: "https://i.zst.com.br/thumbs/12/3d/3a/1427406665.jpg",
    },
    {
      name: "Acer",
      price: 5000,
      img: "https://i.zst.com.br/thumbs/12/2a/10/1292792468.jpg",
    },
    {
      name: "Avell",
      price: 12000,
      img: "https://images.avell.com.br/media/catalog/product/cache/1/thumbnail/800x600/9df78eab33525d08d6e5fb8d27136e95/b/a/back-left2_7_2.png",
    },
    {
      name: "Samsung",
      price: 999,
      img: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1347357942",
    },
  ]);

  const dispatch = useDispatch();

  const handleProducts = (notebook) => {
    dispatch(addProductThunk(notebook));
  };

  const notify = () => toast("Produto Adicionado!");

  return (
    <div className="shop">
      <ul>
        {products.map((notebook, index) => (
          <li key={notebook.name}>
            <img src={notebook.img} alt={notebook.name} />
            <div className="text-info">
              <h3>Marca: {notebook.name}</h3>
              <p>Preço: R${notebook.price.toFixed(2)}</p>
            </div>
            <p className="description">
              {" "}
              Description:
              fewuifhweufheiwfhuiwelfhuiwefhiwehfewuifpefeuwipfhweufheuiwf
              feufnweipfweui fewfuweifhiwuefhweiofhewui fewfuiweofhweuifhiweu
            </p>
            <button
              onClick={() => {
                handleProducts(notebook);
                notify();
              }}
            >
              Adicionar
            </button>
            <ToastContainer />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
