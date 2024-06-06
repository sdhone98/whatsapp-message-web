import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Home.scss";
import React from "react";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const theme = createTheme({
    palette: {
      customGreen: {
        main: "#075e54",
      },
    },
  });

  const sendMessage = () => {
    if (!phoneNumberError) {
      const url = `https://wa.me/${phoneNumber}?text=${
        message ? message : "Hello..."
      }`;

      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const checkPhoneNumber = (e) => {
    if (e.target.value.length == 10) {
      setPhoneNumberError(false);
      setPhoneNumber(e.target.value);
    } else {
      setPhoneNumberError(true);
    }
  };

  return (
    <div className="main-home">
      <ThemeProvider theme={theme}>
        <Box
          className="content"
          height={"fit-content"}
          width={500}
          my={4}
          display="flex"
          flexWrap={"wrap"}
          alignItems="center"
          gap={4}
          m={0}
        >
          <h2 className="text">Send WhatsApp Message.</h2>
          <TextField
            error={phoneNumberError}
            helperText={phoneNumberError && "invalid phone number."}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="number"
            color="customGreen"
            onChange={checkPhoneNumber}
          />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            color="customGreen"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" color="customGreen" onClick={sendMessage}>
            Send
          </Button>
        </Box>
        <Paper></Paper>
      </ThemeProvider>
    </div>
  );
};
export default Home;
