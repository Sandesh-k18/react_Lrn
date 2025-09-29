import React, { useState } from "react";

function OnChnge() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState();
  const [shipping, setShipping] = useState("Pick Up");
  const [payType, setPayType] = useState("");

  const hndleNme = (e) => {
    setName(e.target.value);
  };

  const hndleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const hndleComment = (event) => {
    setComment(event.target.value);
  };

  const hndleShipping = (e) => {
    setShipping(e.target.value);
  };

  const hndlePytype = (event) => {
    setPayType(event.target.value);
  };
  return (
    <>
      <div>
        <input type="text" value={name} onChange={hndleNme} />
        <p>Name : {name}</p>
        <input type="number" value={quantity} onChange={hndleQuantity} />
        <p>Quantity : {quantity}</p>
        <textarea
          value={comment}
          placeholder="Kaifiat"
          onChange={hndleComment}
        ></textarea>
        <p>Comment : {comment} </p>
        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={hndleShipping}
          />
          Pick Up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={hndleShipping}
          />
          Delivery
        </label>
        <p>Shipping: {shipping} </p>
        <select value={payType} onChange={hndlePytype}>
          <option value="">Select payment method</option>
          <option value="Bank">Bank</option>
          <option value="e-Sewa">e-Sewa</option>
          <option value="Khalti">Khalti</option>
          <option value="Fone Pay">Fone Pay</option>
          <option value="Visa">Visa</option>
        </select>
        <p>Payment method: {payType} </p>
      </div>
    </>
  );
}
export default OnChnge;
