import React, { useState } from "react";

export default function PlusMinus(props) {
  let alcohol;
  let initialCount;
  let prevCount;
  let counts = props.countTypeInBasket(props.name);

  function counting() {
    counts = props.countTypeInBasket(props.name);
    return counts;
  }

  if (!!props.alc) {
    alcohol = props.alc;
    initialCount = 0;
  } else {
    alcohol = props.price;
  }

  const [count, setCount] = useState(initialCount);

  function plusWrapper() {
    counting();
    counts = counting();
    plus(counts);
  }

  function minusWrapper() {
    counting();
    counts = counting();
    minus(counts);
  }

  function plus(counts) {
    setCount((prevCount) => prevCount + 1);
    props.addToBasket({
      itemCount: counts,
      price: alcohol,
      name: props.name,
    });
  }

  function minus(counts) {
    setCount((prevCount) => prevCount - 1);
    if (prevCount > 0) {
      return prevCount - 1;
    }
    props.removeFromBasket({
      itemCount: counts,
      price: alcohol,
      name: props.name,
    });
    if (prevCount <= 0) return 0;
  }

  return (
    <>
      <div className="addContainer">
        <button className="circleButton" onClick={minusWrapper}>
          <div className="circle-button-text">-</div>
        </button>
        <div className="plus-minus-btn">{counts}</div>
        <button className="circleButton" onClick={plusWrapper}>
          <div className="circle-button-text">+</div>
        </button>
      </div>
    </>
  );
}
