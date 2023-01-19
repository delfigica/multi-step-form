import React, { useState } from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
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

  return (
    <>
      {confirm ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
          }}
        >
          <Avatar src={icon} sx={{ width: 80, height: 80 }} />
          <Typography
            color="primary"
            sx={{ fontWeight: 700, fontSize: "2em", margin: "20px 0px" }}
          >
            Thank you!
          </Typography>
          <Typography
            color="secondary"
            sx={{ fontWeight: 400, width: "75%", textAlign: "center" }}
          >
            Thanks for confirming your subscription! We hope you have fun using
            our plataform. If you ever need support, please feel free to email
            us at support@loremgaming.com
          </Typography>
        </Box>
      ) : (
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
            sx={{
              backgroundColor: "hsl(217, 100%, 97%)",
              padding: "1em 2em",
              minHeight: "170px",
            }}
            elevation={0}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
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
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  key={extra.name}
                >
                  <Typography color="secondary" sx={{ fontWeight: 400 }}>
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1em 2em",
            }}
          >
            <Typography color="secondary" sx={{ fontWeight: 400 }}>
              Total (per month)
            </Typography>
            <Typography
              color="primary"
              sx={{
                fontWeight: 600,
                fontSize: "1.4em",
                color: "hsl(243, 100%, 62%)",
              }}
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
              sx={{ marginTop: "50px" }}
              color="secondary"
              onClick={goToBack}
            >
              Go Back
            </Button>
            <Button
              onClick={() => setConfirm(true)}
              variant="contained"
              sx={{ marginTop: "50px" }}
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
