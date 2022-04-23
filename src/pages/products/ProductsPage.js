import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import Header from "../../component/Header";
import { SpinnerRoundFilled } from "spinners-react";

function ProductsPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const ChangeColor = (e) => {
    var div = document.getElementById("box1").style;
    console.log(div);
    if (div.borderStyle === "solid") {
      div.borderStyle = "none";
      div.transform = "";
    } else {
      div.borderStyle = "solid";
      div.transform = "scale(1.05)";
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
              <div
                id="box1"
                className="element-group"
                onClick={() => ChangeColor()}
              >
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
              <div className="element-group">
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
              <div className="element-group">
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
              <div className="element-group">
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
              <div className="element-group">
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
              <div className="element-group">
                <div className="element-photo"></div>
                <div className="element-detail">
                  <div className="element-header">
                    <span>Ürün Adı</span>
                    <span>26TL</span>
                  </div>
                  <div className="element-content">
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                    <span>Detay 1</span>
                  </div>
                  <hr className="element-detail-line" />
                  <div className="element-ticket">
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                    <span className="element-ticket-item">Etiket 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-detail-box">
              <hr className="container-line" />
              <div className="detail-group">
                <span className="detail-description">
                  Seçilen Paket Tutarı: <span>200TL</span>
                </span>
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
