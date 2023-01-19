import React, { useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Switch, Typography } from "@mui/material";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";

export const Plan = ({ setSteps, data, setData }) => {
  const plans = [
    { name: "Arcade", price: 9, img: Arcade },
    { name: "Advanced", price: 12, img: Advanced },
    { name: "Pro", price: 15, img: Pro },
  ];

  const [selectedPlan, setSelectedPlan] = useState([
    data.planInfo.plan,
    data.planInfo.price,
  ]);

  const [period, setPeriod] = useState(data.planInfo.period);

  const handleChangePeriod = (e) => {
    if (e.target.checked) {
      setPeriod("yr");
    } else {
      setPeriod("mo");
    }
  };

  let checked = period == "yr";

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      planInfo: {
        plan: selectedPlan[0],
        price: selectedPlan[1],
        period: period,
      },
    });

    setSteps([
      {
        step: "1",
        title: "YOUR INFO",
        active: false,
      },
      {
        step: "2",
        title: "SELECT PLAN",
        active: false,
      },
      {
        step: "3",
        title: "ADD-ONS",
        active: true,
      },
      {
        step: "4",
        title: "SUMMARY",
        active: false,
      },
    ]);
  };

  const goToBack = () => {
    setSteps([
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
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "75%",
        padding: "5em",
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Typography
          color="primary"
          variant="h2"
          sx={{ fontSize: "2em", fontWeight: 700 }}
        >
          Select your plan
        </Typography>
        <Typography color="secondary" variant="body1" sx={{ fontWeight: 400 }}>
          You have the option of monthly or yearly billing.
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {plans.map((plan) => (
          <Box
            key={plan.name}
            sx={
              selectedPlan[0] == plan.name
                ? {
                    width: "240px",
                    height: "200px",
                    border: "2px solid hsl(243, 100%, 62%)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                    backgroundColor: "hsl(231, 100%, 99%)",
                    margin: "0px 5px",
                  }
                : {
                    width: "240px",
                    height: "200px",
                    border: "2px solid hsl(229, 24%, 87%)",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "20px",
                    margin: "0px 5px",
                  }
            }
            onClick={() => setSelectedPlan([plan.name, plan.price])}
          >
            <Avatar src={plan.img} sx={{ width: 50, height: 50 }} />
            <Box>
              <Typography
                color="primary"
                sx={{ fontWeight: 700, fontSize: "1.4em" }}
              >
                {plan.name}
              </Typography>
              <Typography color="secondary">
                {period == "yr"
                  ? `$ ${plan.price * 10}/yr`
                  : `$ ${plan.price}/mo`}
              </Typography>
              {period == "yr" && (
                <Typography color="primary" sx={{ fontWeight: "400" }}>
                  2 months free
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "hsl(231, 100%, 99%)",
          borderRadius: "5px",
          marginTop: "40px",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: 700 }}
          color={period ? "secondary" : "primary"}
        >
          Monthly
        </Typography>
        <Switch checked={checked} onChange={handleChangePeriod} />
        <Typography
          color={period ? "primary" : "secondary"}
          sx={{ fontWeight: 700 }}
        >
          Yearly
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button sx={{ marginTop: "50px" }} color="secondary" onClick={goToBack}>
          Go Back
        </Button>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ marginTop: "50px" }}
          type="submit"
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};
