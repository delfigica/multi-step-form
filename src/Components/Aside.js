import React from "react";
import {
  Card,
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import desktop from "../assets/desktop.svg";
import mobile from "../assets/mobile.svg";

export const Aside = ({ steps }) => {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {laptop ? (
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
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${mobile})`,
            width: "100%",
            height: "200px",
            objectFit: "cover",
            backgroundSize: "400px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'center',
              height: '100px'
            }}
          >
            {steps.map((step) => (
              <Avatar
                key={step.step}
                sx={
                  step.active
                    ? {
                        backgroundColor: "hsl(206, 94%, 87%)",
                        margin: "0px 10px",
                        color: "hsl(213, 96%, 18%)",
                        fontWeight: 700,
                      }
                    : {
                        backgroundColor: "hsl(243, 100%, 62%)",
                        border: "1.5px solid white",
                        margin: "0px 10px",
                      }
                }
              >
                {step.step}
              </Avatar>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};
