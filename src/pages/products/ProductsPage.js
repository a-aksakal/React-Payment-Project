import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import Header from "../../component/Header";
import { SpinnerRoundFilled } from "spinners-react";
import CartContext from "../../store/CartContext";
function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { cart, setCart, total } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setCart([]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
    var selectedProduct = cart.find((x) => x.id == item.id);

    if (selectedProduct !== undefined) {
      let index = cart.indexOf(selectedProduct);
      cart.splice(index, 1);
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
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
              {products.map &&
                products.map((item) => (
                  <div
                    id={`box${item.id}`}
                    className="element-group"
                    onClick={() => {
                      ChangeColor(item.id);
                      GetCart(item);
                    }}
                  >
                    <div className="element-photo">
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div className="element-detail">
                      <div className="element-header">
                        <span>{item.title.substring(0, 17)}</span>
                        <span>{item.price.toFixed(0)}₺</span>
                      </div>
                      <div className="element-content">
                        <div className="element-content-item">
                          <span>{item.description.substring(0, 25)}</span>
                        </div>
                        <div className="element-content-item">
                          <span>{item.description.substring(25, 50)}</span>
                        </div>
                        <div className="element-content-item">
                          <span>{item.description.substring(50, 75)}</span>
                        </div>
                      </div>
                      <hr className="element-detail-line" />
                      <div className="element-ticket">
                        <span className="element-ticket-item category">
                          {item.category.toUpperCase()}
                        </span>
                        <span className="element-ticket-item new ">
                          NEW PRODUCT
                        </span>
                        <span className="element-ticket-item highlights ">
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
                {total == 0 ? (
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
