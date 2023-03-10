import React, { useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Fab from "@mui/material/Fab";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import EggIcon from "@mui/icons-material/Egg";


function DayMealListItem({ mealName, handleChangeDisplay, calorieDisplay }) {
  return (
    <>
      <ListItemButton
        onMouseDown={() => handleChangeDisplay(mealName)}
        disableGutters
        sx={{ pr: 2, height: 72 }}
      >
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "white" }}>
            {mealName === "Breakfast" ? (
              <EmojiFoodBeverageIcon
                color="primary"
                sx={{ "&:hover": { color: "#006edc" } }}
              />
            ) : null}
            {mealName === "Lunch" ? (
              <BakeryDiningIcon
                color="primary"
                sx={{ "&:hover": { color: "#006edc" } }}
              />
            ) : null}
            {mealName === "Dinner" ? (
              <DinnerDiningIcon
                color="primary"
                sx={{ "&:hover": { color: "#006edc" } }}
              />
            ) : null}
            {mealName === "Snacks" ? (
              <EggIcon
                color="primary"
                sx={{ "&:hover": { color: "#006edc" } }}
              />
            ) : null}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${mealName}`} sx={{ width: 220 }} />
        <ListItemText primary={`${calorieDisplay}`} align="end" />
        <ListItemText primary={"cals"} align="end" sx={{ width: 0 }} />
      </ListItemButton>
      <Divider />
    </>
  );
}

export default DayMealListItem;
