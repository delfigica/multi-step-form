import { Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const Info = ({ setSteps, steps, setData, data }) => {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    number: false,
  });

  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);

  const onSubmit = (e) => {
    console.log('personalInfo: ', personalInfo.fullName.length)
    e.preventDefault();
    if (
      personalInfo.fullName.length == 0 ||
      personalInfo.email.length == 0 ||
      personalInfo.phone.length == 0
    ) {
      if (personalInfo.fullName.length == 0) {
        setErrors({ ...errors, name: true });
      } else if (personalInfo.email.length == 0) {
        setErrors({ ...errors, email: true });
      } else {
        setErrors({ ...errors, number: true });
      }
    } else {
      setData({
        ...data,
        personalInfo: personalInfo,
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
      setErrors({
        name: false,
        email: false,
        number: false,
      })
    }
  };


  const handleChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={ laptop ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70%",
        padding: "5em",
      } : {}}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Typography
          color="primary"
          variant="h2"
          sx={laptop ? { fontSize: "2em", fontWeight: 700 } : {fontSize: "1.5em", fontWeight: 700}}
        >
          Personal info
        </Typography>
        <Typography color="secondary" variant="body1" sx={{ fontWeight: 400 }}>
          Please provide your name, email address, and phone number.
        </Typography>
      </Box>
      <form>
        <Box
          sx={laptop ?{
            height: "280px",
            width: "500px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }: {}}
        >
          <Box>
            <Typography color="primary" sx={{ fontWeight: 400 }}>
              Name
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              type="text"
              placeholder="e.g Stephen King"
              helperText="This field is required"
              name="fullName"
              value={personalInfo.fullName}
              onChange={handleChange}
              error={errors.name}
            />
          </Box>
          <Box>
            <Typography color="primary" sx={{ fontWeight: 400 }}>
              Email Address
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              type="email"
              placeholder="e.g stepehnking@lorem.com"
              helperText="This field is required"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
              error={errors.email}
            />
          </Box>
          <Box>
            <Typography color="primary">Phone Number</Typography>
            <TextField
              sx={{ width: "100%" }}
              type="number"
              pattern="[0-9]+"
              placeholder="e.g +1 234 567 890"
              helperText="This field is required"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              error={errors.number}
            />
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={laptop ?{ marginTop: "50px" } : {marginTop: '10px'}}
            type="submit"
          >
            Next Step
          </Button>
        </Box>
      </form>
    </Box>
  );
};
