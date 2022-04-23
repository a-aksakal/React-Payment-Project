import { Button } from "antd";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";
import logo from "../../assets/img/ecozum.jpg";
import profile from "../../assets/img/profile.png";
import LoginContext from "../../store/LoginContext";
function ProductsPage() {
  const navigate = useNavigate();
  const { name } = useContext(LoginContext);
  const ChangeColor = (e) => {
    var div = document.getElementById("box1").style;
    console.log(div);
    if (div.borderStyle == "solid") {
      div.borderStyle = "none";
      div.transform = "";
    } else {
      div.borderStyle = "solid";
      div.transform = "scale(1.05)";
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img src={logo} />
        </div>
        <div>
          <div className="header-login">
            <img src={profile}></img>
            <span>{name}</span>
          </div>
        </div>
      </div>
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
  );
}

export default ProductsPage;
