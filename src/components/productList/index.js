import { useState } from "react";

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

  return (
    <div>
      <ul>
        {products.map((notebook) => (
          <li key={notebook.name}>
            <img src={notebook.img} alt={notebook.name} />
            <h3>Marca: {notebook.name}</h3>
            <p>Preço: R${notebook.price.toFixed(2)}</p>
            <button>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
