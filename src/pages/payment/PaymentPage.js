import { Button } from "antd";
import React from "react";

function PaymentPage() {
  return (
    <div className="container">
      <div className="payment-detail"></div>
      <div className="cart-detail">
        <div className="item-header">
          <span>Sepetteki Ürünler</span>
        </div>
        <div style={{ height: 100, overflowY: "scroll;", overflowX: "hidden" }}>
          <div className="item-group">
            <span>Ürün Adı</span>
            <span>200TL</span>
          </div>
        </div>
        <div className="item-button">
          <Button type="primary">Ödeme Yap</Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
