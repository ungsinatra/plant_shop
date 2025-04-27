import React from "react";
import headerLogo from "../../assets/img/Logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscription">
        <div className="subscription__container">
          <div className="benefit">
            <img
              src="../../assets/img/footer/garden-care.svg"
              alt="benefit__img"
              className="benefit__img"
            />
            <h4 className="benefit__title">Garden Care</h4>
            <p className="benefit__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="benefit">
            <img
              src="../../assets/img/footer/garden-care.svg"
              alt="benefit__img"
              className="benefit__img"
            />
            <h4 className="benefit__title">Garden Care</h4>
            <p className="benefit__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="benefit">
            <img
              src="../../assets/img/footer/garden-care.svg"
              alt="benefit__img"
              className="benefit__img"
            />
            <h4 className="benefit__title">Garden Care</h4>
            <p className="benefit__text">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <form className="footer__form">
            <p className=" footer__title">
              Would you like to join newsletters?
            </p>
            <input
              type="email"
              placeholder="enter your email address..."
              required
              className="footer__form-input"
            />
            <button className="footer__form-button button">Join</button>
            <p className="footer__text">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
