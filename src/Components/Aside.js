import React from "react";
import { Card, Box, Typography, Avatar } from "@mui/material";
import desktop from "../assets/desktop.svg";

export const Aside = ({ steps }) => {
  return (
    <Card
      sx={{
        width: "25%",
        height: "100%",
        backgroundImage: `url(${desktop})`,
        objectFit: "contain",
        backgroundSize: "250px",
        padding: "15px",
      }}
    >
      {steps.map((step) => (
        <Box
          sx={{ display: "flex", alignItems: "center", margin: "15px 0px" }}
          key={step.step}
        >
          <Avatar
            sx={
              step.active
                ? {
                    backgroundColor: "hsl(206, 94%, 87%)",
                    marginRight: "10px",
                    color: "hsl(213, 96%, 18%)",
                    fontWeight: 700,
                  }
                : {
                    backgroundColor: "hsl(243, 100%, 62%)",
                    border: "1.5px solid white",
                    marginRight: "10px",
                  }
            }
          >
            {step.step}
          </Avatar>
          <Box>
            <Typography color="secondary" sx={{ fontWeight: 400 }}>
              STEP {step.step}
            </Typography>
            <Typography color="white" sx={{ fontWeight: 700 }}>
              {step.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
};
