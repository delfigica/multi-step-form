import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const AddOns = ({ data, setData, setSteps }) => {
  const [selectCamps, setSelectCamps] = useState(data.onnsInfo.selectCamps);

  const handleChangeChecked = (index) => (e) => {
    console.log("handleChangeChecked");
    setSelectCamps([
      ...selectCamps.slice(0, index),
      { ...selectCamps[index], checked: e.target.checked },
      ...selectCamps.slice(index + 1),
    ]);
  };
  console.log(selectCamps);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, onnsInfo: { selectCamps: selectCamps } });
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
        active: false,
      },
      {
        step: "4",
        title: "SUMMARY",
        active: true,
      },
    ]);
  };

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

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
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
          Pick add-ons
        </Typography>
        <Typography color="secondary" variant="body1" sx={{ fontWeight: 400 }}>
          Add-ons help enhance your gaming experience.
        </Typography>
      </Box>
      {laptop ? (
        <Box>
          {selectCamps.map((camp, index) => (
            <Box
              key={camp.name}
              sx={
                selectCamps.checked
                  ? {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "15px",
                      borderRadius: "5px",
                      border: "2px solid hsl(243, 100%, 62%)",
                      backgroundColor: "hsl(231, 100%, 99%)",
                      margin: "10px 0px",
                    }
                  : {
                      display: "flex",
                      alignItems: "center",
                      border: "2px solid hsl(229, 24%, 87%)",
                      justifyContent: "space-between",
                      padding: "15px",
                      borderRadius: "5px",
                      margin: "10px 0px",
                    }
              }
            >
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  sx={{
                    color: "hsl(243, 100%, 62%",
                    "&.Mui-checked": { color: "hsl(243, 100%, 62%" },
                  }}
                  checked={camp.checked}
                  onChange={handleChangeChecked(index)}
                  name={camp.name}
                />
                <Box>
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: "1.2em" }}
                  >
                    {camp.name}
                  </Typography>
                  <Typography color="secondary">{camp.description}</Typography>
                </Box>
              </Box>
              <Typography
                sx={{ color: "hsl(243, 100%, 62%)", fontWeight: 400 }}
              >
                {data.planInfo.period == "mo"
                  ? `+${camp.price}/mo`
                  : `+${camp.price * 10}/yr`}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          {selectCamps.map((camp, index) => (
            <Box
              key={camp.name}
              sx={
                camp.checked
                  ? {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "5px",
                      borderRadius: "5px",
                      border: "2px solid hsl(243, 100%, 62%)",
                      backgroundColor: "hsl(231, 100%, 99%)",
                      margin: "10px 0px",
                    }
                  : {
                      display: "flex",
                      alignItems: "center",
                      border: "2px solid hsl(229, 24%, 87%)",
                      justifyContent: "space-between",
                      padding: "5px",
                      borderRadius: "10px",
                      margin: "10px 0px",
                    }
              }
            >
              <Box sx={{ display: "flex" }}>
                <Checkbox
                  sx={{
                    color: "hsl(243, 100%, 62%",
                    "&.Mui-checked": { color: "hsl(243, 100%, 62%" },
                  }}
                  checked={camp.checked}
                  onChange={handleChangeChecked(index)}
                  name={camp.name}
                />
                <Box>
                  <Typography
                    color="primary"
                    sx={{ fontWeight: 700, fontSize: ".8em" }}
                  >
                    {camp.name}
                  </Typography>
                  <Typography
                    color="secondary"
                    sx={{ fontWeight: 400, fontSize: ".6em" }}
                  >
                    {camp.description}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={
                  laptop
                    ? { color: "hsl(243, 100%, 62%)", fontWeight: 400 }
                    : {
                        color: "hsl(243, 100%, 62%)",
                        fontWeight: 400,
                        fontSize: ".7em",
                      }
                }
              >
                {data.planInfo.period == "mo"
                  ? `+${camp.price}/mo`
                  : `+${camp.price * 10}/yr`}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
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
          onClick={handleSubmit}
          variant="contained"
          sx={laptop ? { marginTop: "50px" } : { marginTop: "10px" }}
          type="submit"
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
};
