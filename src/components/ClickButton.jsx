import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  selectCount,
} from "../store/ClickCounterSlice";
import { Button } from "@mui/material";

const ClickButton = () => {
  const dispatch = useDispatch();
  const [isBurstingIncrease, setIsBurstingIncrease] = useState(false);
  const [isBurstingDecrease, setIsBurstingDecrease] = useState(false);
  const [isResetClicked, setIsResetClicked] = useState(false);
  const count = useSelector(selectCount);

  const handlePlus = () => {
    dispatch(increment());
    setIsBurstingIncrease(true);
    setTimeout(() => {
      setIsBurstingIncrease(false);
    }, 500);
  };

  const handleMinus = () => {
    dispatch(decrement());
    setIsBurstingDecrease(true);
    setTimeout(() => {
      setIsBurstingDecrease(false);
    }, 500);
  };
  const handleReset = () => {
    dispatch(reset());
    setIsResetClicked(true);
    setTimeout(() => {
      setIsResetClicked(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="form-container">
        <p style={{ fontSize: "70px" }}>{count}</p>
        <Button
          style={{ marginRight: "10px" }}
          onClick={handlePlus}
          className={`click-button ${
            isBurstingIncrease ? "burst-increase" : ""
          }`}
          variant="contained"
        >
          Increase
        </Button>
        <Button
          onClick={handleMinus}
          className={`click-button ${
            isBurstingDecrease ? "burst-decrease" : ""
          }`}
          variant="contained"
        >
          Decrease
        </Button>
        <div style={{ marginTop: "10px" }}>
          <Button
            onClick={handleReset}
            className={`reset-button ${isResetClicked ? "clicked-reset" : ""}`}
            variant="contained"
            color="secondary"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClickButton;
