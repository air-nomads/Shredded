import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function Lunch({
  open,
  handleClose,
  meal,
  meals,
  lunch,
  setLunch,
  date,
  userId,
  foodId,
  setFoodL,
  foodL,
  onlyLunch,
  rerender,
  setRerender,
  handleAlert,
  handleError,
}) {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState("100g");

  const saveFood = (food, quantity, meal, index, event) => {
    if (meal === "Lunch") {
      setLunch((prevState) => [
        ...prevState,
        { food: food, quantity: quantity, calories: "", protein: "" },
      ]);
    }
    const query = `${quantity} ${food}`;

    axios
      .get(
        `http://localhost:3000/nutrition?food=${query}&date=${date}&userId=${userId}&category=${meal}`
      )
      .then((res) => {
        console.log("RES: ", res);
        let cal = res.data.calories;
        let pro = res.data.protein_g;
        setLunch((prevState) => [
          ...prevState,
          { food: food, quantity: quantity, calories: cal, protein: pro },
        ]);
        setInput("");
        setQuantity("100g");
        setRerender(!rerender);
        handleAlert();
      })
      .catch(() => {
        handleError();
        console.log("Error occured when entering lunch");
      });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        placeholder="Enter food..."
        ariant="filled"
        required
        sx={{
          margin: "1rem",
          width: "300px",
        }}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <TextField
        placeholder="grams..."
        variant="outlined"
        label="Amount (g)"
        required
        sx={{
          margin: "1rem",
          width: "100px",
        }}
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          saveFood(input, quantity, meal);
        }}
      >
        Add{" "}
      </Button>
      <br />
    </div>
  );
}

export default Lunch;