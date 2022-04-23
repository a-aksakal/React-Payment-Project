import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
import Header from "../../component/Header";
import "./PaymentPage.css";

function PaymentPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const headerStyle = {
    justifyContent: "space-between",
    alignSelf: "flex-start",
    marginLeft: 300,
    width: 820,
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
          <Header style={headerStyle} />
          <div className="payment-container">
            <div className="payment-detail">
              <div className="payment-header">
                <span>Kart Bilgileri</span>
              </div>
              <div className="payment-group">
                <div className="payment-item">
                  <span>Kart Üzerindeki İsim Soyisim</span>
                  <input type="text" />
                </div>

                <div className="payment-item-row">
                  <div className="payment-item-row-item-card">
                    <span>Kart Numarası</span>
                    <input type="text" />
                  </div>
                  <div className="payment-item-row-item-exp">
                    <span>Son Kul. Tar.</span>
                    <input type="text" />
                  </div>
                  <div className="payment-item-row-item-cvc">
                    <span>CVV/CVC</span>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="payment-header">
                <span>Sözleşme</span>
              </div>
              <div className="contract-group">
                <p style={{ flex: 1.6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  tincidunt augue ut posuere lobortis. Nam aliquam ante vitae
                  bibendum dapibus. Pellentesque dignissim, ligula interdum
                  dignissim sagittis, turpis quam fermentum diam, eget molestie
                  felis ex vitae nisl. Praesent nec lorem fringilla, elementum
                  dolor in, vehicula purus. Aenean sagittis sapien vel feugiat
                  tincidunt. Morbi tincidunt nec eros vitae tincidunt. Nunc diam
                  nunc, imperdiet ac eros at, tincidunt rutrum neque.
                </p>
                <p style={{ flex: 2 }}>
                  Sed consectetur lectus ligula, nec imperdiet mi faucibus et.
                  Vivamus aliquam enim sapien, in venenatis eros ultrices nec.
                  Curabitur laoreet varius quam, nec volutpat erat rutrum a.
                  Aenean pellentesque at arcu vitae aliquam. Donec sed mattis
                  dui, sit amet condimentum mi. Aliquam porta ligula tortor, ut
                  egestas nisl efficitur vel.quam finibus metus, quis rhoncus
                  massa lectus lacinia neque. Nunc neque mi, faucibus sit amet
                  lacus sit amet, varius posuere nisi.
                </p>
              </div>
            </div>

            <div className="cart-detail">
              <div className="item-header">
                <span>Sepetteki Ürünler</span>
              </div>
              <div className="item-content">
                <div className="item-group">
                  <span>Ürün Adı</span>
                  <span className="item-group-price">200TL</span>
                </div>
                <div className="item-group">
                  <span>Ürün Adı</span>
                  <span className="item-group-price">200TL</span>
                </div>
                <div className="item-group">
                  <span>Ürün Adı</span>
                  <span className="item-group-price">200TL</span>
                </div>
                <div className="item-group">
                  <span>Ürün Adı</span>
                  <span className="item-group-price">200TL</span>
                </div>
              </div>
              <div className="item-total">
                <span>Toplam:</span>
                <span className="item-total-price">200TL</span>
              </div>
              <div className="item-button">
                <Button type="primary" onClick={() => navigate("/result")}>
                  Ödeme Yap
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PaymentPage;
