import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import Header from "../../component/Header";
import { SpinnerRoundFilled } from "spinners-react";
import CartContext from "../../store/CartContext";
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { cart, setCart, total, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCart([]);
    setTotal(0);
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const ChangeColor = (id) => {
    var div = document.getElementById(`box${id}`).style;

    if (div.borderStyle === "solid") {
      div.borderStyle = "none";
      div.transform = "";
    } else {
      div.borderStyle = "solid";
      div.transform = "scale(1.05)";
    }
  };

  const GetCart = (item) => {
    var selectedProduct = cart.find((x) => x.id === item.id);

    if (selectedProduct !== undefined) {
      if (cart.length === 1) {
        setTotal(0);
      }
      let index = cart.indexOf(selectedProduct);
      cart.splice(index, 1);
      setTotal(total - item.price);
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
      setTotal(total + item.price);
    }
  };
  return (
    <>
      {loading ? (
        <SpinnerRoundFilled
          size={50}
          thickness={100}
          speed={100}
          color="#4C9984"
        />
      ) : (
        <>
          <Header />
          <div className="container">
            <div className="container-element-box">
              {products.map((item) => (
                <div
                  id={`box${item.id}`}
                  key={`box${item.id}`}
                  className="element-group"
                  onClick={() => {
                    ChangeColor(item.id);
                    GetCart(item);
                  }}
                >
                  <div className="element-photo" key={`elpho${item.id}`}>
                    <img
                      key={`img${item.id}`}
                      src={item.image}
                      alt={item.title}
                    ></img>
                  </div>
                  <div key={`elde${item.id}`} className="element-detail">
                    <div key={`elhe${item.id}`} className="element-header">
                      <span key={`spn1${item.id}`}>
                        {item.title.substring(0, 17)}
                      </span>
                      <span key={`spn2${item.id}`}>
                        {item.price.toFixed(0)}₺
                      </span>
                    </div>
                    <div key={`elco${item.id}`} className="element-content">
                      <div
                        key={`elcoit${item.id}`}
                        className="element-content-item"
                      >
                        <span key={`spn3${item.id}`}>
                          {item.description.substring(0, 25)}
                        </span>
                      </div>
                      <div
                        key={`elcoit2${item.id}`}
                        className="element-content-item"
                      >
                        <span key={`spn4${item.id}`}>
                          {item.description.substring(25, 50)}
                        </span>
                      </div>
                      <div
                        key={`elcoit3${item.id}`}
                        className="element-content-item"
                      >
                        <span key={`spn5${item.id}`}>
                          {item.description.substring(50, 75)}
                        </span>
                      </div>
                    </div>
                    <hr key={`hr1${item.id}`} className="element-detail-line" />
                    <div key={`elti${item.id}`} className="element-ticket">
                      <span
                        key={`spn6${item.id}`}
                        className="element-ticket-item category"
                      >
                        {item.category.toUpperCase()}
                      </span>
                      <span
                        key={`spn7${item.id}`}
                        className="element-ticket-item new "
                      >
                        NEW PRODUCT
                      </span>
                      <span
                        key={`spn8${item.id}`}
                        className="element-ticket-item highlights "
                      >
                        HIGHLIGHTS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="container-detail-box">
              <hr className="container-line" />
              <div className="detail-group">
                {total <= 0 ? (
                  <span className="detail-description">Sepet Boş</span>
                ) : (
                  <span className="detail-description">
                    Seçilen Paket Tutarı: <span>{total.toFixed(0)}₺</span>
                  </span>
                )}
                <Button
                  className="detail-button"
                  type="primary"
                  onClick={() => navigate("/payment")}
                >
                  Devam Et
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductsPage;
