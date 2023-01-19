import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import icon from "../assets/icon-thank-you.svg";

export const Summary = ({ setSteps, data, setData }) => {
  let extras = data.onnsInfo.selectCamps.filter((extra) => extra.checked);
  let total = data.planInfo.price;
  extras.forEach((extra) => {
    total += extra.price;
  });

  const goToUpdate = () => {
    setSteps([
      {
        step: "1",
        title: "YOUR INFO",
        active: false,
      },
      {
        step: "2",
        title: "SELECT PLAN",
        active: true,
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
  };

  const [confirm, setConfirm] = useState(false);

  const goToBack = () => {
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

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {confirm ? (
        <Box
          sx={
            laptop
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70%",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: '2em'
                }
          }
        >
          <Avatar
            src={icon}
            sx={laptop ? { width: 80, height: 80 } : { width: 60, height: 60 }}
          />
          <Typography
            color="primary"
            sx={
              laptop
                ? { fontWeight: 700, fontSize: "2em", margin: "20px 0px" }
                : { fontWeight: 700, fontSize: "1.5em", margin: "15px 0px" }
            }
          >
            Thank you!
          </Typography>
          <Typography
            color="secondary"
            sx={
              laptop
                ? { fontWeight: 400, width: "75%", textAlign: "center" }
                : { fontWeight: 400, textAlign: "center" }
            }
          >
            Thanks for confirming your subscription! We hope you have fun using
            our plataform. If you ever need support, please feel free to email
            us at support@loremgaming.com
          </Typography>
        </Box>
      ) : (
        <Box
          sx={
            laptop
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "75%",
                  padding: "5em",
                }
              : {}
          }
        >
          <Box sx={{ marginBottom: "20px" }}>
            <Typography
              color="primary"
              variant="h2"
              sx={
                laptop
                  ? { fontSize: "2em", fontWeight: 700 }
                  : { fontSize: "1.5em", fontWeight: 700 }
              }
            >
              Finishing up
            </Typography>
            <Typography
              color="secondary"
              variant="body1"
              sx={{ fontWeight: 400 }}
            >
              Double-ckeck everything looks OK before confirming.
            </Typography>
          </Box>
          <Card
            sx={
              laptop
                ? {
                    backgroundColor: "hsl(217, 100%, 97%)",
                    padding: "1em 2em",
                    minHeight: "170px",
                  }
                : {
                    backgroundColor: "hsl(217, 100%, 97%)",
                    padding: "1em 1em",
                    minHeight: "170px",
                    widht: "90%",
                  }
            }
            elevation={0}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-stard",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <Box>
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: "1.2em" }}
                  >
                    {data.planInfo.plan}{" "}
                    {data.planInfo.period == "mo" ? "(Monthly)" : "(Yearly)"}
                  </Typography>
                  <Typography
                    color="secondary"
                    sx={{
                      fontWeight: 400,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={goToUpdate}
                  >
                    Change
                  </Typography>
                </Box>
                <Typography
                  color="primary"
                  sx={{ fontWeight: 700, fontSize: "1.2em" }}
                >
                  {data.planInfo.period == "yr"
                    ? `$ ${data.planInfo.price * 10}/yr`
                    : `$ ${data.planInfo.price}/mo`}
                </Typography>
              </Box>
            </Box>
            <Box>
              {extras.map((extra) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  key={extra.name}
                >
                  <Typography
                    color="secondary"
                    sx={{ fontWeight: 400, fontSize: ".8em" }}
                  >
                    {extra.name}
                  </Typography>
                  <Typography color="primary" sx={{ fontWeight: 600 }}>
                    {data.planInfo.period == "yr"
                      ? `$ ${extra.price * 10}/yr`
                      : `$ ${extra.price}/mo`}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
          <Box
            sx={
              laptop
                ? {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1em 2em",
                  }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1em",
                  }
            }
          >
            <Typography color="secondary" sx={{ fontWeight: 400 }}>
              Total (per month)
            </Typography>
            <Typography
              color="primary"
              sx={
                laptop
                  ? {
                      fontWeight: 600,
                      fontSize: "1.4em",
                      color: "hsl(243, 100%, 62%)",
                    }
                  : {
                      fontWeight: 600,
                      fontSize: "1em",
                      color: "hsl(243, 100%, 62%)",
                    }
              }
            >
              {data.planInfo.period == "yr"
                ? `$ ${total * 10}/yr`
                : `$ ${total}/mo`}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              sx={laptop ? { marginTop: "50px" } : { marginTop: "10px" }}
              color="secondary"
              onClick={goToBack}
            >
              Go Back
            </Button>
            <Button
              onClick={() => setConfirm(true)}
              variant="contained"
              sx={laptop ? { marginTop: "50px" } : { marginTop: "10px" }}
              type="submit"
            >
              Confirm
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
