import React from "react";
import Input from "./widgets/UI/Input";
import { InputType, size } from "../types/inedx";

const DeliveryForm = () => {
  return (
    <div className="delivery-form">
      <div className="delivery-form__container">
        <h4 className="delivery-form__title">Billing Address</h4>
        <form action="" className="delivery-form__form">
          <Input
            className="delivery-form__input"
            labelText="First Name"
            name="name"
            onChange={() => console.log}
            placeholder={""}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Last Name"
            name="lastName"
            onChange={() => console.log}
            placeholder={""}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Country / Region"
            name="region"
            onChange={() => console.log}
            placeholder={"Select a country / region"}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Town / City"
            name="city"
            onChange={() => console.log}
            placeholder={""}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Street Address"
            name="streetAddress"
            onChange={() => console.log}
            placeholder={"House number and street name"}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText=""
            name="streetAddress"
            onChange={() => console.log}
            placeholder={"Appartment, suite, unit, etc. (optional)"}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="States"
            name="states"
            onChange={() => console.log}
            placeholder={"Select a state"}
            type={InputType.text}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Zip"
            name="zip"
            onChange={() => console.log}
            placeholder={""}
            type={InputType.text}
            value=""
          />

          <Input
            className="delivery-form__input"
            labelText="Email address"
            name="email"
            onChange={() => console.log}
            placeholder={"ivanov@mail.ru"}
            type={InputType.email}
            value=""
          />
          <Input
            className="delivery-form__input"
            labelText="Phone Number"
            name="phone"
            onChange={() => console.log}
            placeholder={"Phone"}
            type={InputType.number}
            value=""
          />
        </form>
      </div>
    </div>
  );
};

export default DeliveryForm;
