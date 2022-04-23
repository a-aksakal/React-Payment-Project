import { Button, Input, message } from "antd";
import React, { useContext } from "react";
import "./LoginPage.css";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import LoginContext from "../../store/LoginContext";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const { setName, setMail } = useContext(LoginContext);

  const navigate = useNavigate();
  const Send = () => {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var nameInput = document.getElementsByClassName("form-input");
    if (name === "") {
      message.warning({
        content: "İsim Soyisim Alanını Doldurmanız Zorunludur!",
        style: {
          marginTop: "42vh",
        },
      });
      nameInput[0].style.borderColor = "#e03b22";
    } else {
      setName(name);
      setMail(mail);
      navigate("/products");
    }
  };
  return (
    <>
      <div className="form-group">
        <div className="form-item">
          <p className="input-title">Adınız Soyadınız *</p>
          <Input
            id="name"
            className="form-input"
            title="Adınız Soyadınız"
            autoComplete="off"
            prefix={<UserOutlined className="input-icon" />}
          />
        </div>
        <div className="form-item">
          <p className="input-title">E-Mail Adresiniz</p>
          <Input
            id="mail"
            className="form-input"
            title="Email Adresiniz"
            autoComplete="off"
            prefix={<MailOutlined className="input-icon" />}
          />
        </div>
        <div className="form-item">
          <Button className="form-button" type="primary" onClick={() => Send()}>
            Devam Et
          </Button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
