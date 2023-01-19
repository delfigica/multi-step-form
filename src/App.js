import { Aside } from "./Components/Aside.js";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { Info } from "./Views/Info.js";
import { Plan } from "./Views/Plan.js";
import { AddOns } from "./Views/AddOns.js";
import { Summary } from "./Views/Summary.js";

function App() {
  const [steps, setSteps] = useState([
    {
      step: "1",
      title: "YOUR INFO",
      active: true,
    },
    {
      step: "2",
      title: "SELECT PLAN",
      active: false,
    },
    {
      step: "3",
      title: "ADD-ONS",
      active: false,
    },
    {
      step: "4",
      title: "SUMMARY",
      active: false,
    },
  ]);

  const [data, setData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
    },
    planInfo: {
      plan: "Arcade",
      period: "mo",
      price: 9,
    },
    onnsInfo: {
      selectCamps: [
        {
          name: "Online service",
          price: 1,
          checked: false,
          description: "Access to multiplayer games",
        },
        {
          name: "Larger storage",
          price: 2,
          checked: false,
          description: "Extra 1TB of cloud save",
        },
        {
          name: "Customizable profile",
          price: 2,
          checked: false,
          description: "Custom theme on your profile",
        },
      ],
    },
  });

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              height: "100vh",
              backgroundColor: "hsl(231, 100%, 99%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : {backgroundColor: "hsl(231, 100%, 99%)",height: '105vh'}
      }
    >
      {!laptop && <Aside steps={steps} />}
      <Card
        sx={
          laptop
            ? {
                width: "70%",
                height: "80%",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
              }
            : {
                widht: "70%",
                margin: "-100px 15px",
                padding: "1.5em",
                borderRadius: "10px",

              }
        }
        elevation={3}
      >
        {laptop && <Aside steps={steps} />}

        {steps[0].active && (
          <Info setSteps={setSteps} setData={setData} data={data} />
        )}

        {steps[1].active && (
          <Plan setSteps={setSteps} setData={setData} data={data} />
        )}

        {steps[2].active && (
          <AddOns setData={setData} data={data} setSteps={setSteps} />
        )}

        {steps[3].active && (
          <Summary setData={setData} data={data} setSteps={setSteps} />
        )}
      </Card>
    </Box>
  );
}

export default App;
