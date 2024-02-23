import React, { useState } from "react";
import bgImage from "../assets/call_action.svg";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    if (password === "password" && userName === "user") {
      setError("");
      navigate("/student");
    }
    setError("invalid user Name or password");
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
    <form>
      <div style={styles.container}>
        <Grid container spacing={2} sx={{ width: "40%", marginTop: "4rem" }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="UserName"
              required
              variant="outlined"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              required
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent={"center"}
            sx={{ display: "flex", justifyContent: "center", color: "red" }}
          >
            {error && <Typography>{error}</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default Login;
