import React, { useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Modal Stuff
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MuscleItem from "./MuscleItem";
import ChooseExerciseModal from "./ChooseExerciseModal";

function ChooseMuscleModal({ handleClose }) {
  const [currMuscle, setCurrMuscle] = useState("Test Muscle");
  const [exerciseOpen, setExerciseOpen] = useState(false); // Open ChooseExerciseModal
  const [exerciseList, setExerciseList] = useState([]);

  // This handler gets invoked when muscle is clicked (axios call made)
  const handleExerciseOpen = (muscleName) => {
    setCurrMuscle(muscleName);
    setExerciseOpen(true);
    console.log(
      "Axios call generated,",
      "Exercises generated from database for specific muscle clicked"
    );
    // Axios request should be generated here
    // Place setExerciseOpen and setCurrMuscle to happen only after success
  };

  const handleExerciseClose = () => {
    setExerciseOpen(false);
  };

  // Dynamically load from database types maybe?
  const muscles = [
    "Biceps",
    "Triceps",
    "Chest",
    "Abdominals",
    "Lats",
    "Trapezius",
    "Lower Back",
    "Glutes",
    "Quadriceps",
    "Hamstring",
    "Calves",
  ];

  // MuscleItem elements created from muscles array.
  const muscleItems = muscles.map((muscle) => {
    return (
      <MuscleItem
        key={muscle}
        muscleName={muscle}
        handleExerciseOpen={handleExerciseOpen}
      />
    );
  });

  // Make an axios request here to get exercises according to muscle group

  return (
    <>
      <Typography align="center" variant="h4">
        Choose Muscle Modal
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          overflow: "auto",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 400,
          // border: "1px solid red",
        }}
      >
        {muscleItems}
      </Grid>
      <Button onClick={handleClose} variant="contained">
        Exit
      </Button>
      <ChooseExerciseModal
        muscleName={currMuscle}
        open={exerciseOpen}
        handleClose={handleExerciseClose}
        handleOpen={handleExerciseOpen}
        exerciseList={exerciseList}
      />
    </>
  );
}

export default ChooseMuscleModal;
