import TextField from "@mui/material/TextField";
import { red, lightGreen } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiPhoneNumber from "mui-phone-number";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");
  const theme = createTheme({
    palette: {
      customGreen: {
        main: "#075e54",
      },
    },
  });

  const onPhoneNumberChanged = (phoneNumber, country) => {
    setPhoneNumber(phoneNumber);
  };

  const sendMessage = () => {
    if (phoneNumber) {
      const splitPhoneNumber = phoneNumber.split(" ");
      const _phoneNumber = splitPhoneNumber[1].replace("-", "");
      const url = `https://wa.me/${_phoneNumber}?text=${
        message ? message : "Hello..."
      }`;
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
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
          <MuiPhoneNumber
            defaultCountry="in"
            onChange={onPhoneNumberChanged}
            style={{ width: "40%" }}
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
