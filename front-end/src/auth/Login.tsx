import React, { useState } from "react";
import bgImage from "../assets/call_action.svg";
import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in...");
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <Grid container spacing={2} sx={{ width: "40%", marginTop: "4rem" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Link to={"/home"}>
            <Button fullWidth variant="contained" onClick={() => handleLogin()}>
              Login
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
