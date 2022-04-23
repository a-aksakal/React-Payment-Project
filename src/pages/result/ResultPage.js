import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
import SuccesLogo from "../../assets/img/success.png";
import "./ResultPage.css";

function ResultPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(13);
  const key = "updatable";
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    if (counter === 0) {
      navigate("/");
    } else {
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      if (counter <= 10) {
        openNotification();
      }
    }
  });

  const openNotification = (placement = "top") => {
    notification.success({
      key,
      message: "Teşekkürler",
      description: `${counter} Saniye Sonra AnaSayfa'ya yönlendirileceksiniz...`,
      placement,
      duration: 13,
    });
    setTimeout(() => {
      notification.success({
        key,
        description: `${counter} Saniye Sonra AnaSayfa'ya yönlendirileceksiniz...`,
        placement,
      });
      if (counter === 1) {
        notification.close(key);
      }
    }, 1000);
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
        <div className="result-container">
          <div className="result-container-image">
            <img src={SuccesLogo} alt="success"></img>
          </div>
          <div className="result-container-text">
            <span>Başarıyla Tamamlandı!</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ResultPage;
